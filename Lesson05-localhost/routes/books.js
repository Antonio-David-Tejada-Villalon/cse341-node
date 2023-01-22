const express = require('express');
const router = express.Router();

const bookController = require('../controllers/books');

router.get('/', bookController.allBooks);
router.get('/:id', bookController.oneBook);
router.post('/', bookController.createABook);


module.exports = router;