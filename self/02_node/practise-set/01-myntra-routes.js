const http = require('http');

const server = http.createServer((req, res) => {
    
    console.log(req.url, req.method);

    if (req.url ==='home') {
        res.write("Home")
        return res.end()
    } else if (req.url === '/men') {
        res.write("Mens Section")
        return res.end()
    } else if (req.url === '/women') {
        res.write("Womens Section")
        return res.end()
    } else if (req.url === '/kids') {
        res.write("Kids Section")
        return res.end()
    } else if (req.url === '/cart') {
        res.write("Cart")
        return res.end()
    }

    res.writeHead(200, {'content-type':'text/html'})
    res.write(`
        <html>
            <head>
                <title>Myntra</title>
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/men'>Men</a></li>
                        <li><a href='/women'>Women</a></li>
                        <li><a href='/kids'>Kids</a></li>
                        <li><a href='/cart'>Cart</a></li>
                    </ul>
                </nav>
            </body>
        </html>
        `)
    return res.end()

})

const PORT = 3001
server.listen(PORT, () => {
    console.log(`Server is ON http://localhost:${PORT}`)
})
