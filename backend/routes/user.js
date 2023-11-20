const express = require("express");

const router = express.Router();
//controller functions
const { signupUser, loginUser } = require("../controllers/usercontroller");

//login router
router.post("/login", loginUser);

//signup router

router.post("/signup", signupUser);

module.exports = router;
