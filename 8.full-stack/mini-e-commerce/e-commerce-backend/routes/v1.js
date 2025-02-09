import { Router } from "express";
import authRouter from "./auth.js";
import serverRouter from "./server.js";
import { isAdmin, isLoggedIn, verifyCredentials } from "../middlewares/auth.js";
import productRouter from "./products.js";
import managingProductRouter from "./managingProducts.js";
const v1Router = Router();
// routes that dont need to check credentials
v1Router.use("/auth", authRouter);
// routes that need to check credentials
v1Router.use(verifyCredentials);
v1Router.use("/products", productRouter);
v1Router.use("/", serverRouter);
// routes that need to be logged in (authorized)
v1Router.use(isLoggedIn);
//
v1Router.use(isAdmin);
v1Router.use("/admin/products", managingProductRouter);
// todo: implement admin routes

export default v1Router;
