"use strict";

const mongoose = require("mongoose"),
    subscriberSchema = mongoose.Schema({
        name: String,
        email: String,
        childAge: Number,
        phoneNumber: Number
    });

module.exports = mongoose.model("Register", subscriberSchema);