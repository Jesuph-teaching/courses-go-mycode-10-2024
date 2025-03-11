var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import productModel from "../models/product.js";
export function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { search, sorting, sortingDirection } = req.query;
            const products = yield productModel
                .find(search
                ? {
                    name: new RegExp(search, "i"),
                }
                : undefined)
                .sort(sorting
                ? {
                    [sorting]: sortingDirection === "asc" ? 1 : -1,
                }
                : { createdAt: 1 });
            res.json({ data: products });
        }
        catch (e) {
            res.json({ error: e.message });
        }
    });
}
export function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield productModel.create(req.body);
            res.json({ data: product });
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    });
}
export function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const productId = req.params.productId;
            const updateProduct = yield productModel.findOneAndUpdate({ _id: productId }, { $set: req.body }, { new: true });
            res.json({ message: "Product updated successfully", data: updateProduct });
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    });
}
export function getProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const productId = req.params.productId;
            const product = yield productModel.findOne({ _id: productId });
            if (!product)
                throw new Error("Product not found");
            res.json({ message: "Product found successfully", data: product });
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    });
}
export function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const productId = req.params.productId;
            const deleteStatus = yield productModel.deleteOne({ _id: productId });
            if (deleteStatus.deletedCount !== 1)
                throw new Error("Product couldn't be deleted");
            res.json({ message: `Product ${productId} has been deleted successfully` });
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    });
}
