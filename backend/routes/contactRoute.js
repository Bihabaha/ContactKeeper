//express
const express = require("express")
//contact schema
const Contact = require("../models/contactSchema")
//express router
const router = express.Router()


//post a contact
router.post("/",async(req,res)=>{
const{fullName,address,phoneNumber}=req.body
try{
//add to db
const contact = await Contact.create({fullName,address,phoneNumber})
res.status(200).json(contact)
}catch(error){
res.status(400).json({error:error.message})
}
})
//get all contacts
router.get("/",(req,res)=>{
    res.json({msg:"GET all contact"})
})
//get a single contacts
router.get("/:id",(req,res)=>{
    res.json({msg:"GET single all contact"})
})
//delete all contacts
router.delete("/:id",(req,res)=>{
    res.json({msg:"remove single contact"})
})
//update all contacts
router.patch("/:id",(req,res)=>{
    res.json({msg:"update single contact"})
})


module.exports=router