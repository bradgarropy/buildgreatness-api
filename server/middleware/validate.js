const {validationResult} = require("express-validator/check")


function validate() {

    const middleware = function(req, res, next) {

        let errors = validationResult(req)

        if(!errors.isEmpty()) {

            errors = errors.mapped()

            Object.keys(errors).forEach(key => {
                errors[key] = errors[key].msg
            })

            res.status(400)
            res.send(errors)

        }

        next()

    }

    return middleware

}


// export
module.exports = validate
