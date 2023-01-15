const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createAContact);

router.put('/:id', contactsController.updateAContact);

router.delete('/:id', contactsController.deleteAContact);

module.exports = router;