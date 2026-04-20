import express from "express";

const app = express();

const PORT: number = 3000;

app.get("/ping", (req, res) => {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log(`I am listening from the PORT ${PORT}`)
})