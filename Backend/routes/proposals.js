const express = require("express");
const {
  createProposal,
  getProposals,
  getProposalByUser,
} = require("../controllers/proposalController");

const router = express.Router();

// get all proposals
router.get("/", getProposals);

//get proposal by a user
router.get("/:username", getProposalByUser);

// Post a new proposal
router.post("/", createProposal);

// Delete a new proposal
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a new proposal" });
});

// Update a new proposal
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a new proposal" });
});

module.exports = router;
