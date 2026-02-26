const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/work", (req, res) => {
    res.sendFile(path.join(__dirname, "work.html"));
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});