// migrations/3_deploy_user.js
const User = artifacts.require("User");

module.exports = function (deployer) {
  // Deploy the User contract
  deployer.deploy(User);
};
