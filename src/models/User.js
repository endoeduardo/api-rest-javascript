import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        listOfProducts: Array,
        role: {
            type: String,
            enum: ["admin", "premium", "normal"]
        }
    },
    {versionKey: false}
);

const user = mongoose.model("User", userSchema);

export default user;