import express from 'express'
import router from './routes/routes.js';
import connectToDatabase from './connection/dbConnection.js';
import dotenv from 'dotenv';
dotenv.config();


const connection = await connectToDatabase();

connection.on("error", error => {
    console.error("Could not establish a connection with the db!")
});

connection.on("open", () => {console.log("Connected to the db")});

const app = express();

app.use(express.json(), router);

export default app;