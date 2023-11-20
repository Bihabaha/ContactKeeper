//express
const express = require("express")
//contact schema
const Contact = require("../models/contactSchema")

//controllers
const { postContacts, getContacts, getSingleContact, deleteContact, updateContacts}= require("../controllers/contactControllers")
//authorization (if you want to do any of function like remoce add.. you should be auhtenticated first)
const requireAuth= require("../middleware/requireAuth")
//express router
const router = express.Router()
router.use(requireAuth)
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