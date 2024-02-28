// /backend/src/app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Watchlist API');
});

module.exports = app;