// /backend/src/routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.post('/movies', movieController.addMovie);
router.get('/movies', movieController.listMovies);

module.exports = router;
