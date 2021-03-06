const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 3000;
const db = mongoose.connect('mongodb://localhost/bookAPI', { useNewUrlParser: true });
const Book = require('./models/bookModel')
const bodyParser = require('body-parser');
const bookRouter = require('./routes/bookRouter')(Book)



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my api!');
});

app.listen(port, () => {
    console.log(`running on ${port}`);
});
