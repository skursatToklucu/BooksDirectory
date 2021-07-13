const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('./DataAccess.js');
const book = require('./DataAccess.js');


app.get('/books', (req, res) => {
    book.find({}, (err, doc) => {
        if (!err) {
            res.json(doc);
        }
        else {
            res.jsonp(err);
        }
    })
});

app.post('/', (req, res) => {
    const newBook = req.body;
    book.push(newBook);
    res.json("New Book Added");
});

app.put('/:id', (req, res) => {
    let newBook = req.body;
    let id = req.params.id;
    let message = "No Book Found";

    let index = book.findIndex((book) => book.id === id);

    if (index != -1) {
        book[index] = newBook;
        message = "Book Updated";
    }

    res.json(message);
});

app.delete('/:id', (req, res) => {

    let id = req.params.id;
    let message = "No Book Found";

    let index = book.findIndex((book) => book.id == id);

    if (index != -1) {
        book.splice(index, 1);
        message = "Book Deleted";
    }

    res.json(message);

})

app.listen(port);
