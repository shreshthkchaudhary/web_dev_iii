const express = require("express");
const app = express();
const PORT = 3000;

const students = [
    { rollNo: 1, name: "Krishn", section: "Core-B" },
    { rollNo: 2, name: "ayan", section: "Core-B" },
    { rollNo: 3, name: "anuj", section: "Core-B" },
    { rollNo: 4, name: "kunal", section: "Core-B" },
    { rollNo: 5, name: "sukhwinder", section: "Core-B" }
];

// Read Operation
app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:rollNo", (req, res) => {
    const id = req.params.rollNo;
    const student = students.find((student) => student.rollNo === Number(id));
    res.json(student);
});

app.listen(PORT, () => console.log("server is running on port 3000"));


// ///Read Operation
// app.get("/students", (req, res) => {
//     res.json(students)
// })

// //Read operation with id
// app.get("/students/:rollNo", (req, res) => {
//     const id = req.params.rollNo;
//     const student = students.find((student) => student.rollNo === Number(id));
//     if (!student) {
//         res.status(404).json({ success: false, message: "student not found" });
//     }
//     res.json({ success: true, student });
// })

// app.listen(PORT, () => console.log("server is running on port 3000"));