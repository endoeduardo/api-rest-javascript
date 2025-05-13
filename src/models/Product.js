import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        name: {
            type: String,
            require: true
        },
        description: String,
        createdAt: {
            type: Date,
            default: Date.now()
        },
        price: Number,
        userId: String
    },
    {versionKey: false}
);

const product = mongoose.model("Product", productSchema);

export default product;