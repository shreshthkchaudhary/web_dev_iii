const http = require("http");

const server = http.createServer((req,res)=>{

    if (req.url==="/"){
        res.write("welcome to server")
        res.end()
    }
    if (req.url==="/about"){
        res.write("welcome to about section")
        res.end()
    }
    if (req.url==="/profile"){
        res.write("welcome to our profile")
        res.end()
    }
    //     res.write("")
    // res.end()

})

server.listen(3000)