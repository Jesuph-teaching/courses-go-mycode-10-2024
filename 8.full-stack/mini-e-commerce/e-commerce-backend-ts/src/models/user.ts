import { Document, Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { Types } from "mongoose";
export interface UserD extends Document<Types.ObjectId>, UserI<Types.ObjectId> {
  password: string;
  toSimpleUser(): UserI;
}
// create the schema object of the user
const userSchema = new Schema<UserD>(
  {
    firstName: { type: String, minLength: 3, maxLength: 20, required: true },
    lastName: { type: String, minLength: 3, maxLength: 20, required: true },
    email: {
      type: String,
      required: true,
      validate: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "not valid email"],
      unique: true,
    },
    password: { type: String, required: true },
    role: { type: String, default: "user", enum: ["admin", "user"] },
  },
  {
    timestamps: true,
  }
);
/// hooks ...etc
userSchema.pre("save", async function () {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

userSchema.methods.toSimpleUser = function (): UserI {
  return {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    _id: this._id.toString(),
    role: this.role,
  };
};
// create the model
const userModel = model<UserD>("User", userSchema);

export default userModel;
