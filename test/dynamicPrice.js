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
    console.log("balanceBefore", parseFloat(ethers.utils.formatEther(balanceBefore)));
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("1")});
    const balanceAfter = await ethers.provider.getBalance(owner.address);
    console.log("balanceAfter", parseFloat(ethers.utils.formatEther(balanceAfter)));
    expect(balanceBefore > balanceAfter);
    
  })

  it('Mint Next 400', async function() {

    expect((await dynamicPriceContract.maxSupply()).toNumber()).to.eql(1000);
    
    const balanceBefore = await ethers.provider.getBalance(owner.address);
    console.log("balanceBefore", parseFloat(ethers.utils.formatEther(balanceBefore)));
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("1")});
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("1")});
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("1")});
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("1")});
    const balanceAfter = await ethers.provider.getBalance(owner.address);
    console.log("balanceAfter", parseFloat(ethers.utils.formatEther(balanceAfter)));
    expect(balanceBefore > balanceAfter);
    
  })

  it('Fail To Mint 100 Tokens Due To Lack Of Funds ', async function() {

    expect((await dynamicPriceContract.maxSupply()).toNumber()).to.eql(1000);
    
    const balanceBefore = await ethers.provider.getBalance(owner.address);
    console.log("balanceBefore", parseFloat(ethers.utils.formatEther(balanceBefore)));
    await expect(dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("1")})).to.be.revertedWith('Not Enough Funds');
    const balanceAfter = await ethers.provider.getBalance(owner.address);
    console.log("balanceAfter", parseFloat(ethers.utils.formatEther(balanceAfter)));
    expect(balanceBefore == balanceAfter);
    
  })

  it('Mint 100 Tokens By Paying 2x the amount ', async function() {

    expect((await dynamicPriceContract.maxSupply()).toNumber()).to.eql(1000);
    
    const balanceBefore = await ethers.provider.getBalance(owner.address);
    console.log("balanceBefore", parseFloat(ethers.utils.formatEther(balanceBefore)));
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("2")});
    const balanceAfter = await ethers.provider.getBalance(owner.address);
    console.log("balanceAfter", parseFloat(ethers.utils.formatEther(balanceAfter)));
    expect(balanceBefore > balanceAfter);
    
  })

  it('Mint 100 Tokens By Paying 3x the amount ', async function() {

    expect((await dynamicPriceContract.maxSupply()).toNumber()).to.eql(1000);
    
    const balanceBefore = await ethers.provider.getBalance(owner.address);
    console.log("balanceBefore", parseFloat(ethers.utils.formatEther(balanceBefore)));
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("3")});
    const balanceAfter = await ethers.provider.getBalance(owner.address);
    console.log("balanceAfter", parseFloat(ethers.utils.formatEther(balanceAfter)));
    expect(balanceBefore > balanceAfter);
  })

  it('Mint 100 Tokens By Paying 4x the amount ', async function() {

    expect((await dynamicPriceContract.maxSupply()).toNumber()).to.eql(1000);
    
    const balanceBefore = await ethers.provider.getBalance(owner.address);
    console.log("balanceBefore", parseFloat(ethers.utils.formatEther(balanceBefore)));
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("4")});
    const balanceAfter = await ethers.provider.getBalance(owner.address);
    console.log("balanceAfter", parseFloat(ethers.utils.formatEther(balanceAfter)));
    expect(balanceBefore > balanceAfter);
    
  })

  it('Mint 100 Tokens By Paying 5x the amount ', async function() {

    expect((await dynamicPriceContract.maxSupply()).toNumber()).to.eql(1000);
    
    const balanceBefore = await ethers.provider.getBalance(owner.address);
    console.log("balanceBefore", parseFloat(ethers.utils.formatEther(balanceBefore)));
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("5")});
    const balanceAfter = await ethers.provider.getBalance(owner.address);
    console.log("balanceAfter", parseFloat(ethers.utils.formatEther(balanceAfter)));
    expect(balanceBefore > balanceAfter);
    
  })

  it('Mint Another 100 Tokens By Paying 5x the amount ', async function() {

    expect((await dynamicPriceContract.maxSupply()).toNumber()).to.eql(1000);
    
    const balanceBefore = await ethers.provider.getBalance(owner.address);
    console.log("balanceBefore", parseFloat(ethers.utils.formatEther(balanceBefore)));
    await dynamicPriceContract.mint(100, {value: ethers.utils.parseEther("5")});
    const balanceAfter = await ethers.provider.getBalance(owner.address);
    console.log("balanceAfter", parseFloat(ethers.utils.formatEther(balanceAfter)));
    expect(balanceBefore > balanceAfter);
  })

  
})