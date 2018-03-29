const express = require("express")
const {check} = require("express-validator/check")

// models
const Meal = require("../models/meal")

// middleware
const validate = require("../middleware/validate")
const authenticate = require("../middleware/authenticate")


// router
const router = express.Router()


// create
router.post(
    "/",
    [
        check("food_id").not().isEmpty().withMessage("Food is required."),
        check("quantity").not().isEmpty().withMessage("Quantity is required."),
    ],
    validate(),
    authenticate.token(),
    (req, res, next) => {

        let meal = req.body
        meal.user_id = req.user.id

        Meal.create(meal)
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

        Meal.find({user_id: req.user.id})
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

        Meal.findOne(query)
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

        Meal.findOne(query)
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


// delete
router.delete(
    "/:id",
    authenticate.token(),
    (req, res, next) => {

        const query = {
            _id: req.params.id,
            user_id: req.user.id,
        }

        Meal.findOneAndRemove(query)
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


// export
module.exports = router
