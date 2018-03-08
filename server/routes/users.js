const express = require("express")
const User = require("../models/user")
const {check} = require("express-validator/check")
const validate = require("../middleware/validate")


// router
const router = express.Router()


// create
router.post(
    "/",
    [
        check("first_name").not().isEmpty().withMessage("First name is required."),
        check("last_name").not().isEmpty().withMessage("Last name is required."),
        check("email").not().isEmpty().withMessage("Email is required."),
        check("email").isEmail().withMessage("Invalid email."),
        check("password").not().isEmpty().withMessage("Password is required."),
        check("confirmation").not().isEmpty().withMessage("Password confirmation is required."),
        check("confirmation").custom((value, {req}) => value === req.body.password).withMessage("Passwords must match."),
    ],
    validate(),
    (req, res, next) => {

        User.create(req.body)
            .then(document => {
                res.send(document)
            })
            .catch(error => {

                if(error.name === "BulkWriteError") {

                    res.status(400)
                    res.send({email: "Email already in use."})

                }

                next(error)

            })

    }
)


// read one
router.get("/:id", (req, res) => {

    res.send("read one")

})


// read all
router.get("/", (req, res) => {

    res.send("read all")

})


// update
router.patch("/:id", (req, res) => {

    res.send("update")

})


// delete
router.delete("/:id", (req, res) => {

    res.send("delete")

})


// export
module.exports = router
