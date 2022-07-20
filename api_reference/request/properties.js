const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const admin = express();
const test = require('./api_reference/test');

app.use(express.json());
app.use(cookieParser());

app.get('/about', (req, res) => {
    /* method 1 */
    // console.log(req.baseUrl);

    /* method 3 */
    // console.log(req.fresh);

    /* method 4 */
    // console.log(req.hostname);

    /* method 5 */
    // console.log(req.ip);

    /* method 6 */
    // console.log(req.ip);

    /* method 7 */
    // console.log(req.method);

    /* method 8 */
    // console.log(req.originalUrl);

    /* method 9 */
    // console.log(req.originalUrl);

    /* method 11 */
    // console.log(req.path);

    /* method 12 */
    // console.log(req.protocol);

    /* method 13 */
    // console.log(req.query);

    /* method 15 */
    // console.log(req.route);

    /* method 16 */
    // console.log(req.secure);

    /* method 17 */
    // console.log(req.slate);

    /* method 18 */
    // console.log(req.subdomains);

    /* method 19 */
    // console.log(req.subdomains);

    /* method 20 */
    console.log(req.cookies);
    
    // secured cookies are signed cookies
    // req.signedCookies

    /* method 14 */
    res.send('welcome to --about route!!!');
});

// app.get('/about/:id', (req, res) => {
/* method 10 */
//     console.log(req.params);

//     res.send('welcome to --about route!!!');
// })

// app.get('/about/:id?', (req, res) => {
/* method 15 */
//     console.log(req.route);
//     console.log(req.route.path);

//     res.send('welcome to --about route!!!');
// })

// app.use(express.json());
// app.post('/about', (req, res) => {
/* method 2 */
// body from method
// have to change to header content-type: application/json
//     console.log(req.body);

//     res.send(`welcome to ---about route with ${req.method} method!!!`);
// });

admin.get('/dashboard', (req, res) => {
    /* method 1 */
    // only work on sub route
    // console.log(req.baseUrl);

    /* method 3 */
    // console.log(req.fresh);

    /* method 4 */
    // console.log(req.hostname);

    /* method 5 */
    // console.log(req.ip);

    /* method 6 */
    // console.log(req.ip);

    /* method 7 */
    // console.log(req.method);

    /* method 8 */
    // console.log(req.originalUrl);

    /* method 9 */
    // console.log(req.originalUrl);

    /* method 11 */
    // console.log(req.path);

    /* method 12 */
    // console.log(req.protocol);

    /* method 13 */
    // console.log(req.query);

    /* method 14 */
    // res.send('welcome to -admin route!!!');

    /* method 16 */
    // console.log(req.secure);

    /* method 17 */
    // console.log(req.slate);

    /* method 18 */
    // console.log(req.subdomains);

    /* method 19 */
    // console.log(req.subdomains);

    /* method 20 */
    console.log(req.cookies);

    res.send('welcome to -admin route!!!');
});

// admin.get('/dashboard/:id', (req, res) => {
/* method 10 */
//     console.log(req.params);

//     res.send('welcome to -admin route!!!');
// })

// admin.get('/dashboard/:id?', (req, res) => {
/* method 15 */
//     console.log(req.route);
//     console.log(req.route.path);

//     res.send('welcome to -admin route!!!');
// })

app.use('/admin', admin);

// app.get('/', (req, res) => {
//     res.send('application connected successfully.');
// });

app.get('/', test);

// or

// app.get('/', (request, response) => {
//     response.send('application connected successfully.');
// });

app.listen(3000, () => {
    console.log('application listening on port 3000.');
});
