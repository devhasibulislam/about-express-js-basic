const express = require('express');
const app = express();

// app.get('/', require('./api_reference/test'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.locals.country = 'bangladesh';
    console.log(res.locals);
    res.end();
})

app.get('/about', (req, res) => {
    console.log(res.headersSent);
    // res.send('application connected successfully.');
    res.render('view/about', {
        country: 'bangladesh'
    });
    console.log(res.headersSent);
});

app.listen(3000, () => {
    console.log('application listening on port 3000.');
});
