/**
 * there are five types of middleware
 * ---------------------------------
 * --configurable middleware
 * router level middleware
 * application level middleware
 * third party middleware
 * error handling middleware
 */

const express = require('express');
const app = express();

const logger = options => {
    return (req, res, next) => {
        if (options.log) {
            console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.protocol} - ${req.originalUrl} - ${req.ip}`);
            next();
        } else {
            throw new Error('server-side error');
        }
    }
}

app.use(logger({ log: false }));

app.get('/', (req, res) => {
    res.send(`application ${req.originalUrl} - connected successfully.`);
});

app.listen(3000, () => {
    console.log('application listening on port 3000.');
});
