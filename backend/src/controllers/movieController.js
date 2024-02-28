// /backend/src/controllers/movieController.js
const movieService = require('../services/movieService');

const addMovie = async (req, res) => {
    try {
        const movie = await movieService.addMovie(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listMovies = async (req, res) => {
    try {
        const movies = await movieService.listMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addMovie,
    listMovies,
};
