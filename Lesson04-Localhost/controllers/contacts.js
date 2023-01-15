const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db('contact').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(lists);
    });
};

const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
    .getDb()
    .db('contact')
    .collection('contacts')
    .find({_id: userId});
    result.toArray().then((lists) => {
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const createAContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    console.log(contact);
    const response = await mongodb.getDb().db('contact')
    .collection('contacts').insertOne(contact);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Verify the information you are adding for creating a contact, maybe is wrong');
    }
};

const updateAContact = async (req, res) => {
    const userId = ObjectId(req.params.id);
    //this is just for udpdating a specific field.
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb
    .getDb()
    .db('contact')
    .collection('contacts')
    .replaceOne({_id: userId}, contact);
    console.log(response);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Verify the information you are changing for updating a contact, maybe is wrong');
    }
};

const deleteAContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db('contact')
    .collection('contacts').remove({_id: userId}, true);
    console.log(response);
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Verify the information you want to delete in a contact, maybe is wrong');
    }
};

module.exports = { getAll,  getSingle, createAContact, updateAContact, deleteAContact };