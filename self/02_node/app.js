const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('HOME');
        console.log('visited home page');
        res.write('<html>');
        res.write('<head><title>Code</title></head>');
        res.write('<body><h1>Enter Your Details</h1>');

        res.write('<form action = "/submit-details" method = "POST">');
        res.write('<input type = "text" name = "username" placeholder = "Enter your name"> <br>');
        res.write('<label for = "male">Male</label>');
        res.write('<input type = "radio" id = "male" name = "gender" value = "male" />');
        res.write('<label for = "female">Female</label>');
        res.write('<input type = "radio" id = "female" name = "gender" value = "female" />');
        res.write('<br><input type = "submit" value = "Submit">');
        
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
        
    } else if (req.url.toLowerCase === '/submit-details' && req.method == 'POST') {
        fs.writeFileSync('user.txt', 'First Content');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();

    }
    // else {
    //     res.writeHead(404, { 'Content-Type': 'text/plain' });
    //     res.write('Page Not Found');
    //     console.log('countered an ERROR for:', req.method, req.url)
    //     return res.end();
    // }
    return res.end();

});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is ON http://localhost:${PORT}`)
})