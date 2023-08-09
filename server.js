require('dotenv').config();
const express=require("express")
const app=express()
app.use(express.json())
app.use("/api/user",require("./routes/user"))
const mongoose = require('mongoose')
const connection = mongoose.connect(process.env.MONGO_URI, {

    useNewUrlParser: true,
  
    useUnifiedTopology: true
  
  })
  

  
  /* Display message in the console if the connection is successful. */
  
  mongoose.connection.once('open', () => {
  
    console.log('connected!')
  
  })
  app.listen(process.env.PORT,(err)=>{
    err?console.log(err):console.log(`server is running on port ${process.env.PORT}`)})