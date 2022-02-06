const { expect } = require("chai");
const { BigNumber, constants } = require("ethers");
const { ethers, network  } = require("hardhat");


describe('Dynamic Price NFT', () => {
  

  before(async () => {
    const signers = await ethers.getSigners()

    owner = signers[0]

    tokenOwner = signers[1]
    
    DynamicPriceNFT = await ethers.getContractFactory('DynamicPriceNFT', owner);
    dynamicPriceContract = await DynamicPriceNFT.deploy("DynamicPriceNFT", "DFT", "fff", "fff");
    await dynamicPriceContract.deployed();
    await dynamicPriceContract.connect(owner).pause(false);
  })

  it('Mint First 100', async function() {

    expect((await dynamicPriceContract.maxSupply()).toNumber()).to.eql(1000);
    
    const balanceBefore = await ethers.provider.getBalance(owner.address);
    console.log("balanceBefore", balanceBefore);
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("1")});
    const balanceAfter = await ethers.provider.getBalance(owner.address);
    console.log("balanceAfter",balanceAfter);
    
  })

  it('Mint Next 400', async function() {

    expect((await dynamicPriceContract.maxSupply()).toNumber()).to.eql(1000);
    
    const balanceBefore = await ethers.provider.getBalance(owner.address);
    console.log("balanceBefore", balanceBefore);
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("1")});
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("1")});
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("1")});
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("1")});
    const balanceAfter = await ethers.provider.getBalance(owner.address);
    console.log("balanceAfter",balanceAfter);
    
  })
  
  

  
})