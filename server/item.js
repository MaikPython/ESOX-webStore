const express = require('express')
const router = express.Router()
//const DB = require("./database.js")
const mongoose = require('mongoose')

// "imgSrc": "http://www.kalastus.eu/media/kalastus-eu/.product-image/small/product/erply.s3.amazonaws.com/4722-4722_58fe4f290965f0.92666540_rms10bsf_large.jpg",
// "title": "Rapala Minnow Spoon 10cm BSF 32g",
// "price": "7,11 € (10%)",
// "category": "Roolandid"

const itemSchema = new mongoose.Schema({
    imgSrc:     { type: String, required: true }, 
    title:      { type: String, required: true }, 
    price:      { type: Number, required: true }, 
    category:   { type: String, required: true },
    createdAt:  { type: Date, default: Date.now }
})

const Item = mongoose.model('Item', itemSchema)


router.delete("/api/items/:itemId", (req, res)=>{
    Item.deleteOne({"_id" : mongoose.Types.ObjectId(req.params.itemId)}, (err)=>{
        if(err) return res.send(500)
        console.log("save success")
        return res.send(204)
    })
})



router.post('/api/items', (req, res) => {
    const props = {
        imgSrc: "google.com",
        title: "phone",
        price: 200,
        category: "phones",
    }
    const item1 = new Item(props)
    item1.save( err => {
        if(err){
            console.log("error", error)
            res.send
            return
        }
        console.log("Success create!")
        res.send(201);
    })
})


router.get('/api/items', (req, res)=>{
    Item.find({}, (err, items)=>{
        if(err){
            console.log(err, '  error')
            res.status(500).send(err)
            return
        }
        res.send(items)
    })
})

router.get("/api/items/:itemId", (req, res)=>{
    Item.findById(req.params.itemId, (err, item)=>{
        if(err){
            console.log(err, '  error happened')
            res.status(500).send(err)
            return
        }
        res.send(item)
    })
    // res.send(DB.getItem(req.params.itemId)) 
})




module.exports = router