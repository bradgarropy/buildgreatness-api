const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")


// create application
const app = express()


// load env
dotenv.config()


// middleware
app.use(cors())


// app settings
app.set("json spaces", 4)


// all routes
app.get("*", (request, response) => {

    response.json({
        first_name: "Brad",
        last_name: "Garropy"
    })

})


// start application
app.listen(process.env.PORT, () => {

    console.log("Server listening on port %s.", process.env.PORT)

})
