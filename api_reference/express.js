const express = require('express');
const app = express();

/* method 1 */
// gives data in a parsed format
app.use(express.json());

/* method 2 */
// gives data in a stream format
// app.use(express.raw());

/* method 3 */
// gives data in a stringified format
// app.use(express.text());

/* method 4 */
// gives data in stringified encoded format
// app.use(express.urlencoded());

/* method 5 */
// const router = express.Router();
// const router = express.Router({
//     caseSensitive: true
// });
// app.use(router);

/* method 6 */
// within url just write out file name
// app.use(express.static(__dirname));
// app.use(express.static(__dirname + '/api_reference/', {
//     index: 'methods.js',
// }));

/* used with router only */
// router.get('/about', (req, res) => {
//     res.send('welcome to router method');
// })

app.get('/', (req, res) => {
    res.send('welcome to get method');
})
app.post('/', (req, res) => {
    // console.log(req.body.toString()); // when use express.raw()
    // console.log(req.body);
    res.send('welcome to post method');
})

app.listen(3000, () => {
    console.log('app listening on port 3000');
})
