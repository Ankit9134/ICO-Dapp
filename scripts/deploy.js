const hre = require("hardhat");

// Deploying the token contract
const tokens = (nToken) => {
  return ethers.utils.parseUnits(nToken.toString(), "ether");
};

async function main() {
  const _initialSupply = tokens(500000000);

  const MyToken = await hre.ethers.getContractFactory("MyToken");

  const myToken = await MyToken.deploy(_initialSupply);

  await myToken.deployed();
  console.log(`Token deployed to: ${myToken.address}`);

  // Deploying the tokenSale contract

  const _tokenPrice = tokens(1);

  const TokenSale = await hre.ethers.getContractFactory("TokenSale");

  const tokenSale = await TokenSale.deploy(myToken.address, _tokenPrice);

  await tokenSale.deployed();
  console.log(`TokenSale deployed to: ${tokenSale.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
