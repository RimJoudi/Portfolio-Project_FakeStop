const Validation = artifacts.require("Validation");

module.exports = function (deployer) {
  deployer.deploy(Validation);
};
