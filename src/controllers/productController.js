import product from "../models/Product.js";
import NotFoundError from "../errors/NotFoundError.js";

class ProductController {
    static async getAllProducts (req, res, next) {
        try {
            const allProducts = await product.find({});
            res.status(200).send(allProducts);
        } catch (err) {
            next(err);
        };
    };

    static async registerProduct (req, res, next) {
        try {
            await product.insertOne(req.body);
            res.status(204).end();
        } catch(err) {
            next(err);
        };
    };

    static async deleteProduct (req, res, next) {
        try {
            const productId = req.body.productId;
            await product.deleteOne({_id: productId});
            res.status(200).send({"message": "Successfully deleted!"});
        } catch(err) {
            next(err);
        };
    };

    static async searchById (req, res, next) {
        try {
            const searchedProduct = await product.findOne({_id: req.body.productId});
            if (searchedProduct !== null){
                res.status(200).send(searchedProduct);
            } else {
                next(new NotFoundError());
            };
        } catch(err) {
            next(err);
        };
    };

    static async searchUserProducts (req, res, next) {
        try {
            const listOfProducts = await product.find({userId: req.body.userId});
            res.status(200).send(listOfProducts);
        } catch(err) {
            next(err);
        };
    };

    static async updateProduct (req, res, next) {
        try {
            const productId = req.body.productId;
            const updatedValue = req.body.updatedValue;
            await product.updateOne({_id: productId}, updatedValue);
            res.status(200).send({"message": "Successfully updated!"});
        } catch (err) {
            next(err);
        };
    };
};

export default ProductController;