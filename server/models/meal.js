const mongoose = require("mongoose")

// middleware
const {deleteEmptyProperties} = require("../middleware/mongoose")


// define schema
const mealSchema = mongoose.Schema({
    food_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Food is required."],
        unique: false,
    },
    name: {
        type: String,
        required: [true, "Name is required."],
        unique: false,
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required."],
        unique: false,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User ID is required."],
        unique: false,
    },
})


mealSchema.pre("save", function(next) {

    deleteEmptyProperties(this)

    next()
    return

})


// create model
const Meal = mongoose.model("Meal", mealSchema)


// export model
module.exports = Meal
