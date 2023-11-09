

//cors
const cors = require("cors")

//dotnenv
require("dotenv").config();
//mongoose
const mongoose =require("mongoose")
//Express
const express = require("express");

//contact routes
const contactRoute = require("./routes/contactRoute")
//user routes
const userRoute = require("./routes/user")
//express app
const app = express();
//cors 
app.use(cors())
//Global middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use("/api/contacts",contactRoute);
app.use("/api/user",userRoute);

//connect to db 
mongoose.connect(process.env.MONGO_URI).then(()=>{
//listen to requests
app.listen(process.env.PORT, () => {
    console.log("Connected to the server && listenning on port", process.env.PORT);
  });

}).catch((error)=>{
    console.log(error)
})

