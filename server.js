import app from "./src/app.js"

app.listen(process.env.API_PORT, () => {
    console.log("Server is alive");
});
