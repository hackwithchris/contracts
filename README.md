# Smart Contracts 

All smart contracts for the **Learn Blockchain With Chris** series will be housed here. We will start with a simple NFT contract and build out more from there.

## Tech

We will be using [Hardhat](https://hardhat.org/) with [Ethers](https://docs.ethers.io/v5/) and our unit tests will use [Waffle](https://getwaffle.io/) which is built into Hardhat. They use [Mocha](https://mochajs.org/) under the hood so it will be really easy for experienced javascript developers to pick up.
I used to develop smart contracts using Truffle and Ganache stack but fell in love with Hardhat after learning about it. One of the cool features that they added was the ability to use `console.log`'s in the smart contract. 

_We will be using TypeScript also as I've been using it in my frontend development as well._

Shoutout to [Julien Klepatch](https://www.linkedin.com/in/julienklepatch/) over at [Eat The Blocks](https://eattheblocks.com/) for his awesome tutorials. This was the first [video](https://www.youtube.com/watch?v=9Qpi80dQsGU) I watched regarding hardhat by him. Shoutout also to [Sushi](https://www.sushi.com/) as I learned a lot a ton by reading their smart contract code found [here](https://github.com/sushiswap/sushiswap).

## Overview

After much trial and error I found that keeping a separate hardhat project for groups of contracts made my life a lot easier. The reason for this is because different contracts may need different versions of solidity. we will use [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) to keep all the separate hardhat projects together in one repo while sharing dependencies.
I personally also prefer using yarn to npm. Each hardhat project will be in its separate directory within the projects folder. We will be installing all the dependencies in the root package.json and these can be shared amongst all the hardhat projects we create instead of adding the same dependencies for each project.

## Setup

### .env file
All our secrets will need to be placed into a .env file at the root of the project. We will be using [dotenv](https://github.com/motdotla/dotenv) to easily access these values in our project.

Keys in the `.env` file
- `MNEMONIC` - this will be the seed phrase for your development wallet
- `MUMBAI_RPC` - this is the rpc url that we have from moralis's speedy node
- `POLYGON_API_KEY` - this is generated from polyscan and used for verifying contracts

### Yarn Workspaces
We setup the package.json to use Yarn Workspaces by making it private and adding `projects/*` to the `workspaces` array.

### NFT project
Then we made our first project folder called `nft`, installed the packages, and then ran `yarn hardhat` after which we chose the option `Advanced TypeScript Project`. This bootstraps our project really nicely. I then went over the basic commands:
1. `yarn hardhat compile` - compile the sample smart contract
2. `yarn hardhat run scripts/deploy.ts --network ropstan`- deploy to the ropstan network
3. `yarn hardhat test` - run the unit tests  

After our second session we were able to create a hardhat project, compile, deploy, and test our smart contract. Congratulations!!!
