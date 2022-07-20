const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    /* method 1 */
    // res.append('country','i\'m bangladeshi.');
    // res.send(res.get('country'));

    /* method 2 */
    // res.cookie('country', 'bangladesh').end();

    /* method 3 */
    // res.clearCookie('name');

    /* method 4 */
    // res.download('Hello world!');

    /* method 5 */
    // res.status(404).end('Not Found!');

    /* method 6 */
    // res.format({
    //     'text/plain': () => { res.send('Hello World') },
    //     'text/html': () => { res.send(`<p>Hello World!</p>`) },
    //     'application/json': () => { res.send({ message: "Hello World!" }) },
    //     default: () => { res.status(404).send('Not Found!') }
    // });

    /* method 7 */
    // Setting the response
    // res.set({
    //     'Content-Type': 'text/plain',
    //     'Content-Length': '123',
    //     ETag: '12345'
    // });
    // console.log(res.get('Content-Type'));

    /* method 8 */
    // res.status(404).json({ error: 'Not Found!' });

    /* method 9 */
    // res.status(200).jsonp({ message: 'success' });

    /* method 10 */
    // res.links({
    //     next: 'http://api.example.com/users?page=2',
    //     last: 'http://api.example.com/users?page=5'
    // })
    // console.log(res.get('link'));

    /* method 11 */
    // res.redirect('/about');

    /* method 12 */
    // res.render('view/view');

    /* method 14 */
    // res.sendStatus(405);

    /* method 15 */
    // res.set({
    //     'Content-Type': 'text/plain',
    //     'Content-Length': '123',
    //     ETag: '12345'
    // })
    // console.log('Content-Length');

    /* method 16 */
    // res.status(400).send('Bad Request');    

    /* method 17 */
    // res.vary('User-Agent').render('docs');

    /* method 13 */
    res.send('application connected successfully.');
});

// app.get('/about', (req, res) => {
//     res.send('welcome to about route');
// })

app.listen(3000, () => {
    console.log('application listening on port 3000.');
});
