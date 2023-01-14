const express = require('express');
const router = express.Router();
const contact = require('../controllers/contacts')

router.get('/contacts', contact.getAll);
router.get('/contacts/:id', contact.getSingle);
router.use('/contacts', require('../routes/contacts'));
router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    res.send('Antonio David Tejada Villalon');
})

router.get('/test', (req, res) => {
    res.send('This link is working');
})

module.exports = router;