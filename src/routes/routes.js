import productRoutes from "../routes/productRoutes.js"
import userRoutes from "../routes/userRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({"message": "Server is online!"});
    });

    app.use(productRoutes, userRoutes);

};


export default routes;