const express = require("express")
const {check} = require("express-validator/check")

// models
const Measurement = require("../models/measurement")

// middleware
const validate = require("../middleware/validate")
const authenticate = require("../middleware/authenticate")


// router
const router = express.Router()


// create
router.post(
    "/",
    [
        check("date").not().isEmpty().withMessage("Date is required."),
    ],
    validate(),
    authenticate.token(),
    (req, res, next) => {

        Measurement.create(req.body)
            .then(document => {

                res.send(document)
                return

            })
            .catch(error => {

                next(error)
                return

            })

    }
)


// export
module.exports = router
