const express = require('express');
const admin = express.Router();
const router = express.Router();

// admin.get('/', (req, res) => {
//     res.send(`application ${req.originalUrl} - connected successfully...`);
// })

// admin.route('/')
//     .get((req, res) => {
//         res.send(`application ${req.originalUrl} - connected successfully with ${req.method} method.`);
//     })
//     .post((req, res) => {
//         res.send(`application ${req.originalUrl} - connected successfully with ${req.method} method.`);
//     })
//     .put((req, res) => {
//         res.send(`application ${req.originalUrl} - connected successfully with ${req.method} method.`);
//     })
//     .delete((req, res) => {
//         res.send(`application ${req.originalUrl} - connected successfully with ${req.method} method.`);
//     })

router.use('/', (req, res, next) => {
    console.log('using router.use() method middleware');
    next();
})

router.use((req, res, next) => {
    res.send('router.use() implementing done.')
})

admin.use('/', router);

module.exports = admin;