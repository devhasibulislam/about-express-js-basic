const express = require('express');
const public = express.Router();

// const logger = (req, res, next) => {
//     console.log('welcome to logger!!!');
//     next();
// }

// public.all('*', logger);

// public.get('/', (req, res) => {
//     res.send(`application ${req.originalUrl} - connected successfully...`);
// })

// public.param('user', (req, res, next, id) => { 
//     req.user = id == 1 ? 'admin' : 'anonymous';
//     next();
// })

// public.param((route, options) => (req, res, next, val) => {
//     if (val === options) {
//         req.user = 'admin'
//     } else {
//         req.user = 'anonymous'
//     }
//     next();
// })

// public.param('user', '1');

// public.get('/:user', (req, res) => {
//     res.send(`hello ${req.user}!!!`);
// })

/* using path pattern or RegEx also like below */
// reference: https://expressjs.com/en/guide/routing.html
public.get('/ab?cd', (req, res)=> {
    res.end('successfully connected with public route.');
})

module.exports = public;