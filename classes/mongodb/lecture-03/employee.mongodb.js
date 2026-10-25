use("GoogleDB")

// db.Employee.insert([
//     {
//         empID: 105,
//         name: "Radha",
//         salary: 184000,
//         department: "IT",
//         contact: 9123836678,
//         age: 18
//     },{
//         empID: 106,
//         name: "Ram",
//         salary: 1856000,
//         department: "Finance",
//         contact: 9483654678,
//         age: 20
//     },{
//         empID: 107,
//         name: "Lolu",
//         salary: 12406000,
//         department: "IT",
//         contact: 9123285678,
//         age: 18
//     },{
//         empID: 108,
//         name: "Monu",
//         salary: 1506000,
//         department: "Finance",
//         contact: 9183654678,
//         age: 21
//     }
// ])

// db.Employee.updateMany({},{
//     $set:{location:"Gurugram"}
// })


db.Employee.aggregate(
    [
        {
            $match: {department: "IT"}
        }
        ,{
            $project: {
                name: 1,
                salary: 1,
                contact: 1,
                location: 1,
                department: 1,
                _id: 0
            }
        }
        ,{
            $group: {
                _id: "$location",
                totalSalary: {$sum: "$salary"},
                avgSalary: {$avg: "$salary"},
                maxSalary: {$max: "$salary"},
                minSalary: {$min: "$salary"},
                totalEmployee: {$sum: 1},

            }

        }
        ,{
            $sort: {totalSalary: -1}
        }
        // ,{
        //     $limit: 1
        // }
        ,{
            $count: "totalSalary"
        }
    ]
)