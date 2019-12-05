const express               = require('express')
const router                = express.Router()
const User                  = require('./user.model')
const { authMiddleWare }    = require('./middlewares')
const Item                  = require('./item.model')


router.param("userId", (req, res, next, userId) => {
    User.findById(userId, (err, user) => {
        if(err || !user) return res.status(500).send("Error user param!")
        req.user = user
        next()
    })
})


router.param("itemId", (req, res, next, itemId) => {
    Item.findById(itemId, (err, item) => {
        if(err || !item) return res.status(500).send("Error item param!")
        req.item = item
        next()
    })
})

// Returns an user object

router.get('/:userId', authMiddleWare, (req, res) => {
    res.send(req.user)
})

// Returns all users
router.get("/", (req, res) => {
    User.find({}, (err, docs) =>{
        if(err) return handleError(err, res)
        res.status(200).json(docs)
    })
})

// Deletes all users
router.delete("/", (req, res) => {
    User.deleteMany({}, (err, docs) =>{
        if(err){return handleError(err, res)}
        console.log(docs)
        console.log("success delete many")
        res.send(204)
    })
})

// adds an item into cart
router.put('/:userId/cart/:itemId', (req, res) => {
    req.user.cart.push(req.item._id.toString())
    req.user.save((err) => {
        if(err){
            console.log(err)
            return res.status(500).send("Error cart save!")
        }
        res.send(req.user)
    })
})

// deletes an item from cart
router.delete('/:userId/cart/:itemId', (req, res) => {

    const index = req.user.cart.findIndex(itemId => itemId === req.item._id.toString())
    req.user.cart.splice(index, 1)

    req.user.save((err) => {
        if(err){
            console.log(err)
            return res.status(500).send("Error cart save!")
        }
        res.send(req.user)
    })
})

router.post('/:userId/checkout', authMiddleWare, async(req, res) => {
    const {error, amount} = await req.user.getCartAmount()
    if(error) return res.send(500)
    req.user.createPayment(amount)
    .then(()=> {
        return req.user.clearCart()
    })
    .then(() => {
        res.send(200)
    })
    .catch(() => {
        res.send(500)
    })
    console.log({error, amount})
    res.send(200)
})


function handleError(err, res){
    console.log(err)
    res.send(500)
}


module.exports = router