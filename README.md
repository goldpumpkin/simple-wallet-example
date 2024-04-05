# Next.js React App with MetaMask Integration

This project showcases a simple React application built with Next.js framework that integrates with MetaMask wallet. The main functionalities implemented in this project include:

1. **Connect MetaMask Wallet:**
   Users can connect their MetaMask wallet to the React application, allowing seamless interaction with the Ethereum blockchain.

2. **Transfer Funds:**
   The application enables users to initiate fund transfers to target Ethereum accounts directly from the React interface.

3. **Utilize Sepolia Test Network:**
   The project utilizes the Sepolia test network, providing a sandboxed environment for testing Ethereum transactions without using real ETH.

4. **Get Test ETH from Chainlink Faucet:**
   Users can obtain test Ether (ETH) for the Sepolia test network through the Chainlink faucet at https://faucets.chain.link/.

5. **Create two accounts for ETH transfers:**
   Before testing the transfer functionality, you will need to create two Ethereum accounts to simulate actual transfer operations.

## Technologies Used

- Next.js: Framework for building React applications with server-side rendering and routing capabilities.
- React: JavaScript library for building user interfaces.
- MetaMask: Ethereum wallet extension for interacting with Ethereum-based applications in the browser.
- Sepolia Test Network: Ethereum test network for development and testing purposes.
- Chainlink Faucet: Service for obtaining test Ether (ETH) for Ethereum test networks.

## Install

- `npm install ethers`
- `npm install @headlessui/react`

## Reference

- [sample-wallet.tsx](https://github.com/luzhenqian/web3-examples/blob/85819185b9c7c18268ae1571fafc3045b8b0b555/frontend/pages/sample-wallet.tsx)
- [property-ethereum-does-not-exist-on-type-window-typeof-globalthis-error](https://stackoverflow.com/questions/70961190/property-ethereum-does-not-exist-on-type-window-typeof-globalthis-error)
- [ethers-v6-migrate-missing](https://docs.ethers.org/v6/migrating/#migrate-missing)
