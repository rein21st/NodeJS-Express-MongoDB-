const express = require('express');
const bodyParser = require('body-parser');

const campsiteRouter = express.Router();

campsiteRouter.use(bodyParser.json());

campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.send('Will send all the campsites to you');
})
.post((req, res) => {
    res.send(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.send('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.send('Deleting all campsites');
});

campsiteRouter.route('/:campsiteId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.send('Will send all the campsites to you');
})
.post((req, res) => {
    res.send(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.send('PUT operation not supported on /campsites');
})
.delete((req, res) => {
    res.send('Deleting all campsites');
});

module.exports = campsiteRouter;
