const mongoose = require('mongoose');

// Connection details — no auth needed for the Docker MongoDB container.
// 'mongo' resolves to the MongoDB container via Docker Compose's internal DNS.
const MONGO_HOSTNAME = 'mongo';
const MONGO_PORT = '27017';
const MONGO_DB = 'sharkinfo';

const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

// Retry logic — Docker's depends_on only waits for the container to start,
// not for MongoDB to be fully ready to accept connections.
const connectWithRetry = () => {
    mongoose.connect(url)
        .then(() => console.log('MongoDB connected successfully'))
        .catch(err => {
            console.error('MongoDB connection failed, retrying in 5s...', err.message);
            setTimeout(connectWithRetry, 5000);
        });
};

connectWithRetry();
