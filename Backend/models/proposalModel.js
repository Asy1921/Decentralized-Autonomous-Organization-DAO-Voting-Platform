const mongoose = require("mongoose");

// Define the Proposal schema
const proposalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model for the creator of the proposal
      required: true,
    },
    yesVotes: {
      type: Number,
      default: 0,
    },
    noVotes: {
      type: Number,
      default: 0,
    },
    executed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the Proposal model
const Proposal = mongoose.model("Proposal", proposalSchema);

module.exports = Proposal;
