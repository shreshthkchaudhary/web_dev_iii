const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
    console.log('Visited Home Page');
    res.status(200).sendFile(path.resolve(__dirname, './usable-data/navbar-app/index.html'))
    // res.status(200).send('You Have Visited Home Page');
});
app.get('/about', (req, res) => {
    console.log('Visited About Page');
    res.status(200).send('You Have Visited About Page');
});
app.all('/*splat', (req, res) => {
    console.log('Page Not Found !!');
    res.status(404).send('<h1>Page Not Found</h1>');
});

const PORT = 5000
app.listen(PORT, () => {
    console.log(`server is ON on address http://localhost:${PORT}`)
});