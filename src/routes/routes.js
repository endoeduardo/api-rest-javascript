import { Router } from "express";

const router = Router();

const products = [
    {
        id: "123id",
        name: "T-shirt",
        description: "Basic White T-shirt",
        createdAt: new Date(),
        price: 1990,
        userId: "User123"        
    },
    {
        id: "4321",
        name: "Pants",
        description: "Basic White Pants",
        createdAt: new Date(),
        price: 2499,
        userId: "User123"        
    },
    {
        id: "1293",
        name: "Jacket",
        description: "Basic blue jacket",
        createdAt: new Date(),
        price: 2499,
        userId: "User4321"        
    }
];

router.get("/", (req, res) => {
    res.status(200).send({"message": "Server is online!"});
});

router.get("/products", (req, res) => {
    res.status(200).send(products)
});

router.post("/products/registerProduct", (req, res) => {
    products.push(req.body);
    res.status(204).end();
});

router.post("/products/searchById", (req, res) => {
    const productId = req.body.productId;
    const product = products.find((_item) => _item.id === productId);
    if (product) {
        res.status(200).send(product)
    } else {
        res.status(200).send({"message": "No product found!"})
    };
});

router.post("/products/searchUserProducts", (req, res) => {
    const userId = req.body.userId;
    const product = products.filter(_item => _item.userId === userId);
    if (product) {
        res.status(200).send(product)
    } else {
        res.status(200).send({"message": "No product found!"})
    };
});

export default router;