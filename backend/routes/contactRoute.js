//express
const express = require("express")
//express router
const router = express.Router()


//post a contact
router.post("/",(req,res)=>{
    res.json({msg:"post contact"})
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