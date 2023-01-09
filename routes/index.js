const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Antonio David Tejada Villalon');
})

routes.get('/test', (req, res) => {
    res.send('This link is working');
})

module.exports = routes;

const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'));

module.exports = router;