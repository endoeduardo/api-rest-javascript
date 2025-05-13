import { Router } from "express";
import ProductController from "../controllers/productController.js";

const router = Router();

router
    .get("/products/getAllProducts", ProductController.getAllProducts)
    .post("/products/registerProduct", ProductController.registerProduct)
    .post("/products/deleteProduct", ProductController.deleteProduct)
    .post("/products/updateProduct", ProductController.updateProduct)
    .post("/products/searchById", ProductController.searchById)
    .post("/products/searchUserProducts", ProductController.searchUserProducts);

export default router;