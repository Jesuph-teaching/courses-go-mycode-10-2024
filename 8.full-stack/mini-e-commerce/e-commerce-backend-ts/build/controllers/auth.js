var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import userModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        try {
            const user = yield userModel.findOne({ email: email });
            if (!user)
                throw new Error(`User ${email} not found`);
            if (!(yield bcrypt.compare(password, user.password)))
                throw new Error(`invalid credentials`);
            // generate token for login
            // npx auth secret to generate token secret
            const token = jwt.sign({ _id: user._id.toString() }, process.env.AUTH_SECRET, {
                expiresIn: 3600 * 24,
            });
            res.json({ user: user.toSimpleUser(), token: token });
        }
        catch (e) {
            console.log(e);
            res.status(400).json({ error: e.message });
        }
    });
}
export function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, password, firstName, lastName, role } = req.body;
            const user = yield userModel.create({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                role,
            });
            /*  const user = new userModel({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
              });
              // actions
              await user.save(); */
            const token = jwt.sign({ _id: user._id.toString() }, process.env.AUTH_SECRET, { expiresIn: 3600 * 24 });
            res.json({ user: user.toSimpleUser(), token: token });
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    });
}
export function checkUser(req, res) {
    res.json({ user: req.user.toSimpleUser() });
}
