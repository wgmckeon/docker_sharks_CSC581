const express = require('express');
const app = express();
const router = express.Router();

const db = require('./db');

// Route modules
const index  = require('./routes/index');
const sharks = require('./routes/sharks');

const path = __dirname + '/views/';
const port = 8080;

// Use EJS templating engine for .html files
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Parse URL-encoded form data (needed for the shark input form POST)
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, images) from the views directory
app.use(express.static(path));

// Mount routes
app.use('/', index);        // Landing page
app.use('/sharks', sharks); // Shark info, add, and get routes

app.listen(port, function () {
    console.log('Example app listening on port 8080!');
});
