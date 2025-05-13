import user from "../models/User.js";
import NotFoundError from "../errors/NotFoundError.js";

class userAdminController {
    static async deleteUser (req, res, next) {
        try {
            const userId = req.body.userId;
            await user.deleteOne({_id: userId});
            res.status(200).send({"message": "Successfully deleted!"});
        } catch(err) {
            next(err);
        };
    };
};

export default userAdminController;