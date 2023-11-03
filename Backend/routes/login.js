const express = require("express");
const passport = require("passport");

const router = express.Router();
const User = require("../models/userModel");

router.post(
  "/api/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);
router.post("/register", async (req, res) => {
  // Register new user and create user record in MongoDB
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;
