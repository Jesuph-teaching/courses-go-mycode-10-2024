import { Request, Router } from "express";
const serverRouter = Router();

serverRouter.get("/", (req: Request & { user?: UserI }, res) => {
  res.json({ message: "hello world", data: req.user });
});
export default serverRouter;
