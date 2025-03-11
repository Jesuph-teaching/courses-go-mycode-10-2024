import jwt from "jsonwebtoken";
import userModel from "../models/user.js";
import { NextFunction, Request, Response } from "express";

export async function verifyCredentials(
  req: Request & { user?: UserI },
  res: Response,
  next: NextFunction
) {
  try {
    const bearerToken = req.headers["authorization"];
    if (!bearerToken) throw new Error("Bearer token not provided");
    const token = bearerToken.split(" ")[1];
    const data = jwt.verify(token, process.env.AUTH_SECRET) as { _id: string };
    const user = await userModel.findById(data._id);
    if (!user) throw new Error("User not found or you are not logged in");
    req.user = user;
  } catch (e) {
    console.log((e as Error).message);
  }
  next();
}

export async function isLoggedIn(
  req: Request & { user?: UserI },
  res: Response,
  next: NextFunction
) {
  if (req.user) {
    next();
  } else {
    res.json({ error: "You are not logged in" });
  }
}
export async function isAdmin(
  req: Request & { user?: UserI },
  res: Response,
  next: NextFunction
) {
  if (req.user!.role === "admin") {
    next();
  } else {
    res.json({ error: "You are not an admin" });
  }
}
