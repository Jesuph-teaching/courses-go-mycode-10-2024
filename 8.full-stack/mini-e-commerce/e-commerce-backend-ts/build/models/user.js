var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
// create the schema object of the user
const userSchema = new Schema({
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
}, {
    timestamps: true,
});
/// hooks ...etc
userSchema.pre("save", function () {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.isNew || this.isModified("password")) {
            this.password = yield bcrypt.hash(this.password, 10);
        }
    });
});
userSchema.methods.toSimpleUser = function () {
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
    };
};
// create the model
const userModel = model("User", userSchema);
export default userModel;
