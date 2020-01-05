const mongoose = require('mongoose');
const filmController = {};
const Film = require('../film.js');



filmController.get = (req, res) => {

    Film.find({}, (err, results) => {
        if (err) {
            res.status(500).send({ message: 'Error 500' })
        }
        if (!results) {
            res.status(404).send({ message: 'No hay películas en la base de datos' })
        }
        res.status(200).send({ results });
    })
}


module.exports = filmController;