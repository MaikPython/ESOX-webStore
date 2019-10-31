const mongoose  = require('mongoose')
const bcrypt    = require('bcrypt')

const userSchema = new mongoose.Schema({
    email     :  { type: String, required: true, unique: true }, 
    hash      :  { type: String, required: true }, 
    createdAt :  { type: Date, default: Date.now }
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
                resolve(
                    {
                        email       : userDoc.email,
                        createdAt   : userDoc.createdAt,
                        _id         : userDoc._id,
                    }
                )
            })
        })        
    })
}


const User = mongoose.model('User', userSchema)


module.exports =  User 