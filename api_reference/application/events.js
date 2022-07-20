const express = require('express');
const app = express();

/* events */
const admin = express();

admin.on('mount', parent => {
    console.log('admin mounted');
    console.log(parent);
})

admin.get('/', (req, res) => {
    res.send('admin connectivity success.')
})

app.use('/admin', admin);

app.get('/', (req, res) => {
    res.send('application connected successfully.')
})


app.listen(3000, () => {
    console.log('application listening on port 3000.');
});