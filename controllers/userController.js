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
userController.getUser = (req, res) => {
    User.find({}, (err, results) => {
        if (err) res.status(500).send({ message: "Error al obtener usuarios" })

        res.status(200).send({ results })
    })
}

//Autenticación
//userController.auth = (req, res) => {

//}

//actualizar usuario
userController.putUser = (req, res) => {
    let userId = req.params.userId;
    let update = req.body;

    User.findByIdAndUpdate(userId, update, (err, user) => {

        if (err) res.status(500).send({ message: 'Error al actualizar usuario' });

        res.status(200).send({ user });
    })
}

//agregar una película al usuario
userController.updateFilmography = (req, res) => {
    const { userId, filmId } = req.param;

    User.findByIdAndUpdate(userId, { $push: { "filmography": filmId } }, { upsert: true }, (err, user) => {

        if (err) res.status(500).send({ message: 'Error al incluir película' });

        res.status(200).send({ user });
    })
}

userController.getOneUser = (req, res) => {
    const { userId } = req.params
    User.find({ _id: userId }, (err, user) => {
        if (err) res.status(500).send("No se encuentra el usuario")

        res.status(200).send({ user })
    })
}
module.exports = userController;