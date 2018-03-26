const express = require("express")
const {check} = require("express-validator/check")

// models
const Food = require("../models/food")

// middleware
const validate = require("../middleware/validate")
const authenticate = require("../middleware/authenticate")


// router
const router = express.Router()


// create
router.post(
    "/",
    [
        check("name").not().isEmpty().withMessage("Name is required."),
        check("carbs").not().isEmpty().withMessage("Carbs are required."),
        check("fat").not().isEmpty().withMessage("Fat is required."),
        check("protein").not().isEmpty().withMessage("Protein is required."),
    ],
    validate(),
    authenticate.token(),
    (req, res, next) => {

        let food = req.body
        food.user_id = req.user.id

        Food.create(food)
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

        Food.find({user_id: req.user.id})
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

        Food.findOne(query)
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

        Food.findOne(query)
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

        Food.findOneAndRemove(query)
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
