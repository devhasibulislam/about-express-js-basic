const express = require('express');
const app = express();

/* property 1 */
// const test = require('./api_reference/test');
// app.get('/', test);

// app.locals.title = 'My app';

/* property 2 */
const admin = express();
// app.use('/admin', admin);
app.use(['/admin', '/dashboard'], admin);

// admin.get('/', (req, res) => {
//     res.send('admin connectivity done.');
// });

admin.get('/manager', (req, res) => {
    res.send('all managers are available');
})

app.get('/', (req, res) => {
    // console.log(app.locals.title);
    res.send('application connected successfully.')
})


app.listen(3000, () => {
    console.log('application listening on port 3000.');
});