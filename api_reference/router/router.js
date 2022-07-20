const express = require('express');
const app = express();

const public = require('./api_reference/router/public');
const admin = require('./api_reference/router/admin');

app.use('/admin', admin);
app.use('/', public);

app.listen(3000, () => {
    console.log('application listening on port 3000.');
});
