import mongoose, {mongo} from "mongoose";

async function connectToDatabase(){
    const db_uri = process.env.MONGODB_URI;
    mongoose.connect(db_uri);
    return mongoose.connection;
};

export default connectToDatabase;