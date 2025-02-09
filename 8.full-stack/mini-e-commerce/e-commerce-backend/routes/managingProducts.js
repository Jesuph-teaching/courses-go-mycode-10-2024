import { Router } from "express";
import { createProduct, updateProduct } from "../controllers/products.js";
const managingProductRouter = Router();

managingProductRouter.post("/", createProduct);
managingProductRouter.put("/:productId", updateProduct);

export default managingProductRouter;
