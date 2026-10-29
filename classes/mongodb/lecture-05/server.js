const express = require('express');
const mongoose = require('mongoose');
const Employee = require("./model/employee.model.js")
const app = express();
const PORT = 3000;


app.get("/api/employees", async (req, res) => {
    try {
        const employee = await Employee.find();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
    
})

mongoose.connect("mongodb://localhost:27017/GoogleDB").then(() => {
    console.log("Database Connected");
}).catch(() => {
    console.log(err);
})



app.listen(PORT, () => {
    console.log(`server is ON on address http://localhost:${PORT}`);
})