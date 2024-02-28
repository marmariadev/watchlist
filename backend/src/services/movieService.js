// /backend/src/services/movieService.js
const Movie = require('../models/movie');

const addMovie = async (movieData) => {
    const movie = new Movie(movieData);
    await movie.save();
    return movie;
};

const listMovies = async () => {
    return await Movie.find();
};

module.exports = {
    addMovie,
    listMovies,
};
