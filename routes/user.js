const express=require("express")
const router=express.Router()
const User=require('../models/User')
//add new contact
router.post('/add',async(req,res)=>{
    const {name,email,phone}=req.body
const newUser=new User({name,email,phone})
const user = await newUser.save()
res.send({msg:"user added",user})
})
//Fetch contact
router.get("/",async(req,res)=>{
const user=await User.find()
res.send({msg:'user fetched',user})
})
//delete contact
router.delete("/:id",async(req,res)=>{
    const {id}=req.params
    const user= await User.findOneAndDelete({_id:id})
    res.send({msg:"user deleted",user})
    })
//Edit contact
router.put("/edit/:id",async(req,res)=>{
    const {id}=req.params
    const user = await User.findOneAndUpdate({_id:id},{$set:req.body},{new:true})
    res.send({msg:'user edited',user})
    })
module.exports=router