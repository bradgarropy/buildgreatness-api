const mongoose = require("mongoose")
const plugins = require("../plugins/mongoose")


// plugins
mongoose.plugin(plugins.cleanJSON)
mongoose.plugin(plugins.deleteEmptyProperties)


// define schema
const measurementSchema = mongoose.Schema({
    bicep: {
        type: Number,
        required: false,
        unique: false,
    },
    body_fat: {
        type: Number,
        required: false,
        unique: false,
    },
    calf: {
        type: Number,
        required: false,
        unique: false,
    },
    chest: {
        type: Number,
        required: false,
        unique: false,
    },
    date: {
        type: Date,
        required: [true, "Date is required."],
        unique: false,
    },
    quad: {
        type: Number,
        required: false,
        unique: false,
    },
    shoulder: {
        type: Number,
        required: false,
        unique: false,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User ID is required."],
        unique: false,
    },
    waist: {
        type: Number,
        required: false,
        unique: false,
    },
    weight: {
        type: Number,
        required: false,
        unique: false,
    },
})


// create model
const Measurement = mongoose.model("Measurement", measurementSchema)


// export model
module.exports = Measurement
