//dotnenv
require("dotenv").config();
//mongoose
const mongoose =require("mongoose")
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

//connect to db 
mongoose.connect(process.env.MONGO_URI).then(()=>{
//listen to requests
app.listen(process.env.PORT, () => {
    console.log("Connected to the server && listenning on port", process.env.PORT);
  });

}).catch((error)=>{
    console.log(error)
})

