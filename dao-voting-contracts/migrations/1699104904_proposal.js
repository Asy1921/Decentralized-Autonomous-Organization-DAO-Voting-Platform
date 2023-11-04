// migrations/2_deploy_proposal.js
const Proposal = artifacts.require("Proposal");

module.exports = function (deployer) {
  // Deploy the Proposal contract with initial parameters
  deployer.deploy(Proposal, "Sample Proposal", "This is a sample proposal.");
};
