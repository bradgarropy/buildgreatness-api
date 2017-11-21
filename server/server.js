const express = require("express")
const dotenv = require("dotenv")
const bodyparser = require("body-parser")
const logger = require("./middleware/logger")
const users = require("./routes/users")


// load env
dotenv.config()


// create application
const app = express()


// app settings
app.set("json spaces", 4)


// middleware
app.use(bodyparser.json())
app.use(logger)


// routes
app.use("/api/users", users)


// start application
app.listen(process.env.PORT, () => {

    console.log("Server listening on port %s.", process.env.PORT)

})
