# Ether Listen

Ether Listen is a project designed to demonstrate the basic functionalities of the Hardhat framework. It focuses on deploying a contract, listening to its events, and triggering events on Ethereum's blockchain.

## Usage
Testing
To run the tests for the sample contract:

```shell
npx hardhat test
```

To run the tests with gas usage report:

```shell
REPORT_GAS=true npx hardhat test
```

### 1. Local Blockchain
Start a local Ethereum node with Hardhat:

```shell
npx hardhat node
```

## 2. Deploying the Contract
Deploy EventoExemplo contract on the local network:

```shell
npx hardhat run scripts/deploy.js --network localhost
```

## 3. Listening to Events
To listen to events from the contract on the local network:

```shell
npx hardhat run scripts/escutarEventos.js --network localhost
```

### 4. Triggering an Event
Trigger an event on the local network:

```shell
npx hardhat run scripts/triggerEvento.js --network localhost
```

## Credits:

Developed with the assistance of Pedro Magalhães from Formula Chain.
Website: https://formulachain.com


