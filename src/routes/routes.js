import { Router } from "express";
import ProductController from "../controllers/productController.js";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send({"message": "Server is online!"});
});

router.get("/products", (req, res) => {
    res.status(200).send(products)
});

router.get("/products/getAllProducts", ProductController.getAllProducts);
router.post("/products/registerProduct", ProductController.registerProduct);
router.post("/products/deleteProduct", ProductController.deleteProduct);
router.post("/products/updateProduct", ProductController.updateProduct);
router.post("/products/searchById", ProductController.searchById);
router.post("/products/searchUserProducts", ProductController.searchUserProducts);

export default router;