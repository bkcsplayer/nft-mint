
const hre = require("hardhat");

async function main() {

  const Infinitilearningdao = await hre.ethers.getContractFactory("Infinitilearningdao");
  const infinitilearningdao = await Infinitilearningdao.deploy();

  await infinitilearningdao.deployed();

  console.log("Infinitilearningdao deployed to:", Infinitilearningdao.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
