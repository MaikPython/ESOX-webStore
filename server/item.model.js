const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    imgSrc:     { type: String, required: true }, 
    title:      { type: String, required: true }, 
    price:      { type: Number, required: true }, 
    category:   { type: String, required: true },
    createdAt:  { type: Date, default: Date.now }
})

itemSchema.statics.getItems = function(itemIds){
    return new Promise((resolve, reject) => {
        const query = itemIds.map(id => mongoose.Types.ObjectId(id))
        this.find({
            '_id': {
                $in: query
            }
        },(error, docs) => {
            if(error){
                console.log(error)
                return reject('Failed to get itens')
            }
            resolve(docs)
        })
    })
}

const Item = mongoose.model('Item', itemSchema)

module.exports = Item