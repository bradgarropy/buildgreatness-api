const express = require("express")
const User = require("../models/user")


// create router
const router = express.Router()


// CREATE
router.post("/", (request, response) => {

    console.log(request.body)

})


// READ
router.get("/", (request, response) => {

})


// UPDATE
router.patch("/", (request, response) => {

})


// DESTROY
router.delete("/", (request, response) => {

})


// export router
module.exports = router
