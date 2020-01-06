const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var salt = 10;
const User = require("../user")

const jwt = require("jsonwebtoken");
const myprivatekey = "tokenprivatekey";

const userController = {};

//Crear Usuario
userController.createUser = (req, res) => {
    const data = req.body
    bcrypt.genSalt(salt, (err, salt) => {
        bcrypt.hash(data.password, salt, (err, hash) => {
            let passwordHashed = hash

            User.create({ first_name: data.first_name, last_name: data.last_name, email: data.email, gender: data.gender, password: passwordHashed }, (err, user) => {
                if (err) res.status(500).send("No se pudo crear el usuario")

                res.status(200).send({ user })
            })
        });
    });
}

//Devolver todos los usuarios
userController.getusers = (req, res) => {
    console.log('getusers ha sido invocado')
    User.find({}, (err, results) => {
        if (err) res.status(500).send({ message: "Error al obtener usuarios" })
            //console.log(results)
        res.status(200).send({ results })
    })
}

//Devolver un usuario dado el _id
userController.getUser = (req, res) => {
    let userId = req.params._id;

    console.log('getuser ha sido invocado ' + userId);

    User.findById(userId, (err, results) => {
        if (err) res.status(500).send({ message: "Error al obtener el usuario" })
        console.log(results)
        res.status(200).send({ results })
    })
}


//Autenticación
//userController.auth = (req, res) => {

//}

//actualizar usuario
userController.putUser = (req, res) => {
    let userId = req.params._id;
    let update = req.body;

    User.findByIdAndUpdate(userId, update, (err, user) => {

        if (err) res.status(500).send({ message: 'Error al actualizar usuario' });

        res.status(200).send({ user });
    })
}

//agregar una película al usuario
userController.updateFilmography = (req, res) => {
    let userId = req.params._id
    const { filmId } = req.body;
    console.log(userId);
    console.log(filmId);

    User.findByIdAndUpdate({ '_id': userId }, { $push: { "filmography": filmId } }, { 'new': true }, (err, user) => {

        if (err) res.status(500).send({ message: 'Error al incluir película' });

        res.status(200).send({ user });
    })
}


module.exports = userController;