/**
 * there are five types of middleware
 * ---------------------------------
 * --error handling middleware
 * router level middleware
 * application level middleware
 * third party middleware
 * configurable middleware
 */

 const express = require('express');
 const app = express();
 
 app.get('/', (req, res) => {
     // res.send(`application ${req.originalUrl} - connected successfully.`);
 
     throw new Error('there\'s an server-side error');
 });
 
 const errorHandlingMiddleware = (err, req, res, next) => {
     // console.log(err);
     console.log(err.message);
     res.status(500).send('server-side error');
 };
 
 app.use(errorHandlingMiddleware);
 
 app.listen(3000, () => {
     console.log('application listening on port 3000.');
 });
 