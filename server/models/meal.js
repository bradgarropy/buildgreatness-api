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


mealSchema.virtual("calories")
    .get(function() {

        const carbs_calories = this.carbs * 4
        const fat_calories = this.fat * 9
        const protein_calories = this.protein * 4

        const calories = carbs_calories + fat_calories + protein_calories

        return calories

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
