import { Router } from "express";
const serverRouter = Router();
serverRouter.get("/", (req, res) => {
    res.json({ message: "hello world", data: req.user });
});
export default serverRouter;
