const mongoose = require("mongoose")


// define schema
const measurementSchema = mongoose.Schema({
    bicep: {
        type: mongoose.Schema.Types.Decimal128,
        required: false,
        unique: false,
    },
    body_fat: {
        type: mongoose.Schema.Types.Decimal128,
        required: false,
        unique: false,
    },
    calf: {
        type: mongoose.Schema.Types.Decimal128,
        required: false,
        unique: false,
    },
    chest: {
        type: mongoose.Schema.Types.Decimal128,
        required: false,
        unique: false,
    },
    date: {
        type: Date,
        required: [true, "Date is required."],
        unique: false,
    },
    quad: {
        type: mongoose.Schema.Types.Decimal128,
        required: false,
        unique: false,
    },
    shoulder: {
        type: mongoose.Schema.Types.Decimal128,
        required: false,
        unique: false,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User ID is required."],
        unique: false,
    },
    waist: {
        type: mongoose.Schema.Types.Decimal128,
        required: false,
        unique: false,
    },
    weight: {
        type: mongoose.Schema.Types.Decimal128,
        required: false,
        unique: false,
    },
})


// create model
const Measurement = mongoose.model("Measurement", measurementSchema)


// export model
module.exports = Measurement
