const express = require("express")
const dotenv = require("dotenv")
const bodyparser = require("body-parser")
const cors = require("cors")
const path = require("path")
const mongoose = require("mongoose")

// routes
const users = require("./routes/users")
const measurements = require("./routes/measurements")
const food = require("./routes/food")
const meals = require("./routes/meals")

// middleware
const logger = require("./middleware/logger")
const errors = require("./middleware/errors")


// environment
dotenv.config()


// application
const app = express()


// settings
app.set("json spaces", 4)


// database
mongoose.connect(process.env.MONGODB_URI)


// middleware
app.use(cors())
app.use(bodyparser.json())
app.use(logger)


// routes
app.use(express.static(path.join(__dirname, "public")))
app.use("/users", users)
app.use("/measurements", measurements)
app.use("/food", food)
app.use("/meals", meals)


// errors
app.use(errors)


// listen
app.listen(process.env.PORT, () => {

    console.log("Server listening on port %s.", process.env.PORT)

})
