import { ethers } from "hardhat";
import { writeFileSync } from "fs";

async function deploy(name: string, ...params: any[]) {
  const Contract = await ethers.getContractFactory(name);
  return await Contract.deploy(...params).then(f => f.deployed());
}

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const forwarder = await deploy("ERC2771Forwarder", "ERC2771Forwarder");
  const registry = await deploy("Registry", forwarder.address);

  writeFileSync("deploy.json", JSON.stringify({
    ERC2771Forwarder: forwarder.address,
    Registry: registry.address,
  }, null, 2));

  console.log(`ERC2771Forwarder: ${forwarder.address}\nRegistry: ${registry.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
