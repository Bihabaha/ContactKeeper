//mongoose
const mongoose = require("mongoose")
//contatct schema
const Contact = require("../models/contactSchema")


//Get all contacts
const getContacts = async(req,res)=>{
 const contacts = await Contact.find({}).sort({createdAt:-1})
 res.status(200).json(contacts)
}
//Post all contacts
const postContacts = async(req,res)=>{
const {fullName,address,phoneNumber}= req.body
//add to db
try{
 const contact = await Contact.create({fullName,address,phoneNumber})
 res.status(200).json(contact)
}catch(error){
res.status(400).json({error:error.message})
}

}
//Get singleContact
const getSingleContact = async(req,res)=>{
const {id}=req.params
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:"No such contact"})
}
const contact = await Contact.findById(id)
if(!contact){
    return res.status(404).json({error:"No such contact"})
}
res.status(200).json(contact)
}
//Delete all contacts
const deleteContact = async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such contact"})
    }
    const contact = await Contact.findOneAndDelete({_id:id})
    if(!contact){
        return res.status(400).json({error:"No such contact"})
    }
    res.status(200).json(contact)
}
// Update all contacts
const updateContacts = async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such contact"})
    }
    const contact = await Contact.findOneAndUpdate({_id:id},{...req.body})
    if(!contact){
        return res.status(400).json({error:"No such contact"})
    }
    res.status(200).json(contact)
}

module.exports={
    postContacts,
    getContacts,
    getSingleContact,
    deleteContact,
    updateContacts
}