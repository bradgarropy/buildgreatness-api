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


// read all
router.get(
    "/",
    authenticate.token(),
    (req, res, next) => {

        Measurement.find({user_id: req.user.id})
            .then((documents) => {

                res.send(documents)
                return

            })
            .catch((error) => {

                next(error)
                return

            })

    }

)


// read one
router.get(
    "/:id",
    authenticate.token(),
    (req, res, next) => {

        const query = {
            _id: req.params.id,
            user_id: req.user.id,
        }

        Measurement.findOne(query)
            .then((document) => {

                res.send(document)
                return

            })
            .catch((error) => {

                next(error)
                return

            })

    }

)


// update
router.patch(
    "/:id",
    authenticate.token(),
    (req, res, next) => {

        const query = {
            _id: req.params.id,
            user_id: req.user.id,
        }
        const updates = req.body

        Measurement.findOne(query)
            .then((document) => {

                Object.assign(document, updates)

                document.save()
                    .then((document) => {

                        res.send(document)
                        return

                    })

            })
            .catch((error) => {

                next(error)
                return

            })

    }

)


// replace
router.put(
    "/:id",
    authenticate.token(),
    (req, res) => {

        res.send("put!")

    }
)


// delete
router.delete(
    "/:id",
    authenticate.token(),
    (req, res, next) => {

        const query = {
            _id: req.params.id,
            user_id: req.user.id,
        }

        Measurement.findOneAndRemove(query)
            .then((document) => {

                console.log(document)

                res.send(document)
                return

            })
            .catch((error) => {

                console.log(error)

                next(error)
                return

            })

    }

)


// export
module.exports = router
