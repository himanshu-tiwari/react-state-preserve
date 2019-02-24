const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { db } = require('./config');

const app = express();

// allow cross-orign requests
app.use(cors());

// connect to db
mongoose.connect('mongodb://'+ db.username + ':'+ db.password + '@'+ db.name, { useNewUrlParser : true });
mongoose.connection.once('open', () => {
    console.log('connected to db!');
});

app.use(bodyParser.json());
app.use('/api', require('./routes/index'));

app.listen(9000, () => {
    console.log("Now listening for requests on port 9000!")
});