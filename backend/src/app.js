// /backend/src/app.js
const express = require('express');
const movieRoutes = require('./routes/movieRoutes');
const app = express();

app.use(express.json());
app.use('/api', movieRoutes);

app.get('/', (req, res) => {
    res.send('Watchlist API');
});

module.exports = app;