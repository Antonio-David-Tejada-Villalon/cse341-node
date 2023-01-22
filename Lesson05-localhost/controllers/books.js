const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const allBooks = async (req, res, next) => {
    const result = await mongodb.getDb().db('library').collection('books').find();
    result.toArray().then((lists) =>{
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const oneBook = async (req, res, next) => {
    const bookId = new ObjectId(req.params.id);
    const result = await mongodb.getDb()
    .db('library')
    .collection('books')
    .find({_id: bookId});
    result.toArray().then((lists) => {
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const createABook = async (req, res) => {
    const book = {
        title: req.body.title,
        author: req.body.author,
        edition: req.body.edition,
        year: req.body.year,
        country: req.body.country,
        price: req.body.price
    };
    console.log(book);
    const response = await mongodb.getDb().db('library')
    .collection('books').insertOne(book);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Verify the information you are adding for adding a book, maybe is wrong');
    }
};

module.exports = { allBooks,  oneBook, createABook };