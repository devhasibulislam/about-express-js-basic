/**
 * there are five types of middleware
 * ---------------------------------
 * --application level middleware
 * router level middleware
 * third party middleware
 * error handling middleware
 * configurable middleware
 */

 const express = require('express');
 const app = express();
 
 const myMiddleware = (req, res, next) => {
     console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.protocol} - ${req.originalUrl} - ${req.ip}`);
 
     // res.end('middleware task ends'); // not allow to execute next() segment
     // next('test'); // gives error but print out in console
     next();
 };
 
 app.use(myMiddleware);
 
 app.get('/', (req, res) => {
     res.send('application connected successfully.');
 });
 
 app.listen(3000, () => {
     console.log('application listening on port 3000.');
 });
 