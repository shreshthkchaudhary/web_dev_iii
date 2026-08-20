const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Students");
});

app.get("/contact", (req, res) => {
    res.send("Hello from contact route");
});


app.listen(3000, () => console.log("server is running on port 3000"));