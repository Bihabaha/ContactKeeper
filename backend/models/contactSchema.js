//mongoose
const mongoose= require("mongoose")
//Schema
const Schema = mongoose.Schema
//ContactSchema

const contactSchema = new Schema({
 fullName:{
    type:String,
    required:true
 },
 address:{
    type:String,
    required:true
 },
 phoneNumber:{
    type:Number,
    required:true
 },

    
},{timestamps:true})

module.exports= mongoose.model("Contact",contactSchema)