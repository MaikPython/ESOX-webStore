const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Item = require('./item.model')

router.delete("/api/items/:itemId", (req, res)=>{
    Item.deleteOne({"_id" : mongoose.Types.ObjectId(req.params.itemId)}, (err)=>{
        if(err) return res.send(500)
        console.log("save success")
        return res.send(204)
    })
})

router.post('/', (req, res) => {
    const item1 = new Item(props)
    item1.save( err => {
        if(err){
            console.log("error", err)
            res.send
            return
        }
        console.log("Success create!")
        res.send(201);
    })
})


router.get('/', (req, res)=>{
    Item.find({}, (err, items)=>{
        if(err){
            console.log(err, '  error')
            res.status(500).send(err)
            return
        }
        res.send(items)
    })
})

router.get("/:itemId", (req, res)=>{
    Item.findById(req.params.itemId, (err, item)=>{
        if(err){
            console.log(err, '  error happened')
            res.status(500).send(err)
            return
        }
        res.send(item)
    })
})




module.exports = router