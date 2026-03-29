const mongoose = require('mongoose');

const MONGO_HOSTNAME = 'mongo';
const MONGO_PORT = '27017';
const MONGO_DB = 'sharkinfo';

const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

const connectWithRetry = () => {
    mongoose.connect(url)
        .then(() => console.log('MongoDB connected successfully'))
        .catch(err => {
            console.error('MongoDB connection failed, retrying in 5s...', err.message);
            setTimeout(connectWithRetry, 5000);
        });
};
connectWithRetry();
