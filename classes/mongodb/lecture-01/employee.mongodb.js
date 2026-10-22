use("GoogleDB")



// INSERT

// db.Employee.insert(
//     {
//         empID: 101,
//         name: "Shreshth",
//         salary: 650000,
//         department: "HR",
//         contact: 987654321,
//         age: 25
//     }
// )

// db.Employee.insertOne(
//     {
//         empID: 102,
//         name: "Shreyansh",
//         salary: 900000,
//         department: "IT",
//         contact: 912345678,
//         age: 24
//     }
// )

// db.Employee.insertMany([
//     {
//         empID: 103,
//         name: "Radha",
//         salary: 1200000,
//         department: "IT",
//         contact: 9123354678,
//         age: 18
//     },{
//         empID: 104,
//         name: "Ram",
//         salary: 1300000,
//         department: "IT",
//         contact: 9183654678,
//         age: 19
//     }
// ])




// SEARCH

// db.Employee.find()
// db.Employee.findOne()
// db.Employee.find({department: "IT"})
// db.Employee.findOne({department: "IT"})



// UPDATE

// db.Employee.updateOne(
//     {name: "Shreyansh"},
//     {
//         $set:{
//             age:28,
//             salary:923400
//         }
//     }
// )

// db.Employee.updateOne(
//     {_id: ObjectId('6ad9c131b2fbd6b1db01419b')},
//     {
//         $set:{
//             age:28,
//             salary:923400
//         }
//     }
// )

// db.Employee.updateMany(
//     {department: "IT"},
//     {
//         $set:{
//             salary: 9000
//         }
//     }
// )



// DELETE

// db.Employee.deleteOne(
//     {_id: ObjectId('6ad9c151725de47ecd6f2550')}
// )

// db.Employee.deleteMany(
//     {department: "IT"}
// )



// OPERATOR :

// db.Employee.find(
//     {salary:
//         {
//             $gte:1200000
//         }
//     }
// )




// // AND OPERATOR :

// db.Employee.find(
//     {salary:
//         {
//             $gt:1200000
//         }
//     },{
//         department:"IT"
//     }
// )



// // OR OPERATOR :

// db.Employee.find({
//     $or:[{
//             salary:{$gt:1200000}
//         },{
//             department:"IT"
//         }]
// })