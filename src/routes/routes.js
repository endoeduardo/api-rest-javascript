import productRoutes from "../routes/productRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({"message": "Server is online!"});
    });

    app.use(productRoutes);

};


export default routes;