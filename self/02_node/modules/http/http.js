// trial

const http = require('http');

const server = http.createServer((req,res)=>{

    // console.log(req);

    // process.exit();


    // console.log(req.url, req.method, req.headers);


    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>Code</title></head>');
    // res.write('<body><h1>CODING</h1></body>');
    // res.write('</html>');
    // res.end();




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

const PORT = 3000;
server.listen(PORT, ()=> {
    console.log(`server is ON on address http://localhost:${PORT}`)
})