const mongoose = require('mongoose');
const assert = require('assert');

mongoose.connect('mongodb+srv://kToklucu:zm4fck.@nodeexample.utne5.mongodb.net/test?authSource=admin&replicaSet=atlas-c8kyr8-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', { useNewUrlParser: true });

const Schema = mongoose.Schema;

const books = new Schema({
    name: String,
    author: String,
    publisher: String,
    addDate: { type: Date, default: Date.now }
});

const book = mongoose.model('Book', books);


var newBook = [
    {
        name: 'Master Algoritm',
        author: 'Pedro Domingos',
        publisher: 'Paloma'
    },
    {
        name: 'Nuclear And Particle Physics',
        author: 'W.S.C Williams',
        publisher: 'Oxford University Press'
    },
    {
        name: 'Molekül Fiziği ve Kuantum Dünyası',
        author: 'Prof.Dr.İbrahim Okur',
        publisher: 'Değişim'
    },
    {
        name: 'Kuantum Mekanigine Giris',
        author: 'Ozbek Feyiz',
        publisher: 'Pearson'
    },
    {
        name: 'Einstein s Essays in Science',
        author: 'Albert Einstein',
        publisher: 'Dover'
    }
];

// book.collection.insertMany(newBook)


module.exports = mongoose;
module.exports = book;