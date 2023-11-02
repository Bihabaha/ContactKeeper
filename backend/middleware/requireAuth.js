const requireAuth =async(req,res,next)=>{
const jwt=require("jsonwebtoken")
const User=require("../models/userSchema")
//Check or verify authentication 
const {authorization} =req.headers
if(!authorization){
    return res.status(401).json({error:"Authorization token required"})
}
//here we split the token in array and we take the one in second position
const token = authorization.split(' ')[1]
try{
const {_id}=jwt.verify(token,process.env.SECRET)
req.user=await User.findOne({ _id }).select("_id")
next()
}catch(error){
console.log(error)
res.status(401).json({error:"Request is not authorized "})
}

}

module.exports= requireAuth