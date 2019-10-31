const express                       = require('express')
const router                        = express.Router()
const userController                = require('./user.controller')
const { check, validationResult }   = require('express-validator');


const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    next()
}

// REQUEST to login
router.post("/login", userController.login)


// REQUEST to create a new user 
router.post("/signup",
    [
     //Basic validations checks
     check('email').isEmail(),
     check('password').isLength({ min: 8 }).withMessage("Parool peab olema vähemalt 8 tähemärki!")
     .matches(/\d/).withMessage('Parool peab sisaldama numbrit!')
     .not().isIn(['123', 'parool', 'salasõna']).withMessage('Ära kasuta nii lihtsat parooli!') 
    ],
    validationMiddleware,
    userController.signup

)

module.exports = router