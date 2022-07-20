/**
 * there are five types of middleware
 * ---------------------------------
 * --router level middleware
 * application level middleware
 * third party middleware
 * error handling middleware
 * configurable middleware
 */

 const express = require('express');
 const app = express();
 const admin = express.Router();
 
 const myMiddleware = (req, res, next) => {
     console.log(`${new Date(Date.now()).toLocaleString()} - ${req.originalUrl}`);
     next();
 };
 
 admin.use(myMiddleware);
 
 admin.get('/', (req, res) => {
     res.send(`application ${req.originalUrl} - connected successfully.`);
 })
 
 app.use('/admin', admin);
 
 app.get('/', (req, res) => {
     res.send(`application ${req.originalUrl} - connected successfully.`);
 });
 
 app.listen(3000, () => {
     console.log('application listening on port 3000.');
 });
 