const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    name : String,
    age : Number,
    vip : Boolean,
    joining_date : Date
})

module.exports = mongoose.model('User',userSchema)