const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
const bodyParser = require('body-parser');
const cors = require("cors");

const router = require('./routes/router');

const Film = require('./film');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.options("*", cors());

app.use('/', router);

var mongoOptions = {
    // user: "m001-student",
    // pass: "m001-mongodb-basics",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'video'
};
const uri = "mongodb://localhost:27017/video"
try {
    mongoose.connect(uri, mongoOptions, (err, res) => {
        if (err) throw err;
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    })

} catch (error) {
    handleError(error);
}

//app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app;