# Smart Contracts 

All smart contracts for the **Learn Blockchain With Chris** series will be housed here. We will start with a simple NFT contract and build out more from there.

## Tech

We will be using [Hardhat](https://hardhat.org/) with [Ethers](https://docs.ethers.io/v5/) and our unit tests will use [Waffle](https://getwaffle.io/) which is built into Hardhat. They use [Mocha](https://mochajs.org/) under the hood so it will be really easy for experienced javascript developers to pick up.
I used to develop smart contracts using Truffle and Ganache stack but fell in love with Hardhat after learning about it. One of the cool features that they added was the ability to use `console.log`'s in the smart contract. Shoutout to [Julien Klepatch](https://www.linkedin.com/in/julienklepatch/) over at [Eat The Blocks](https://eattheblocks.com/) for his awesome tutorials. This was the first [video](https://www.youtube.com/watch?v=9Qpi80dQsGU) I watched regarding hardhat by him. Shoutout also to [Sushi](https://www.sushi.com/) as I learned a lot a ton by reading their smart contract code found [here](https://github.com/sushiswap/sushiswap). 

## Overview

After much trial and error I found that keeping a separate hardhat project for groups of contracts made my life a lot easier. The reason for this is because different contracts may need different versions of solidity. we will use [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) to keep all the separate hardhat projects together in one repo while sharing dependencies.  
