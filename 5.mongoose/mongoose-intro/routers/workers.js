import { Router } from "express";
import { workerModel } from "../models/users.js";

const workersRouter = Router();
workersRouter
  .route("/login")
  .get((req, res) => {
    res.render("workers/login");
  })
  .post(async (req, res) => {
    const authBody = req.body;
    console.log(authBody);
    try {
      const user = await workerModel.authUser(
        authBody.email,
        authBody.password
      );
      if (user) res.redirect("/");
      else res.redirect("/workers/login?errorMessage=bad credentials");
    } catch (err) {
      res.redirect("/workers/login?errorMessage=internal error");
    }
  });

workersRouter.get("/add", async (req, res) => {
  res.locals.errorMessage = req.query.errorMessage;
  res.render("workers/add-workers");
});
workersRouter.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  res.locals = { userId, user: await workerModel.findById(userId) };
  res.render("workers/edit-workers");
});
workersRouter.post("/", async (req, res) => {
  try {
    const user = await workerModel.create(req.body);
    res.redirect("/");
  } catch (e) {
    if (e.message.includes("E11000"))
      res.redirect("/workers/add?errorMessage=User already exists");
    else res.send(e.message);
  }
});

workersRouter.post("/:userId/delete", async (req, res) => {
  const userId = req.params.userId;
  await workerModel.deleteOne({ _id: userId });
  res.redirect("/");
});
workersRouter.post("/:userId", async (req, res) => {
  const userId = req.params.userId;
  await workerModel.updateOne(
    { _id: userId },
    {
      $set: req.body,
    }
  );

  res.redirect("/");
});

export default workersRouter;
