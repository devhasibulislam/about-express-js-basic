const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const admin = express();
const test = require('./api_reference/test');

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('application connected successfully.');
// });

app.get('/', test);
app.post('/', test);

// or

// app.get('/', (request, response) => {
//     response.send('application connected successfully.');
// });

app.listen(3000, () => {
    console.log('application listening on port 3000.');
});
