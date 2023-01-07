const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Antonio David Tejada Villalon');
})

routes.get('/test', (req, res) => {
    res.send('This link is working');
})

module.exports = routes;