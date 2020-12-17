//1) PACKAGE REQUESTS
const express = require('express');
const morgan = require('morgan');
const app = express();


//2) ROUTES REQUESTS
const emailRoutes = require('./routes/emailRoute');


//3) MIDDLEWARE
console.log(process.env.NODE_ENV);
app.use(express.json()); // FOR BEING ABLE TO USE REQ AND MORE or you can use bodyparser
app.use(morgan('dev')) //DISPLAYS ROUTE ACCESSED WITH RESPONSE TIME
app.use(express.static('./public'));
app.use((req, res, next) => {
    console.log('hello from the middleware');

    next();
})

//4) APP.USE ROUTES DECLARATION MIDDLEWARE
app.use('/api/v1/email', emailRoutes);


module.exports = app;
