import express from 'express'
import routes from './routes/routes.js';
import connectToDatabase from './config/dbConnection.js';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler.js';
dotenv.config();


const connection = await connectToDatabase();

connection.on("error", error => {
    console.error("Could not establish a connection with the db!")
});

connection.on("open", () => {console.log("Connected to the db")});

const app = express();

app.use(express.json());

routes(app);

app.use(errorHandler)

export default app;