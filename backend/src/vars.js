// /backend/src/vars.js
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;
const mongodbUri = process.env.MONGODB_URI;

if (!mongodbUri) {
    throw new Error('The MONGODB_URI environment variable must be defined.');
}

module.exports = {
    port,
    mongodbUri,
};
