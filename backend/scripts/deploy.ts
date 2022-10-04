import { ethers } from "hardhat";
import { Overrides } from "ethers";

/**
 * deploy function
 */
async function deploy() {
    
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account:", deployer.address);

    const funds = 100;

    const Messenger = await ethers.getContractFactory("Messenger");

    // deploy
    const messenger = await Messenger.deploy({
      value: funds,
    } as Overrides);

    await messenger.deployed();

    console.log("Contract deployed at:", messenger.address);
    console.log(
      "Contract's fund is:",
      await messenger.provider.getBalance(messenger.address)
    );
}

deploy()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
});