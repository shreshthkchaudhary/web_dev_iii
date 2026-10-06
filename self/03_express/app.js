const express = require('express');
const app = express();
app.get('/', (req, res) => {
    console.log('Visited Home Page');
    res.status(200).send('You Have Visited Home Page');
});
app.get('/about', (req, res) => {
    console.log('Visited About Page');
    res.status(200).send('You Have Visited About Page');
});
app.get('/*splat', (req, res) => {
    console.log('Page Not Found !!');
    res.status(404).send('<h1>Page Not Found</h1>');
});

const PORT = 5000
app.listen(PORT, () => {
    console.log(`server is ON on address http://localhost:${PORT}`)
});