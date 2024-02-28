const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('Watchlist API');
});

app.listen(port, () => {
    console.log('App listening on port 3000');
});