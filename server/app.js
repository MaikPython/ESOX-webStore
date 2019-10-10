const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require("path")
const userRouter = require('./user.js')
const mongoose = require('mongoose');
require('dotenv').config()
const DBurl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_HOST}`


app.use(userRouter)

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html" ))
})

app.get('/items/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"))
})

app.use("/", express.static('dist'))

function listen(){
  app.listen(PORT, () => {
    console.log("Server started", PORT);
    console.log(`http://localhost:${PORT}`)
  })
}



mongoose.connect(DBurl)
  .then(()=>{
    console.log("database is connected")
    listen()
  })
  .catch(( err )=>{
    console.log(err, "  is the error")
  })



