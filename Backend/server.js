require('dotenv').config()
const express =require('express')
const app=express()

//Middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method,res.json)
    next()
})

// Login API
app.get('/login',(req,res)=>{
    res.json({mssg:'User authenticated!'})
})

//Listening for Requests
app.listen(process.env.PORT,()=>{
    console.log("Listening on port",process.env.PORT)
})