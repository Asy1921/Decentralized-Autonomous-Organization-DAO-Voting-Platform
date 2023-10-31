const mongoose = require("mongoose");
const Proposal = require("../models/proposalModel");
const User = require("../models/userModel");
const ObjectId = mongoose.Types.ObjectId;
//Get Proposals
const getProposals = async (req, res) => {
  try {
    const proposals = await Proposal.find({}).sort({ createdAt: 1 });
    res.status(200).json(proposals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Get proposals by a user
const getProposalByUser = async (req, res) => {
  try {
    let { username } = req.params;
    const user = await User.findOne({ username: username });
    console.log(user._id.toString());
    const proposals = await Proposal.find({ creator: user._id });
    res.status(200).json(proposals);
  } catch (err) {
    console.error("Error finding user:", err);
    res.status(400).json({ error: "Cant find any proposal by this user" });
  }
};

// Create a new proposal
const createProposal = async (req, res) => {
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
};

module.exports = {
  createProposal,
  getProposals,
  getProposalByUser,
};
