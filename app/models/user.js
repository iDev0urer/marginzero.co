"use strict";
const   mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        autoIncrement = require('mongoose-auto-increment');

let userSchema = new Schema({
    id              : Number,
    firstName       : String,
    lastName        : String,
    email           : String,
    passwordHash    : String

});

mongoose.model('User', userSchema);