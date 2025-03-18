import { Router } from "express";
import {
  getOrders,
  getOrder /* ,updateOrder */,
} from "../controllers/order.js";
const managingOrderRouter = Router();

managingOrderRouter.get("/", getOrders);
managingOrderRouter.route("/:orderId").get(getOrder); //.put(updateOrder);

export default managingOrderRouter;
