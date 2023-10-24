//dotnenv
require("dotenv").config();

//Express
const express = require("express");

//express app
const app = express();
//Global middleware
app.use((req, res, next) => {
  console.log(req.path,req.method);
  next();
});
//route handler
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});
//listen to requests
app.listen(process.env.PORT, () => {
  console.log("listenning on port", process.env.PORT);
});
