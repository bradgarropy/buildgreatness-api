const mongoose = require("mongoose")
const plugins = require("../plugins/mongoose")


// plugins
mongoose.plugin(plugins.cleanJSON)
mongoose.plugin(plugins.deleteEmptyProperties)


// define schema
const mealSchema = mongoose.Schema({
    foods: [{
        food_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Food is required."],
            unique: false,
        },
        quantity: {
            type: Number,
            required: [true, "Quantity is required."],
            unique: false,
        },
    }],
    name: {
        type: String,
        required: [true, "Name is required."],
        unique: false,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User ID is required."],
        unique: false,
    },
})


// model
const Meal = mongoose.model("Meal", mealSchema)


// instance methods



// export model
module.exports = Meal
