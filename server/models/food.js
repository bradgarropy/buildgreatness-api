const mongoose = require("mongoose")
const plugins = require("../plugins/mongoose")


// plugins
mongoose.plugin(plugins.cleanJSON)
mongoose.plugin(plugins.deleteEmptyProperties)


// define schema
const foodSchema = mongoose.Schema({
    carbs: {
        type: Number,
        required: [true, "Carbs are required."],
        unique: false,
    },
    fat: {
        type: Number,
        required: [true, "Fat is required."],
        unique: false,
    },
    fiber: {
        type: Number,
        required: false,
        unique: false,
    },
    name: {
        type: String,
        required: [true, "Name is required."],
        unique: false,
    },
    protein: {
        type: Number,
        required: [true, "Protein is required."],
        unique: false,
    },
    serving_size: {
        type: Number,
        required: false,
        unique: false,
    },
    servings_per_container: {
        type: Number,
        required: false,
        unique: false,
    },
    sodium: {
        type: Number,
        required: false,
        unique: false,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User ID is required."],
        unique: false,
    },
})


// virtuals
foodSchema.virtual("calories")
    .get(function() {

        const carbs_calories = this.carbs * 4
        const fat_calories = this.fat * 9
        const protein_calories = this.protein * 4

        const calories = carbs_calories + fat_calories + protein_calories

        return calories

    })


// model
const Food = mongoose.model("Food", foodSchema)


// export model
module.exports = Food
