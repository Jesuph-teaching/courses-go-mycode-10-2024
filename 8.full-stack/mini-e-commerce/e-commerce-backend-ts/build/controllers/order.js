var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { provincesPricesMap } from "../config/provinces-prices.js";
import orderModel from "../models/order.js";
import productModel from "../models/product.js";
export function createOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.user;
        try {
            const { cart, delivery } = req.body;
            if (!cart || !delivery)
                throw new Error("Invalid cart or delivery");
            const productsIds = cart.map((cartElement) => cartElement.productId);
            const products = yield productModel.find({ _id: { $in: productsIds } });
            if (products.length !== cart.length)
                throw new Error("We couldn't find all the products");
            const subtotals = cart.map((elem) => {
                const { productId, quantity } = elem;
                const product = products.find((p) => p._id.equals(productId));
                const itemPrice = product.price.current * quantity;
                return itemPrice;
            });
            const subtotal = subtotals.reduce((acc, itemPrice) => {
                return acc + itemPrice;
            }, 0);
            const provinceDetails = provincesPricesMap.get(delivery.province);
            if (!provinceDetails)
                throw new Error(`Province ${delivery.province} does not exist`);
            const deliveryPrice = provinceDetails.price;
            console.log(deliveryPrice, subtotal);
            const total = deliveryPrice + subtotal;
            const order = yield orderModel.create({
                cart,
                delivery,
                total,
                userId: user._id,
            });
            res.json({ data: order, message: "Order created successfully" });
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    });
}
export function getMyOrders(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = req.user;
        try {
            const orders = yield orderModel
                .find({ userId: user._id })
                .populate("cart.productId");
            res.json({
                data: orders,
                message: "Your order has been found successfully",
            });
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    });
}
