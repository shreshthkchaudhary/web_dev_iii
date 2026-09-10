const {readFile,writeFile} = require("fs")

readFile("./content/first.txt","utf8", (err,res) => {
    if (err) {
        console.log(err)
        return
    }
    const first = res
    readFile("./content/subfolder/test.txt", "utf8", (err,res)=>{
        if (err) {
            console.log(err)
            return
        }
        const test = res
        writeFile("./content/result-async.txt",`Here is the result : ${first} ${test}`,(err,res)=>{
            if (err){
                console.log(err)
                return
            }
            console.log('done task')
        })
    })
})
console.log("restart")