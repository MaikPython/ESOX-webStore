const express                       = require('express')
const router                        = express.Router()
const userController                = require('./user.controller')
const { check, validationResult }   = require('express-validator');
const jwt                           = require('jsonwebtoken')


const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    next()
}

//VERIFY JWT

router.post("/verify", (req, res) => {
    const bearerHeader = req.headers["authorization"];
    if(!bearerHeader) return res.send(400);
    const token = bearerHeader.split(" ")[1];
    if(!token) return res.send(400);
    jwt.verify( token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
        if(err){
            return res.status(400).send(err)
        }
        res.status(200).send(decoded)
      });
})

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