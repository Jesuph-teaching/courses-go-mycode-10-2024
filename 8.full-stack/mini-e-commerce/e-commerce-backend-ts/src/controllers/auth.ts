import userModel, { UserInstanceMethods } from "../models/user.js";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (!user) throw new Error(`User ${email} not found`);
    if (!(await bcrypt.compare(password, user.password)))
      throw new Error(`invalid credentials`);
    // generate token for login
    // npx auth secret to generate token secret
    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.AUTH_SECRET,
      {
        expiresIn: 3600 * 24,
      }
    );
    res.json({ user: user.toSimpleUser(), token: token });
  } catch (e) {
    console.log(e);
    res.status(400).json({ error: (e as Error).message });
  }
}

export async function registerUser(req: Request, res: Response) {
  try {
    const { email, password, firstName, lastName, role } = req.body;
    const user = await userModel.create({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      role,
    });
    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.AUTH_SECRET,
      { expiresIn: 3600 * 24 }
    );
    res.json({ user: user.toSimpleUser(), token: token });
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
}

export function checkUser(
  req: Request & { user?: UserI & UserInstanceMethods },
  res: Response
) {
  res.json({ user: req.user?.toSimpleUser() });
}
