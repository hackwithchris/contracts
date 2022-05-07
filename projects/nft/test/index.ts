import { expect } from "chai";
import { ethers } from "hardhat";

const BIG_ZERO = ethers.BigNumber.from('0');

describe('MyERC721A', function () {

  it('should deploy with correct name', async function () {

    const MyERC721A = await ethers.getContractFactory("MyERC721A")
    const nft = await MyERC721A.deploy()
    await nft.deployed()

    expect(await nft.symbol()).to.equal("MEA")
    expect(await nft.name()).to.equal("MyERC721A")

  });

  it('should mint', async function () {
    const MyERC721A = await ethers.getContractFactory("MyERC721A")
    const nft = await MyERC721A.deploy()
    await nft.deployed()

    await nft.mint(1, {gasLimit: 1000000, value: 1})
    expect(await nft.totalSupply()).to.equal(1)
  });

  it('should fail if no eth sent', async function () {
    const MyERC721A = await ethers.getContractFactory("MyERC721A")
    const nft = await MyERC721A.deploy()
    await nft.deployed()

    await expect(nft.mint(1, {gasLimit: 1000000, value: 0})).to.be.revertedWith('incorrect amount of eth sent')
    await expect(nft.mint(2, {gasLimit: 1000000, value: 1})).to.be.revertedWith('incorrect amount of eth sent')
  });

  it('should fail if too much eth sent', async function () {
    const MyERC721A = await ethers.getContractFactory("MyERC721A")
    const nft = await MyERC721A.deploy()
    await nft.deployed()

    await expect(nft.mint(2, {gasLimit: 1000000, value: 5})).to.be.revertedWith('incorrect amount of eth sent')
  });

  it('should withdraw eth to dev wallet', async function () {
    const MyERC721A = await ethers.getContractFactory("MyERC721A")
    const nft = await MyERC721A.deploy()
    await nft.deployed()

    expect(await ethers.provider.getBalance(nft.address)).to.equal(BIG_ZERO)

    await nft.mint(10, {gasLimit: 1000000, value: 10})
    const balanceBefore = await ethers.provider.getBalance(await nft.DEV_ADDRESS())
    console.log('balanceBefore:', ethers.utils.formatUnits(balanceBefore));

    const receipt = await (await nft.withdraw()).wait();
    const totalGasCost = ethers.BigNumber.from(receipt.gasUsed).mul(receipt.effectiveGasPrice);

    const balanceAfter = await ethers.provider.getBalance(await nft.DEV_ADDRESS())
    console.log('balanceAfter:', ethers.utils.formatUnits(balanceAfter));

    expect(balanceAfter.add(totalGasCost).sub(balanceBefore)).to.equal(ethers.BigNumber.from('10'))


  });


});

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();
//
//     expect(await greeter.greet()).to.equal("Hello, world!");
//
//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
//
//     // wait until the transaction is mined
//     await setGreetingTx.wait();
//
//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });
