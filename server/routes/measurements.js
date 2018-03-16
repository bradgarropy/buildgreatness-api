const express = require("express")
const {check} = require("express-validator/check")

// models
const Measurement = require("../models/measurement")

// middleware
const validate = require("../middleware/validate")
const authenticate = require("../middleware/authenticate")


// router
const router = express.Router()


const validateMeasurements = function(value, {req}) {

    let {_id, __v, user_id, date, ...measurements} = Measurement.schema.paths
    measurements = Object.keys(measurements)

    const keys = Object.keys(req.body)

    return measurements.some((measurement) => keys.includes(measurement))

}


// create
router.post(
    "/",
    [
        check("date").not().isEmpty().withMessage("Date is required."),
        check("weight").custom(validateMeasurements).withMessage("At least one measurement is required."),
    ],
    validate(),
    authenticate.token(),
    (req, res, next) => {

        let measurement = req.body
        measurement.user_id = req.user.id

        Measurement.create(measurement)
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
