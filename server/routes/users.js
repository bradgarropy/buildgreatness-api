const express = require("express")


// router
const router = express.Router()


// create
router.post("/", (request, response) => {

    response.send("create")

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
