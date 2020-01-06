const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    password: String,
    filmography: [String]
})

module.exports = mongoose.model('user', UserSchema, 'users');