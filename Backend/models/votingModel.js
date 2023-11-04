const mongoose = require("mongoose");

const votingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model for the voter
      required: true,
    },
    proposal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Proposal", // Reference to the Proposal model for the voted proposal
      required: true,
    },
    choice: {
      type: String, // 'yes' or 'no'
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Voting = mongoose.model("Voting", votingSchema);

module.exports = Voting;
