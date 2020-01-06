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

filmController.search = (req, res) => {
        console.log('search ha sido invocado');
        //posibles parametros de búsqueda limitados on frontend
        // _id, title, year, countries, genres, director, writers, actors, awards.wins, awards.nominations
        // type: tipo de dato, value: valor de busqueda
        const { type, searchData } = req.body;

        const query = createQuery(type, searchData);

        Film.find(query, (err, results) => {
            if (err) {
                res.status(500).send({ message: 'Error 500' })
            }
            if (!results) {
                res.status(404).send({ message: 'No hay películas en la base de datos' })
            }
            res.status(200).send({ results });
        })
    }
    //Función que genera la query según los datos recibidos del body
function createQuery(type, searchData) {
    let query = {};
    switch (type) {
        case 'title':
            query = { 'title': { $regex: searchData, $options: 'i' } };
            break;
        case 'year':
            query = { 'year': searchData };
            break;
        case 'countries':
            query = { 'countries': { $in: [searchData] } };
            break;
        case 'genres':
            query = { 'genres': { $in: [searchData] } };
            break;
        case 'director':
            query = { 'director': { $regex: searchData, $options: 'i' } };
            break;
        case 'writers':
            query = { 'writers': { $in: [searchData] } };
            break;
        case 'actors':
            query = { 'actors': { $in: [searchData] } };
            break;
        case 'awards':
            query = { 'awards': { $elemMatch: { 'win': searchData } } };
            break;
        case 'nominations':
            query = { 'awards': { $elemMatch: { 'nominations': searchData } } };
            break;
    }
    return query;
}


module.exports = filmController;