var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from "jsonwebtoken";
import userModel from "../models/user.js";
export function verifyCredentials(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const bearerToken = req.headers["authorization"];
            if (!bearerToken)
                throw new Error("Bearer token not provided");
            const token = bearerToken.split(" ")[1];
            const data = jwt.verify(token, process.env.AUTH_SECRET);
            const user = yield userModel.findById(data._id);
            if (!user)
                throw new Error("User not found or you are not logged in");
            req.user = user;
        }
        catch (e) {
            console.log(e.message);
        }
        next();
    });
}
export function isLoggedIn(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.user) {
            next();
        }
        else {
            res.json({ error: "You are not logged in" });
        }
    });
}
export function isAdmin(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.user.role === "admin") {
            next();
        }
        else {
            res.json({ error: "You are not an admin" });
        }
    });
}
