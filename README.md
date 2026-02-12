# FHE Raffle App

A decentralized raffle application powered by Fully Homomorphic Encryption (FHE) for provably fair and transparent winner selection. Built on Ethereum Sepolia testnet with React frontend and Hardhat smart contracts.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Codebase Structure](#codebase-structure)
- [Setup & Installation](#setup--installation)
- [Deployment](#deployment)
- [Testing](#testing)
- [Usage](#usage)
- [Technical Details](#technical-details)
- [Contact & Support](#contact--support)
- [License](#license)

## 🎯 Overview

The FHE Raffle App is a pool-based raffle system that uses Fully Homomorphic Encryption to ensure truly random and verifiable winner selection. Users enter pools by paying 5 MAZA tokens, and after each pool closes (5-minute duration), 5 winners are selected using FHE-powered randomness. Winners share 90% of the pool, while 10% goes to the protocol.

### Key Benefits

- **Provably Fair**: FHE randomness ensures no one can predict or manipulate outcomes
- **Transparent**: All random seeds are publicly decryptable and verifiable
- **Decentralized**: Runs on Ethereum blockchain with smart contract automation
- **User-Friendly**: Modern React UI with real-time updates and toast notifications

## ✨ Features

### Smart Contract Features

- ✅ **Pool System**: Sequential pools with unique IDs starting from 0
- ✅ **Time-Based Pools**: 5-minute pool windows (configurable)
- ✅ **ERC20 Integration**: Uses MAZA token for entry fees
- ✅ **FHE Randomness**: Uses `FHE.randEuint32()` for cryptographically secure randomness
- ✅ **Winner Selection**: Selects 5 winners per pool using deterministic algorithm
- ✅ **Reward Distribution**: 90% to winners (equal shares), 10% protocol fee
- ✅ **Public Decryption**: Random seeds are publicly decryptable for verification
- ✅ **Automatic Pool Creation**: New pools created automatically when previous closes
- ✅ **Reward Claiming**: Winners can claim their rewards on-chain

### Frontend Features

- ✅ **Real-Time Updates**: Pool data refreshes every 3 seconds
- ✅ **Countdown Timer**: Live countdown showing time remaining in current pool
- ✅ **ERC20 Approval Flow**: Seamless token approval and entry process
- ✅ **Automated Winner Drawing**: Single-button flow for owners to draw winners
- ✅ **Past Pools Display**: View and claim rewards from previous pools
- ✅ **Toast Notifications**: Real-time feedback for all user actions
- ✅ **Mobile Responsive**: Optimized for mobile and desktop devices
- ✅ **Wallet Integration**: RainbowKit/Wagmi for multi-wallet support

## 🏗️ Architecture

### Technology Stack

**Smart Contracts:**
- Solidity ^0.8.24
- Hardhat ^2.26.0
- @fhevm/solidity ^0.9.0 (FHE operations)
- OpenZeppelin Contracts ^5.0.0 (ERC20, SafeERC20)

**Frontend:**
- React ^19.1.1
- TypeScript ^5.9.3
- Vite ^7.1.7
- Wagmi ^2.15.6 (Ethereum interactions)
- RainbowKit ^2.2.8 (Wallet connection)
- Ethers.js ^6.15.0 (Contract interactions)
- TailwindCSS ^3.4.0 (Styling)

**Testing:**
- Hardhat Network (local testing)
- Chai ^4.5.0 (assertions)
- @fhevm/hardhat-plugin ^0.3.0-0 (FHE mock mode)

### System Architecture

```
┌─────────────────┐
│   React Frontend │
│   (Vite + TS)    │
└────────┬─────────┘
         │
         ├─── Wagmi/RainbowKit (Wallet Connection)
         │
         ├─── Ethers.js (Contract Calls)
         │
         └─── FHE Relayer SDK (Decryption)
                  │
                  ▼
┌─────────────────────────────────┐
│   Ethereum Sepolia Testnet       │
│   ┌───────────────────────────┐  │
│   │   Raffle.sol Contract     │  │
│   │   - Pool Management       │  │
│   │   - FHE Randomness        │  │
│   │   - Winner Selection      │  │
│   └───────────────────────────┘  │
│   ┌───────────────────────────┐  │
│   │   MazaToken.sol (ERC20)   │  │
│   └───────────────────────────┘  │
└─────────────────────────────────┘
```

## 📁 Codebase Structure

```
raffle/
├── contracts/                    # Smart contracts
│   ├── Raffle.sol               # Main raffle contract with FHE randomness
│   └── MazaToken.sol            # ERC20 token contract
│
├── src/                          # Frontend source code
│   ├── components/              # React components
│   │   ├── FheRaffle.tsx       # Main raffle interface component
│   │   ├── FheCoinToss.tsx     # Coin toss component (demo)
│   │   ├── Toast.tsx           # Toast notification system
│   │   ├── GlitchText.tsx      # Animated text component
│   │   ├── ClaimConfetti.tsx   # Confetti animation
│   │   ├── RaffleDrawAnimation.tsx  # Winner draw animation
│   │   └── ui/                 # UI components
│   │       └── accordion.tsx   # Accordion component
│   │
│   ├── lib/                     # Utility libraries
│   │   ├── fhevm.js            # FHE utilities (decryption, initialization)
│   │   ├── fhevm.d.ts          # TypeScript definitions
│   │   ├── utils.ts            # General utilities
│   │   └── abis/               # Contract ABIs
│   │       ├── Raffle.ts       # Raffle contract ABI
│   │       └── ERC20.ts        # ERC20 ABI
│   │
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # App entry point
│   ├── wagmi.ts                # Wagmi configuration
│   └── App.css                 # Global styles
│
├── test/                        # Test files
│   └── Raffle.test.js          # Comprehensive test suite
│
├── scripts/                     # Utility scripts
│   └── update-abi.js           # ABI update script
│
├── deploy-*.cjs                 # Deployment scripts
│   ├── deploy-raffle.cjs       # Raffle contract deployment
│   ├── deploy-maza-token.cjs   # MAZA token deployment
│   └── deploy-coin-toss.cjs    # CoinToss contract deployment
│
├── hardhat.config.cjs          # Hardhat configuration
├── package.json                # Dependencies and scripts
├── vite.config.ts             # Vite configuration
├── tailwind.config.js         # TailwindCSS configuration
└── README.md                   # This file
```

### Key Files Explained

**Smart Contracts:**
- `contracts/Raffle.sol`: Main raffle contract implementing pool system, FHE randomness, and winner selection
- `contracts/MazaToken.sol`: Simple ERC20 token used for entry fees

**Frontend Components:**
- `src/components/FheRaffle.tsx`: Main raffle interface with pool entry, winner display, and owner controls
- `src/lib/fhevm.js`: FHE utilities including `publicDecryptWithProof()` for decrypting random seeds
- `src/wagmi.ts`: Wagmi configuration for Ethereum interactions

**Deployment:**
- `deploy-raffle.cjs`: Deploys Raffle contract with MAZA token and protocol fee recipient addresses
- `hardhat.config.cjs`: Hardhat configuration with Sepolia network and FHE plugin

## 🚀 Setup & Installation

### Prerequisites

- Node.js >= 18.x
- npm or yarn
- Git
- MetaMask or compatible Web3 wallet
- Hardhat CLI (installed via npm)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd raffle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Deployment (optional, defaults provided)
   MNEMONIC=your_mnemonic_phrase_here
   INFURA_API_KEY=your_infura_api_key
   ETHERSCAN_API_KEY=your_etherscan_api_key
   
   # Contract addresses (set after deployment)
   MAZA_TOKEN_ADDRESS=0x...
   PROTOCOL_FEE_RECIPIENT=0x...
   
   # Frontend
   VITE_REOWN_PROJECT_ID=your_reown_project_id
   VITE_RAFFLE_CONTRACT_ADDRESS_SEPOLIA=0x...
   VITE_MAZA_TOKEN_ADDRESS_SEPOLIA=0x...
   ```

4. **Compile contracts**
   ```bash
   npm run compile
   ```

5. **Start local development server**
   ```bash
   npm run dev
   ```

## 📦 Deployment

### Deploy MAZA Token

```bash
npm run deploy:sepolia -- --tags MazaToken
# Or use the script directly:
node deploy-maza-token.cjs
```

### Deploy Raffle Contract

Set environment variables:
```bash
export MAZA_TOKEN_ADDRESS=0x...  # From previous step
export PROTOCOL_FEE_RECIPIENT=0x...  # Your fee recipient address
```

Deploy:
```bash
npm run deploy:sepolia -- --tags Raffle
# Or use the script directly:
node deploy-raffle.cjs
```

### Update Frontend Configuration

After deployment, update your `.env` file with the deployed contract addresses:
```env
VITE_RAFFLE_CONTRACT_ADDRESS_SEPOLIA=0x...  # Deployed Raffle address
VITE_MAZA_TOKEN_ADDRESS_SEPOLIA=0x...      # Deployed MAZA token address
```

## 🧪 Testing

### Run Tests in Mock Mode

The test suite uses FHEVM mock mode for fast, deterministic testing:

```bash
# Run all tests
npx hardhat test

# Run specific test file
npx hardhat test test/Raffle.test.js

# Run with gas reporting
REPORT_GAS=true npx hardhat test

# Run with coverage
npx hardhat coverage
```

### Test Structure

Tests cover:
- ✅ Basic FHE operations (random seed generation, decryption)
- ✅ Pool entry and management
- ✅ Winner selection and distribution
- ✅ Reward claiming
- ✅ Error handling (invalid proofs, double entry, etc.)
- ✅ Edge cases (zero participants, maximum values)
- ✅ Access control (owner-only functions)
- ✅ Event emissions

See `test/Raffle.test.js` for comprehensive test examples.

## 💻 Usage

### For Users

1. **Connect Wallet**: Click "Connect Wallet" and select your wallet (MetaMask, WalletConnect, etc.)

2. **Approve Tokens**: If entering a pool for the first time, approve the contract to spend your MAZA tokens

3. **Enter Pool**: Click "Enter Pool" and confirm the transaction (5 MAZA tokens)

4. **Wait for Pool to Close**: Pool closes automatically after 5 minutes

5. **Check Winners**: Once winners are drawn, check if you won

6. **Claim Reward**: If you're a winner, click "Claim Reward" to receive your share

### For Pool Owners

1. **Wait for Pool to Close**: Pool must be closed (time expired) before drawing winners

2. **Draw Winners**: Click "Draw Winners" button
   - Step 1: Sign transaction to generate encrypted random seed
   - Step 2: System automatically decrypts the seed
   - Step 3: Sign transaction to submit decrypted seed and draw winners

3. **Verify Results**: Winners are automatically selected and stored on-chain

## 🔧 Technical Details

### FHE Randomness Flow

1. **Generate Encrypted Winner Indices**: Owner calls `generateWinnerIndices(poolId)`
   - Contract uses `_generateRandomIndex()` which calls `FHE.randEuint16(nextPowerOf2(participantCount))` to produce encrypted random indices in \[0, participantCount)
   - Each encrypted index is stored in `encryptedWinnerIndices[poolId]` and exposed as a `bytes32` handle via `winnerIndexHandles[poolId]`
   - Permissions are granted with `FHE.allowThis()` and `FHE.allow(..., owner)` so only the contract and owner can decrypt/use the ciphertexts

2. **Decrypt Indices (Client Side)**: Frontend uses `userDecryptBatch(handles, raffleAddress, signer)`
   - Fetches the `bytes32` handles from `winnerIndexHandles(poolId)`
   - Calls the FHE relayer SDK’s `userDecryptBatch` once, which asks the owner to sign a single EIP‑712 message
   - Returns an array of plain `uint16[] decryptedIndices` corresponding to winner slots

3. **Draw Winners On‑Chain**: Owner calls `drawWinners(poolId, decryptedIndices)`
   - Contract verifies the pool is closed and `indicesGenerated[poolId] == true`
   - Maps each decrypted index to a participant, resolving duplicates with `_selectUniqueWinners` so exactly 5 unique winners are chosen
   - Splits 90% of the pool (`WINNER_SHARE_PERCENTAGE`) equally across 5 winners and sends the remaining 10% (`PROTOCOL_FEE_PERCENTAGE`) to the protocol fee recipient
   - Stores winners, marks the pool as `winnersDrawn`, and emits `WinnersDrawn` + `ProtocolFeeWithdrawn` events

### Winner Selection Algorithm

```solidity
// Pseudocode
1. Copy participants array
2. For each of 5 winners:
   a. Generate random index: seed % remainingCount
   b. Select winner at index
   c. Remove winner from array (swap with last)
   d. Update seed: keccak256(seed, i)
3. Return winners array
```

### Pool Lifecycle

1. **Creation**: Pool created with `startTime = 0` (not started)
2. **Start**: First entry sets `startTime` and `endTime = startTime + 5 minutes`
3. **Active**: Users can enter until `endTime`
4. **Closed**: Pool closes automatically when `block.timestamp >= endTime`
5. **Winner Drawing**: Owner generates seed and draws winners
6. **Reward Claiming**: Winners claim their rewards

### Constants

- `POOL_DURATION`: 5 minutes (300 seconds)
- `ENTRY_FEE`: 5 MAZA tokens (5 * 10^18 wei)
- `WINNER_COUNT`: 5 winners per pool
- `PROTOCOL_FEE_PERCENTAGE`: 10%
- `WINNER_SHARE_PERCENTAGE`: 90%

## 📞 Contact & Support

### Project Information

- **Project Name**: FHE Raffle App
- **Network**: Ethereum Sepolia Testnet
- **License**: MIT

### Getting Help

- **Issues**: Open an issue on GitHub for bug reports or feature requests
- **Documentation**: See inline code comments and this README
- **Community**: Join our Discord/Telegram (if available)

### Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

---

**Built with Randomness**
