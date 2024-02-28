// /backend/src/models/movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    posterUrl: {
        type: String,
        required: true
    },
    watched: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);