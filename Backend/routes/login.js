const express = require("express");
const passport = require("passport");

const router=express.Router()


router.post('/api/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));
router.post('/api/register', (req, res) => {
  // Register new user and create user record in MongoDB
});
module.exports=router