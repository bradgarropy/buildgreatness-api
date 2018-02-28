const express = require("express")
const User = require("../models/user")


// router
const router = express.Router()


// create
router.post("/", (request, response) => {

    User.create(request.body)
        .then(document => {
            response.send(document)
        })
        .catch(error => {
            response.status(400)
            response.send(error)
        })

})


// read one
router.get("/:id", (request, response) => {

    response.send("read one")

})


// read all
router.get("/", (request, response) => {

    response.send("read all")

})


// update
router.patch("/:id", (request, response) => {

    response.send("update")

})


// delete
router.delete("/:id", (request, response) => {

    response.send("delete")

})


// export
module.exports = router
