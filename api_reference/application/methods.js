const express = require('express');
const app = express();

/* method 1 */
// app.all('/secret', (req, res, next) => {
//     console.log('accessing the secret path', req.method);
//     res.send('welcome to global method path');
//     next();
// })

/* method 2 */
// app.delete('/', (req, res) => {
//     res.send('delete request to root page.')
// })

/* method 3 */
// app.disable('case sensitive routing');
// app.get('/about', (req, res) => {
//     res.send('case sensitive router.');
// })

/* method 4 */
// app.disabled('case sensitive routing');
// app.get('/about', (req, res) => {
//     res.send('case sensitive router.');
// })

/* method 5 */
// app.enable('case sensitive routing');
// app.get('/about', (req, res) => {
//     res.send('case sensitive router.');
// })

/* method 6 */
// contains changes in body and reload
// app.enabled('case sensitive routing');
// app.get('/about', (req, res) => {
//     res.send('case sensitive router....');
// })

/* method 7 */
// app.set('title', 'my app');

/* method 8 */
// app.get('/', (req, res) => {
//     res.send(app.get('title'));
// })

// app.get('/', (req, res) => {
//     res.send('application connected successfully.');
// })

/* method 9 */
/** complete methods list...
 * checkout: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * copy: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * delete: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * get: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * head: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * lock: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * merge: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * mkactivity: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * mkcol: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * move: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * m-search: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * notify: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * options: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * patch: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * post: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * purge: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * put: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * report: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * search: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * subscribe: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * trace: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * unlock: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 * unsubscribe: app.METHOD_NAME(PATH_NAME, CALLBACK_FUNCTION)
 */

/* method 10 */
// app.param('id', (req, res, next, id) => {
//     console.log('however getting up todo id:', id);
//     next();
// })

// app.get('/todo/:id', (req, res, next) => {
//     res.send('method used to approaching parameter second time');
//     next();
// })

// app.get('/todo/:id', (req, res) => {
//     res.send('method used to approaching parameter first time');
// })

/* method 11 */
// const blog = express();
// app.use('/blog/', blog);
// app.use('/blog/:id', blog);

// console.log(blog.path());

/* method 12 */
// app.post('/', (req, res) => {
//     res.send('welcome to root with post method.');
// });

/* method 13 */
// app.put('/', (req, res) => {
//     res.send('welcome to root with put method.');
// });

/* method 14 */
// app.route('/todo')
//     .get((req, res) => {
//         res.send(`todo with ${req.method} method`);
//     })
//     .post((req, res) => {
//         res.send(`todo with ${req.method} method`);
//     })
//     .put((req, res) => {
//         res.send(`todo with ${req.method} method`);
//     })
//     .delete((req, res) => {
//         res.send(`todo with ${req.method} method`);
//     })

/* method 15 */
// const todo = express();

// todo.get('/', (req, res) => {
//     res.send('welcome to todo route.');
// })

// app.use('/todo', todo);

/* method 16 */
// always root directory contain a views directory then sub directory can occurs
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    // res.send('application connected successfully.');
    // res.render('index');
    res.render('view/view');
})

/* method 17 */
app.listen(3000, () => {
    console.log('application listening on port 3000.');
});