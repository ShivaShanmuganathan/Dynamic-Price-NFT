const { expect } = require("chai");
const { BigNumber, constants } = require("ethers");
const { ethers, network  } = require("hardhat");


describe('Dynamic Price NFT', () => {
  

  beforeEach(async () => {
    const signers = await ethers.getSigners()

    owner = signers[0]

    tokenOwner = signers[1]
    
    DynamicPriceNFT = await ethers.getContractFactory('DynamicPriceNFT', owner);
    dynamicPriceContract = await DynamicPriceNFT.deploy();
    await dynamicPriceContract.deployed();
    
  })

  
})