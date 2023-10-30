const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const Proposal = require("../models/proposalModel");
const User = require("../models/userModel");
const ObjectId = mongoose.Types.ObjectId;

// get all proposals
router.get("/", (req, res) => {
  res.json({ mssg: "GET All Proposals" });
});

//get single proposal
router.get("/:id", (req, res) => {
  res.json({ mssg: "Get single proposal" });
});

// Post a new proposal
router.post("/", async (req, res) => {
  let { title, description, creator, yesVotes, noVotes, executed } = req.body;
  const user = await User.findOne({ username: creator });
  // Access the ObjectId of the user
  try {
    if (user) {
      const userId = user._id; // user._id contains the ObjectId
      console.log(`User "${creator}" has ObjectId: ${userId}`);
      creator = new ObjectId(user._id);
      try {
        const proposal = await Proposal.create({
          title,
          description,
          creator,
          yesVotes,
          noVotes,
          executed,
        });
        res.status(200).json(proposal);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    } else {
      console.log(`User "${creator}" not found.`);
    }
  } catch (err) {
    console.error("Error finding user:", err);
  }
});

// Delete a new proposal
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a new proposal" });
});

// Update a new proposal
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a new proposal" });
});

module.exports = router;
