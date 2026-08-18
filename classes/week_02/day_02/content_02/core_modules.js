const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// const data= fs.readFileSync("file.txt","utf-8"); //synchronous
// console.log(data);

// fs.readFile("file.txt","utf-8",(err,data)=>{ // asynchronous
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })


// fs.appendFile("file.txt", "\nhello students", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File updated successfully!");
//     }
// });


// fs.unlink("file1.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File deleted successfully!");
//     }
// });

const password = "Jhon@123";

// 1. Basic SHA-256 Hashing (Commented out in image)
// const hash = crypto.createHash("sha256").update(password).digest("hex");
// console.log(hash);

// 2. Generating a Random Salt (16 random bytes converted to hexadecimal)
const salt = crypto.randomBytes(16).toString("hex");
// console.log(salt);

// 3. Creating an HMAC Hash using the Salt
const hash = crypto.createHmac("sha256", salt).update(password).digest("hex");
console.log(hash);