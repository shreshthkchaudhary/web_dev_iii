const express = require('express');
const app = express();
const {products, people} = require('./usable-data/data');

app.get('/api/01', (req, res) => {
    res.json([{
        1:"A",
        2:"B",
        3:"C"
    }]);
});

app.get('/api/02', (req, res) => {
    res.json(products);
});

app.get('/api/03', (req, res) => {
    res.json(people);
});

app.all('/*splat', (req, res) => {
    console.log('page not found');
    res.status(200).send("page not found");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is ON on address http://localhost:${PORT}`);
});