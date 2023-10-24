//dotnenv
require("dotenv").config();
//Express
const express = require("express");
//contact routes
const contactRoute = require("./routes/contactRoute")
//express app
const app = express();
//Global middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use("/api/contacts",contactRoute);
//listen to requests
app.listen(process.env.PORT, () => {
  console.log("listenning on port", process.env.PORT);
});
