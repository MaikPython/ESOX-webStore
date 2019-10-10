require('dotenv').config()
var mongoose = require('mongoose');
mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we are connected')
});

let kittySchema = new mongoose.Schema({
    name: String
})

let Kitten = mongoose.model('Kitten', kittySchema)
let silence = new Kitten({name: 'Silence'})
console.log(silence.name)

silence.save((err, silence) =>{
    if(err) return console.log(error)
    silence
})