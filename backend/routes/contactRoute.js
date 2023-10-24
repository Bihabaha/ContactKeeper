//express
const express = require("express")
//contact schema
const Contact = require("../models/contactSchema")
//express router
const router = express.Router()
//controllers
const { postContacts, getContacts, getSingleContact, deleteContact, updateContacts}= require("../controllers/contactControllers")
//post a contact
router.post("/",postContacts)
//get all contacts
router.get("/",getContacts)
//get a single contacts
router.get("/:id",getSingleContact)
//delete all contacts
router.delete("/:id",deleteContact)
//update all contacts
router.patch("/:id",updateContacts)


module.exports=router