import { Schema, model } from "mongoose";

import bcrypt from "bcrypt";

const obligedString = { type: String, required: true, maxLength: 64 };
const userSchema = new Schema(
  {
    firstName: obligedString,
    lastName: obligedString,
    email: {
      type: String,
      required: true,
      validate: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "not valid email"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.pre("save", async function () {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  this.firstName = this.firstName.trim();
  this.lastName = this.lastName.trim();
});
userSchema.post("find", (docs) => {
  for (const doc of docs) {
    doc.set("lastName", doc.lastName.toUpperCase());
  }
});

userSchema.statics.authUser = async function (email, password) {
  const user = await this.findOne({ email: email });
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      return user;
    }
  }
  throw new Error(`Could not find user with email ${email}`);
};

const userModel = model("User", userSchema);
export default userModel;
