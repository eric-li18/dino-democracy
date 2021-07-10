var VoteOnDino = artifacts.require("VoteOnDino");

module.exports = function(deployer) {
  deployer.deploy(VoteOnDino, 500);
};
