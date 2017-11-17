const express = require("express")
const dotenv = require("dotenv")


// create application
const app = express()

fdfsda
// load env
dotenv.config()


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
