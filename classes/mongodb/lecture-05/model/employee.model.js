const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    empID:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    contact:{
        type: Number,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    }


})

module.exports = mongoose.model("employees", employeeSchema);

// {
//   _id: ObjectId('6ad9beb9d4557010f58fc1c0'),
//   empID: NumberInt('101'),
//   name: 'Shreshth',
//   salary: NumberInt('650000'),
//   department: 'HR',
//   contact: NumberInt('987654321'),
//   age: NumberInt('25'),
//   location: 'Gurugram'
// }