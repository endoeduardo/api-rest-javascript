import user from "../models/User.js";
import product from "../models/Product.js";
import NotFoundError from "../errors/NotFoundError.js";

class userController {
    static async getAllUsers (req, res, next) {
        try {
            const listOfUsers = await user.find({});
            res.status(200).send(listOfUsers);
        } catch (err) {
            next(err);
        };
    };

    static async registerUser (req, res, next) {
        try {
            await user.insertOne(req.body);
            res.status(204).end();
        } catch(err) {
            next(err);
        };
    };

    static async searchByUserId (req, res, next) {
        try {
            const searchedUser = await user.findOne({_id: req.body.userId});
            if (searchedUser !== null){
                res.status(200).send(searchedUser);
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

    static async updateUserInfo (req, res, next) {
        try {
            const userId = req.body.userId;
            const updatedValue = req.body.updatedValue;
            await user.updateOne({_id: userId}, updatedValue);
            res.status(200).send({"message": "Successfully updated!"});
        } catch (err) {
            next(err);
        };
    };
};

export default userController;