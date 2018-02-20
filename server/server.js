const express = require("express")
const dotenv = require("dotenv")
const bodyparser = require("body-parser")
const logger = require("./middleware/logger")
const users = require("./routes/users")


// environment
dotenv.config()


// application
const app = express()


// settings
app.set("json spaces", 4)


// middleware
app.use(bodyparser.json())
app.use(logger)


// routes
app.use("/users", users)


// listen
app.listen(process.env.PORT, () => {

    console.log("Server listening on port %s.", process.env.PORT)

})
