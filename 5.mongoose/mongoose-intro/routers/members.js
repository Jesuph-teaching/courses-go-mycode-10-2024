import { Router } from "express";
import { memberModel } from "../models/users.js";

const membersRouter = Router();
membersRouter
  .route("/login")
  .get((req, res) => {
    res.render("members/login");
  })
  .post(async (req, res) => {
    const authBody = req.body;
    console.log(authBody);
    try {
      const user = await memberModel.authUser(
        authBody.email,
        authBody.password
      );
      if (user) res.redirect("/");
      else res.redirect("/members/login?errorMessage=bad credentials");
    } catch (err) {
      res.redirect("/members/login?errorMessage=internal error");
    }
  });

membersRouter.get("/add", async (req, res) => {
  res.locals.errorMessage = req.query.errorMessage;
  res.render("members/add-members");
});
membersRouter.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  res.locals = { userId, user: await memberModel.findById(userId) };
  res.render("members/edit-members");
});
membersRouter.post("/", async (req, res) => {
  try {
    const user = await memberModel.create(req.body);
    res.redirect("/");
  } catch (e) {
    if (e.message.includes("E11000"))
      res.redirect("/members/add?errorMessage=User already exists");
    else res.send(e.message);
  }
});

membersRouter.post("/:userId/delete", async (req, res) => {
  const userId = req.params.userId;
  await memberModel.deleteOne({ _id: userId });
  res.redirect("/");
});
membersRouter.post("/:userId", async (req, res) => {
  const userId = req.params.userId;
  await memberModel.updateOne(
    { _id: userId },
    {
      $set: req.body,
    }
  );

  res.redirect("/");
});

export default membersRouter;
