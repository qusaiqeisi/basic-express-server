'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');

app.use(logger);

function start(port) {
    app.listen(port, () => console.log(`listining to port :${port}`))

};


app.get('/', (req, res) => {
    res.send('hello from the other side')
});


app.get('/bad', (req, res) => {
    throw new Error('Something went wrong!');
});


app.get('/person', validator, (req, res) => {
    const name = req.query.name;
    if (name) {
        res.json({name})
    } else {
        res.status(500).send('Something Broke!');
    }
});



app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
    app: app,
    start: start
};