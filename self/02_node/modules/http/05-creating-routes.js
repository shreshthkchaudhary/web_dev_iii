const http = require('http');
const server = http.createServer((req,res) => {
    if (req.url === "/"){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('HOME');
        console.log('visited home page');
        return res.end();
    } else if (req.url == "/about") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('ABOUT');
        console.log('visited about page')
        return res.end();
    } else if (req.url === "/favicon.ico") {
        res.writeHead(204);
        return res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Page Not Found');
        console.log('countered an ERROR for:', req.method, req.url)
        return res.end();
    }
    return res.end();

});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is ON http://localhost:${PORT}`)
})