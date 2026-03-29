const express = require('express');
const router = express.Router();
const path = require('path');

router.use(function (req, res, next) {
    console.log('/' + req.method);
    next();
});

// GET / — serve the landing page
router.get('/', function (req, res) {
    res.sendFile(path.resolve('views/index.html')); // Fixed: was 're.sendFile'
});

module.exports = router;
