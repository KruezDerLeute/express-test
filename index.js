import express from "express";

const app = express();

app.use(express.static("public"));

let count = 0;

app.get("/hello", (req, res) => {
    res.json({
        count,
    });
});

app.post("/hello", (req, res) => {
    count++;

    res.json({
        count,
    });
});

app.listen(3000, () => {
    console.log("Server started!");
});
