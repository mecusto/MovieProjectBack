const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    _id: String,
    title: String,
    year: Number,
    rated: String,
    runtime: Number,
    countries: [String],
    genres: [String],
    director: String,
    writers: [String],
    actors: [String],
    plot: String,
    poster: String,
    imdb: Object,
    tomato: Object,
    reviews: Object,
    userMeter: Number,
    userRating: Number,
    userReviews: Number,
    metacritic: Number,
    awards: Object,
    type: String
})

module.exports = mongoose.model('film', FilmSchema, 'movieDetails');