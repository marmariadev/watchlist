// /backend/src/database.js
const mongoose = require('mongoose');
const { mongodbUri } = require('./vars')

const connectWithRetry = async () => {
    try {
        await mongoose.connect(mongodbUri);
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.log('Error conecting to MongoDB Atlas', error);
        setTimeout(connectWithRetry, 5000);
    }
}

module.exports = {
    connect: connectWithRetry,
};