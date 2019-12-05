const mongoose  = require('mongoose')
const bcrypt    = require('bcrypt')
const Item = require('./item.model')
const Payment = require('./payments.model')

const userSchema = new mongoose.Schema({
    email     :  { type: String, required: true, unique: true }, 
    hash      :  { type: String, required: true }, 
    createdAt :  { type: Date, default: Date.now },
    cart      :  { type: [String], default: [] }
})


//Creates a new user!
userSchema.statics.signup = function({email, password}){
    return new Promise((resolve, reject) =>{
        bcrypt.hash(password, 10, (err, hash)=>{
            if(err) return reject(err)
            const user = new User({email, hash})
            user.save(err => {
                if(err) return reject(err)
                resolve(err)
            })
        })
    })
}

//Checks if user exists
userSchema.statics.login = function({email, password}){
    return new Promise((resolve, reject) =>{
        this.findOne({email}, (err, userDoc) => {
            if(userDoc === null) {return reject(new Error("User not found"))}
            if(err) return reject(err)
            bcrypt.compare(password, userDoc.hash, function(err, res){
                if(err) return reject(err)
                if(!res) return reject("Invalid password")
                resolve(
                    {
                        email       : userDoc.email,
                        createdAt   : userDoc.createdAt,
                        _id         : userDoc._id,
                        cart        : userDoc.cart
                    }
                )
            })
        })        
    })
}

userSchema.methods.getCartAmount = async function(){
    const items = await Item.getItems(this.cart)
    console.log('ITEMS',items)
    const amount = items.reduce( (acc, item) => acc + item.price, 0)
    return {error: null, amount} 
}

userSchema.methods.createPayment = async function(amount){
    return new Promise((resolve, reject) => {
        const payment = new Payment({
            amount,
            userId: this._id,
            cart: this.cart
        })
        payment.save((err) => {
            if(err){
                console.log(err)
                return reject('Failed to create a payment')
            }
            resolve('Success')
        })
    })
}

userSchema.methods.clearCart = async function(amount){
    return new Promise((resolve, reject) => {
        this.cart = []
        this.save((err) => {
            if(err){
                console.log(err)
                return reject("Failed to clear cart")
            }
            return resolve('Success')
        })
    })
}


const User = mongoose.model('User', userSchema)


module.exports =  User 