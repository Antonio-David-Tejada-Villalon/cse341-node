const routes =  require('express').Router();

routes.get('/', (req, res) => {
    res.send('Hello Alex Tew!');
});

module.exports = routes;