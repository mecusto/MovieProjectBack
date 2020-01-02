// en consola, conectar a la base de datos en el cluster:
// mongo "mongodb+srv://sandbox-lbsjr.mongodb.net/test"  --username m001-student --password m001-mongodb-basics
// cargar datos de usuario y películas:
// use video
// load("loadUser.js")
// load("loadMovieDetailsDataset.js")

//para conectar en compass: 
// hostname: sandbox-shard-00-01-lbsjr.mongodb.net
// port: 27017
// Auth: username/password
// username: m001-student
// password: m001-mongodb-basics

const mongoose = require('mongoose');
//const User = require('./user.js');

const connection = mongoose.connect('mongodb://sandbox-shard-00-01-lbsjr.mongodb.net:27017/video', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})