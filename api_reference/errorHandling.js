const express = require('express');
const app = express();
const fs = require('fs');

// app.get('/', (req, res, next) => {
// res.send('error handling route connected successfully.');
// res.send(x);

//     for (let i = 0; i <= 10; i++) {
//         if (i === 5) {
//             next('there\'s an error')
//         } else {
//             res.write('a')
//         }
//     }
//     res.end();
// })

// 404 error handler
// app.use((req, res, next) => {
//     // res.status(404).send('requested site not found!');
//     // next();

//     next('request error!');
// })

// last middleware function
// app.use((err, req, res, next) => {
//     if (res.headersSent) {
//         next('there\'s an error!');
//     } else {
//         if (err.message) {
//             res.status(500).send(err.message); // status code is 200, what a catch 😅
//         } else {
//             console.log('There is an error!');
//             res.status(500).send('request error!');
//         }
//     }
// })

// built in asynchronous function
// other middleware won't be called
// app.get('/', (req, res, next) => {
//     fs.readFile('/file-does-not-exists', (err, data) => {
//         if (err) {
//             next(err.message);
//         } else {
//             res.send(data);
//         }
//     })
// })

// custom asynchronous function
// app.get('/', (req, res, next) => {
//     setTimeout(() => {
//         try {
//             console.log(a);
//         } catch (error) {
//             next(error);
//         }
//     }, 1000);
// })

app.get('/', [
    (req, res, next) => {
        fs.readFile('/file-does-not-exists', 'utf-8', (err, data) => {
            console.log(data);
            next(err);
        });
    },
    (req, res, next) => {
        console.log(data.property);
    }
]);

// custom error handling
app.use((err, req, res, next) => {
    if (res.headersSent) {
        next('there\'s an error!');
    } else {
        if (err.message) {
            res.status(500).send(err.message);
        } else {
            res.status(500).send('there\'s an error!!!');
        }
    }
})

app.listen(3000, () => {
    console.log('error handling route listening on port 3000.');
})
