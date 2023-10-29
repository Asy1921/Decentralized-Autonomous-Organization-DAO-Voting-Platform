const express=require('express')

const router=express.Router()

// get all proposals
router.get('/',(req,res)=>{
    res.json({mssg:'GET All Proposals'})
})

//get single proposal
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get single proposal'})
})

// Post a new proposal
router.post('/',(req,res)=>{
    res.json({mssg:'Post a new proposal'})
})

// Delete a new proposal
router.delete('/:id',(req,res)=>{
    res.json({mssg:'Delete a new proposal'})
})

// Update a new proposal
router.patch('/:id',(req,res)=>{
    res.json({mssg:'Update a new proposal'})
})


module.exports=router