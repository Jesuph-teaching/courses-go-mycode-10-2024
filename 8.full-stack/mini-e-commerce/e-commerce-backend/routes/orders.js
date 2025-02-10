import { Router } from "express";
import { createOrder, getMyOrders } from "../controllers/order.js";

const orderRouter = Router();

orderRouter.route("/").post(createOrder).get(getMyOrders);

export default orderRouter;
