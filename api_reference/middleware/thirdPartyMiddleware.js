/**
 * there are five types of middleware
 * ---------------------------------
 * --third party middleware
 * router level middleware
 * application level middleware
 * error handling middleware
 * configurable middleware
 */

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', (req, res) => {
    console.log(req.cookies);
    res.send(`application ${req.originalUrl} - connected successfully.`);
});

app.listen(3000, () => {
    console.log('application listening on port 3000.');
});
