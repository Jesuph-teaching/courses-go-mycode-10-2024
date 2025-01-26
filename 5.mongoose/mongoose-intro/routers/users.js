import { Router } from "express";
import userModel from "../models/users.js";
import bcrypt from "bcrypt";

const usersRouter = Router();
usersRouter
  .route("/login")
  .get((req, res) => {
    res.render("users/login");
  })
  .post(async (req, res) => {
    const authBody = req.body;
    console.log(authBody);
    try {
      const user = await userModel.authUser(authBody.email, authBody.password);
      if (user) res.redirect("/");
      else res.redirect("/users/login?errorMessage=bad credentials");
    } catch (err) {
      res.redirect("/users/login?errorMessage=internal error");
    }
  });

usersRouter.get("/add", async (req, res) => {
  res.locals.errorMessage = req.query.errorMessage;
  res.render("users/add-users");
});
usersRouter.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  res.locals = { userId, user: await userModel.findById(userId) };
  res.render("users/edit-users");
});
usersRouter.post("/", async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.redirect("/");
  } catch (e) {
    if (e.message.includes("E11000"))
      res.redirect("/users/add?errorMessage=User already exists");
    else res.send(e.message);
  }
});

usersRouter.post("/:userId/delete", async (req, res) => {
  const userId = req.params.userId;
  await userModel.deleteOne({ _id: userId });
  res.redirect("/");
});
usersRouter.post("/:userId", async (req, res) => {
  const userId = req.params.userId;
  await userModel.updateOne(
    { _id: userId },
    {
      $set: req.body,
    }
  );

  res.redirect("/");
});

export default usersRouter;
