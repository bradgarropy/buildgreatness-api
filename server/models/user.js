const mongoose = require("mongoose")


// define schema
const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        unique: false,
    },
    last_name: {
        type: String,
        required: true,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: false,
    },
    auth_token: {
        type: String,
        required: false,
        unique: true,
    },
    auth_token_exp: {
        type: Date,
        required: false,
        unique: false,
    },
    reset_token: {
        type: String,
        required: false,
        unique: false,
    },
    reset_token_exp: {
        type: Date,
        required: false,
        unique: false,
    },
})


// create model
const User = mongoose.model("User", userSchema)


// export model
exports = User
