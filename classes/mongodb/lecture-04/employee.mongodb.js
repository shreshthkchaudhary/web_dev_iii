use("GoogleDB")

// Indexing 

// db.Employee.createIndex({contact:1})
// db.Employee.getIndexes()


// after creating index and then using it to call faster
db.Employee.find({contact:9123285678})


// SHARDING ??
