const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    avatar: {
        type: String,
        required: false
    },
    activated: {
        type: Boolean,
        default: false,
        required: false
    }
}, {
    timestamps: true

});

module.exports = mongoose.model("User" , userSchema , "users");