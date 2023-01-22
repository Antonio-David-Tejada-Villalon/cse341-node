const express = require('express');
const router = express.Router();
const book = require('../controllers/books');

//requiring books
router.use('/books', require('../routes/books'));
router.use('/', require('./swagger'));

router.use('/', (req, res) => {
    res.send('This Page is working')
})

module.exports = router;