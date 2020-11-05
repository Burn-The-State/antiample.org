/*
*
*
*
*
*------------------ CONSTANTS -------------------------------
*
*
*NOTE TO SELF web3.eth.getBalance FOR ETH BALANCE FROM WALLET.
*
*/

const STATES = {};

const XAMP-INFO = {};

const TOKENS = {
  YFKA: '0x4086692d53262b2be0b13909d804f0491ff6ec3e',
  XAMP: '0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27',
  BOA: '0xf9c36c7ad7fa0f0862589c919830268d1a2581a1',
  TOB: '0x7777770f8a6632ff043c8833310e245eba9209e6',
  ETH: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
};

const DISPLAY_CONSOLE = true;
const DISPLAY_ERRORS = true;

const PAIRS = {
  YFKA_XAMP: '0xaea4d6809375bb973c8036d53db9e90970942738',
  YFKA_TOB: '0x34d0448A79F853d6E1f7ac117368C87BB7bEeA6B',
  YFKA_BOA: '0x5ecF87ff558f73D097EDdfEE35abDE626c7Aeab7',
  YFKA_ETH: '0xc0cfb99342860725806f085046d0233fec876cd7',
};

const POOLS = [PAIRS.YFKA_XAMP, PAIRS.YFKA_TOB, PAIRS.YFKA_BOA, PAIRS.YFKA_ETH];

const YFKA_POOL_INDEXES = {
  XAMP: 0,
  TOB: 1,
  BOA: 2,
  ETH: 3,
};

const YFKA_CONTROLLER_ADDRESS = '0x615983a35CF71D89F1B094e920151d7eA9Bf48bc';

const UNISWAP_BASE_LP_ABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: 'address', name: 'owner', type: 'address'},
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {indexed: false, internalType: 'uint256', name: 'value', type: 'uint256'},
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: 'address', name: 'sender', type: 'address'},
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount0',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount1',
        type: 'uint256',
      },
      {indexed: true, internalType: 'address', name: 'to', type: 'address'},
    ],
    name: 'Burn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: 'address', name: 'sender', type: 'address'},
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount0',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount1',
        type: 'uint256',
      },
    ],
    name: 'Mint',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: 'address', name: 'sender', type: 'address'},
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount0In',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount1In',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount0Out',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount1Out',
        type: 'uint256',
      },
      {indexed: true, internalType: 'address', name: 'to', type: 'address'},
    ],
    name: 'Swap',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint112',
        name: 'reserve0',
        type: 'uint112',
      },
      {
        indexed: false,
        internalType: 'uint112',
        name: 'reserve1',
        type: 'uint112',
      },
    ],
    name: 'Sync',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {indexed: true, internalType: 'address', name: 'from', type: 'address'},
      {indexed: true, internalType: 'address', name: 'to', type: 'address'},
      {indexed: false, internalType: 'uint256', name: 'value', type: 'uint256'},
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    constant: true,
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{internalType: 'bytes32', name: '', type: 'bytes32'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'MINIMUM_LIQUIDITY',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{internalType: 'bytes32', name: '', type: 'bytes32'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {internalType: 'address', name: '', type: 'address'},
      {internalType: 'address', name: '', type: 'address'},
    ],
    name: 'allowance',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {internalType: 'address', name: 'spender', type: 'address'},
      {internalType: 'uint256', name: 'value', type: 'uint256'},
    ],
    name: 'approve',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{internalType: 'address', name: '', type: 'address'}],
    name: 'balanceOf',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{internalType: 'address', name: 'to', type: 'address'}],
    name: 'burn',
    outputs: [
      {internalType: 'uint256', name: 'amount0', type: 'uint256'},
      {internalType: 'uint256', name: 'amount1', type: 'uint256'},
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{internalType: 'uint8', name: '', type: 'uint8'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'factory',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getReserves',
    outputs: [
      {internalType: 'uint112', name: '_reserve0', type: 'uint112'},
      {internalType: 'uint112', name: '_reserve1', type: 'uint112'},
      {internalType: 'uint32', name: '_blockTimestampLast', type: 'uint32'},
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {internalType: 'address', name: '_token0', type: 'address'},
      {internalType: 'address', name: '_token1', type: 'address'},
    ],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'kLast',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{internalType: 'address', name: 'to', type: 'address'}],
    name: 'mint',
    outputs: [{internalType: 'uint256', name: 'liquidity', type: 'uint256'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{internalType: 'string', name: '', type: 'string'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{internalType: 'address', name: '', type: 'address'}],
    name: 'nonces',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {internalType: 'address', name: 'owner', type: 'address'},
      {internalType: 'address', name: 'spender', type: 'address'},
      {internalType: 'uint256', name: 'value', type: 'uint256'},
      {internalType: 'uint256', name: 'deadline', type: 'uint256'},
      {internalType: 'uint8', name: 'v', type: 'uint8'},
      {internalType: 'bytes32', name: 'r', type: 'bytes32'},
      {internalType: 'bytes32', name: 's', type: 'bytes32'},
    ],
    name: 'permit',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'price0CumulativeLast',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'price1CumulativeLast',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{internalType: 'address', name: 'to', type: 'address'}],
    name: 'skim',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {internalType: 'uint256', name: 'amount0Out', type: 'uint256'},
      {internalType: 'uint256', name: 'amount1Out', type: 'uint256'},
      {internalType: 'address', name: 'to', type: 'address'},
      {internalType: 'bytes', name: 'data', type: 'bytes'},
    ],
    name: 'swap',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{internalType: 'string', name: '', type: 'string'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'sync',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'token0',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'token1',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {internalType: 'address', name: 'to', type: 'address'},
      {internalType: 'uint256', name: 'value', type: 'uint256'},
    ],
    name: 'transfer',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {internalType: 'address', name: 'from', type: 'address'},
      {internalType: 'address', name: 'to', type: 'address'},
      {internalType: 'uint256', name: 'value', type: 'uint256'},
    ],
    name: 'transferFrom',
    outputs: [{internalType: 'bool', name: '', type: 'bool'}],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

// TODO parse/stringify prob not needed
const STANDARD_ERC20_ABI = JSON.parse(
  JSON.stringify([
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          name: '',
          type: 'uint8',
        },
      ],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          name: '_owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          name: 'balance',
          type: 'uint256',
        },
      ],
      payable: false,
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          name: '',
          type: 'string',
        },
      ],
      payable: false,
      type: 'function',
    },
  ])
);

const YFKA_CONTROLLER_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'previousPool',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'newPool',
        type: 'uint256',
      },
    ],
    name: 'BonusPoolChange',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'previousRate',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'newRate',
        type: 'uint256',
      },
    ],
    name: 'EmissionRateCut',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: '_getBlocksSinceLastReduction',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_getNextRateReduction',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_getTotalNextRateReduction',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: '_owner',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'addWhitelist',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'blocks_per_year',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decayDivisor',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decayPercent',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'emissionRate',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getActivePool',
    outputs: [{internalType: 'uint8', name: 'idx', type: 'uint8'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint8', name: 'idx', type: 'uint8'}],
    name: 'getCurrentReward',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint8', name: 'idx', type: 'uint8'}],
    name: 'getCurrentRewardPerYear',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint8', name: 'idx', type: 'uint8'}],
    name: 'getLastBlockWithdrawn',
    outputs: [{internalType: 'uint256', name: 'reward', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: 'idx', type: 'uint8'},
      {internalType: 'address', name: '_addr', type: 'address'},
    ],
    name: 'getPersonalEmissionRate',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastBlockUpdated',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: '', type: 'uint8'},
      {internalType: 'address', name: '', type: 'address'},
    ],
    name: 'lastBlockWithdrawn',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minimum_stake',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'multiplier',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{internalType: 'address', name: '', type: 'address'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: '', type: 'uint8'},
      {internalType: 'address', name: '', type: 'address'},
    ],
    name: 'personalEmissions',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint8', name: 'idx', type: 'uint8'}],
    name: 'personalYFKAStaked',
    outputs: [{internalType: 'uint256', name: 'points', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    name: 'pools',
    outputs: [{internalType: 'contract IERC20', name: '', type: 'address'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint8', name: 'idx', type: 'uint8'}],
    name: 'redeem',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'setOpen',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: 'idx', type: 'uint8'},
      {internalType: 'address', name: '_addr', type: 'address'},
    ],
    name: 'setPool',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: '_addr', type: 'address'}],
    name: 'setYFKA',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: 'idx', type: 'uint8'},
      {internalType: 'uint256', name: 'amount', type: 'uint256'},
    ],
    name: 'stake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: '', type: 'uint8'},
      {internalType: 'address', name: '', type: 'address'},
    ],
    name: 'stakes',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'uint8', name: 'idx', type: 'uint8'}],
    name: 'totalYFKAStaked',
    outputs: [{internalType: 'uint256', name: 'points', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: 'newOwner', type: 'address'}],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{internalType: 'address', name: '_addr', type: 'address'}],
    name: 'transferOwnershipOfYFKA',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: 'idx', type: 'uint8'},
      {internalType: 'uint256', name: 'amount', type: 'uint256'},
    ],
    name: 'unstake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'yfka',
    outputs: [{internalType: 'contract IYFKA', name: '', type: 'address'}],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {internalType: 'uint8', name: 'idx', type: 'uint8'},
      {internalType: 'uint256', name: 'amount', type: 'uint256'},
    ],
    name: 'yfkaPerLP',
    outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
    stateMutability: 'view',
    type: 'function',
  },
];

/*
*
*
*
*------------------ HELPER UTILS -------------------------------
*
*
*
*
*/

const getInfuraProvider = () => {
  const INFURA_PROVIDER = new Web3.providers.HttpProvider(
    'https://mainnet.infura.io/v3/91298a4448d34edf884df8b28db5f9ea'
  );
  return new Web3(INFURA_PROVIDER);
};

const checksumAddress = (address) => {
	const provider = getInfuraProvider();
	return provider.utils.toChecksumAddress(address);
}

//SIMPLE ERROR HANDLING
function errorHandling(error, functionCall){
	const errorCode = error.code;
	const errorMessage = error.message;
	if (DISPLAY_ERRORS) {
		
		const Message = 'ERROR (' + functionCall + '): ' + errorMessage;
		if (DISPLAY_CONSOLE) console.log(Message);
		if (DISPLAY_CONSOLE) console.log(error);
		if (errorCode == 4001 || errorCode == -32002){
			$('#isConnected').html('Wallet NOT Connected');
		}
	}
}

//Sets up the Contractsa for interaction from STATES
const Contract_Setup = async =>{
	const provider = getInfuraProvider();
	
	
	//TOKEN CONTRACTS
	const XAMPContract = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	TOKENS.XAMP
	);
	const TOBContract = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	TOKENS.TOB
	);
	const BOAContract = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	TOKENS.BOA
	);
	const YFKAContract = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	TOKENS.YFKA
	);
	
	
	//PAIR CONTRACTS
	const XAMPContract2 = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	PAIRS.YFKA_XAMP
	);
	const TOBContract2 = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	PAIRS.YFKA_TOB
	);
	const BOAContract2 = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	PAIRS.YFKA_BOA
	);
	const YFKAContract2 = new provider.eth.Contract(
	UNISWAP_BASE_LP_ABI,
	PAIRS.YFKA_ETH
	);
	

	const YFKAControllerContract = new provider.eth.Contract(
	YFKA_CONTROLLER_ABI,
	YFKA_CONTROLLER_ADDRESS
	);
	
	
	
	STATES.CONTRACTS={
		XAMP: XAMPContract,
		TOB: TOBContract,
		BOA: BOAContract,
		YFKA: YFKAContract,
		
		YFKA_XAMP:XAMPContract2,
		YFKA_TOB:TOBContract2,
		YFKA_BOA:BOAContract2,
		YFKA_ETH:YFKAContract2,
		
		YFKA_CONTROLLER:YFKAControllerContract,
		
	}
	
}

// Get BTS token prices in USD and ETH
const getPrices = async () => {
  const tokenKeys = Object.keys(TOKENS);

  const response = await fetch(`https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${tokenKeys.map(k => TOKENS[k]).join(',')}&vs_currencies=usd,eth`);
  const tokenPrices = await response.json();
	STATES.PRICES ={
		YFKA: tokenPrices[TOKENS.YFKA],
		XAMP: tokenPrices[TOKENS.XAMP],
		BOA: tokenPrices[TOKENS.BOA],
		TOB: tokenPrices[TOKENS.TOB],
		ETH: tokenPrices[TOKENS.ETH],
	}
}

//GETS The Total LP coins for each Pool.
const getTotalLP = async () =>{
	
	//GET TOTAL LP IN POOLS
	const totalLPXAMP = await STATES.CONTRACTS.YFKA_XAMP.methods.totalSupply().call();
	const totalLPTOB = await STATES.CONTRACTS.YFKA_TOB.methods.totalSupply().call();
	const totalLPBOA = await STATES.CONTRACTS.YFKA_BOA.methods.totalSupply().call();
	const totalLPETH = await STATES.CONTRACTS.YFKA_ETH.methods.totalSupply().call();

	STATES.TOTAL_LP = {
		XAMP:totalLPXAMP,
		TOB:totalLPTOB,
		BOA:totalLPBOA,
		ETH:totalLPETH,
		fXAMP:totalLPXAMP/(10**18),
		fTOB:totalLPTOB/(10**18),
		fBOA:totalLPBOA/(10**18),
		fETH:totalLPETH/(10**18),
	}
}

//Retrieves Current Gas Prices
const getGasPrices = async () =>{
	 const response = await fetch(`https://ethgasstation.info/json/ethgasAPI.json`);
	 const gasPrices = await response.json();
	 
	 STATES.GAS_PRICE ={
		FAST:gasPrices['fastest'],
		FAST_WAIT:gasPrices['fastestWait'],
		AVERAGE:gasPrices['fast'],
		AVERAGE_WAIT:gasPrices['fastWait'],
		SLOW:gasPrices['average'],
		SLOW_WAIT:gasPrices['avgWait'],
		
	}
	
}

//Gets the TOTAL Pooled BTS coins
const totalPooledYFKA = async () =>{
	//Pull all pooled YFKA
	const res = STATES.POOL_RESERVES;
	const YFKAinXAMP = res.XAMP[0]/(10**18);
	const YFKAinTOB = res.TOB[0]/(10**18);
	const YFKAinBOA = res.BOA[0]/(10**18);
	const YFKAinETH = res.ETH[0]/(10**18);
	
	
	STATES.BTSPOOLED ={
		YFKAinXAMPPool : YFKAinXAMP;
		YFKAinTOBPool : YFKAinTOB;
		YFKAinBOAPool : YFKAinBOA;
		YFKAinETHPool : YFKAinETH;
		YFKATotalPooled : YFKAinXAMP+YFKAinTOB+YFKAinBOA+YFKAinETH;
	}
}

//Simple error Handler
function errorHandling(error, functionCall){
	const errorCode = error.code;
	const errorMessage = error.message;
	if (DISPLAY_ERRORS) {
		
		const Message = 'ERROR (' + functionCall + '): ' + errorMessage;
		if (DISPLAY_CONSOLE) console.log(Message);
		if (DISPLAY_CONSOLE) console.log(error);
		if (errorCode == 4001 || errorCode == -32002){
			$('#isConnected').html('Wallet NOT Connected');
		}
	}
}

//Minimum STAKE Required in BTS Coins
const Totals = async () => {
	const MIN_STAKE_AMOUNT = 0.2;

	const prices = await getPricesETH();

	const yfkaPrices = prices.YFKA;
	const yfkaEth = yfkaPrices.eth;
	const yfkaMinInEth = yfkaEth * MIN_STAKE_AMOUNT;

	//XAMP
	const xampMin = yfkaPrices.eth / prices.XAMP.eth;
	//TOB
	const tobMin = yfkaMinInEth / prices.TOB.eth;
	//BOA
	const boaMin = yfkaMinInEth / prices.BOA.eth;
	
	return {
    YFKA: tokenPrices[TOKENS.YFKA],
    XAMP: tokenPrices[TOKENS.XAMP],
    BOA: tokenPrices[TOKENS.BOA],
    TOB: tokenPrices[TOKENS.TOB],
  }

}

// get Users STAKED LP
const getStakes = async () => {
	//Provides Base Amount in Uint256 and Formatted Amount for Easy printing
	const account = STATES.CONNECTED_WALLET;
	
	const userOwnedLPXAMP = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
		.stakes(YFKA_POOL_INDEXES.XAMP, account)
		.call();
	const userOwnedLPTOB = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
		.stakes(YFKA_POOL_INDEXES.TOB, account)
		.call();
	const userOwnedLPBOA = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
		.stakes(YFKA_POOL_INDEXES.BOA, account)
		.call();
	const userOwnedLPETH = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
		.stakes(YFKA_POOL_INDEXES.ETH, account)
		.call();	
 
	STATES.USER_OWNED_LP ={
		XAMP: userOwnedLPXAMP,
		BOA: userOwnedLPBOA,
		TOB: userOwnedLPTOB,
		ETH: userOwnedLPETH,
		fXAMP: userOwnedLPXAMP/(10**18),
		fBOA: userOwnedLPBOA/(10**18),
		fTOB: userOwnedLPTOB/(10**18),
		fETH: userOwnedLPETH/(10**18),
	}
}

// get Users Rewards (YFKA)
const getRewards = async () => {
	const account = STATES.CONNECTED_WALLET;
	
	const xampReward = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
		.getCurrentReward(YFKA_POOL_INDEXES.XAMP)
		.call({
			from: account,
		});
	const tobReward = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
		.getCurrentReward(YFKA_POOL_INDEXES.TOB)
		.call({
			from: account,
		});
	const boaReward = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
		.getCurrentReward(YFKA_POOL_INDEXES.BOA)
		.call({
			from: account,
		});
	const ethReward = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
		.getCurrentReward(YFKA_POOL_INDEXES.ETH)
		.call({
			from: account,
		});
	const XampRewardFormatted = xampReward/(10**18);
	const TobRewardFormatted = tobReward/(10**18);
	const BoaRewardFormatted = boaReward/(10**18);
	const ETHRewardFormatted = ethReward/(10**18);


  return {
    XAMP: xampReward,
    BOA: boaReward,
    TOB: tobReward,
	ETH: ethReward,
	fXAMP: xampReward/(10**18),
    fBOA: boaReward/(10**18),
    fTOB: tobReward/(10**18),
	fETH: ethReward/(10**18),
  }
}

// Total Wallet BTS Helper.
const getBTSTotals = async () => {
	const rewards = await getRewards();
	const yfkaRewardTotal = rewards.fXAMP + rewards.fTOB + rewards.fBOA + rewards.fETH;
	const WalletBalances = await getWalletBTSCoins();
	const UsersLP = await getStakes();
	const BTStoLP = await getLPconversions();

	const XAMPfromLP = BTStoLP.XAMPtoLP*(UsersLP.XAMP/(10**18));	
	const TOBfromLP = BTStoLP.TOBtoLP*(UsersLP.TOB/(10**18));
	const BOAfromLP = BTStoLP.BOAtoLP*(UsersLP.BOA/(10**18));
	const ETHfromLP = BTStoLP.ETHtoLP*(UsersLP.ETH/(10**18));
	const YFKAfromLP = (BTStoLP.YFKAtoLPXAMP*(UsersLP.XAMP/(10**18))) +
						(BTStoLP.YFKAtoLPTOB *(UsersLP.TOB/(10**18)))+
						(BTStoLP.YFKAtoLPBOA*(UsersLP.BOA/(10**18))) +
						(BTStoLP.YFKAtoLPETH*(UsersLP.ETH/(10**18))) ;
						
	const XampTOTAL = WalletBalances.fXAMP + XAMPfromLP;
	const TobTOTAL = WalletBalances.fTOB + TOBfromLP;
	const BoaTOTAL = WalletBalances.fBOA + BOAfromLP;
	const ETHRTOTAL = WalletBalances.fETH + ETHfromLP;
	const YFKATOTAL = WalletBalances.fYFKA + YFKAfromLP;
  return {
    fXAMPWallet: fourDecimals(WalletBalances.fXAMP/(10**9)) ,
    fBOAWallet: fourDecimals(WalletBalances.fBOA),
    fTOBWallet: fourDecimals(WalletBalances.fTOB),
	fYFKAWallet: fourDecimals(WalletBalances.fYFKA),
	fETHWallet: fourDecimals(WalletBalances.fETH),
	fYFKAReward: fourDecimals(yfkaRewardTotal),
	fXAMPLP: fourDecimals(XAMPfromLP),
    fBOALP: fourDecimals(BOAfromLP),
    fTOBLP: fourDecimals(TOBfromLP),
	fYFKALP: fourDecimals(YFKAfromLP),
	fETHLP: fourDecimals(ETHfromLP),
	fXAMPTotal: fourDecimals(XampTOTAL),
    fBOATotal: fourDecimals(BoaTOTAL),
    fTOBTotal: fourDecimals(TobTOTAL),
	fETHTotal: fourDecimals(ETHRTOTAL),
	fYFKATotal: fourDecimals(YFKATOTAL),
  }
}

//get USers Wallet Balances
const getWalletBTSCoins = async () => {
	const provider = getInfuraProvider();
	const account = STATES.CONNECTED_WALLET;

	if (DISPLAY_CONSOLE) console.log("ETH ADD : ",account );
	const Etherbalance = await provider.eth.getBalance(account, function(error, wei) {
	  if (!error) {
		
		 return wei;
	  }
    });
	if (DISPLAY_CONSOLE) console.log("ETH WALLET BALANCE : ",Etherbalance/(10**18) );
	
	const totalBALANCEXAMP = await STATES.CONTRACTS.XAMP.methods.balanceOf(account).call();
	const totalBALANCETOB = await STATES.CONTRACTS.XAMP.methods.balanceOf(account).call();
	const totalBALANCEBOA = await STATES.CONTRACTS.XAMP.methods.balanceOf(account).call();
	const totalBALANCEETH = Etherbalance;
	const totalBALANCEYFKA = await STATES.CONTRACTS.XAMP.methods.balanceOf(account).call();
	
	console.log("XAMP BALANCE WALLET =", totalBALANCEXAMP/(10**18));
	console.log("TOB BALANCE WALLET =", totalBALANCETOB/(10**18));
	console.log("BOA BALANCE WALLET =", totalBALANCEBOA/(10**18));
	console.log("ETH BALANCE WALLET =", totalBALANCEETH/(10**18));
	console.log("YFKA BALANCE WALLET =", totalBALANCEYFKA/(10**18));
	
	STATES.WALLET_BALANCES = {
		XAMP: totalBALANCEXAMP,
		BOA: totalBALANCETOB,
		TOB: totalBALANCEBOA,
		ETH: totalBALANCEETH,
		YFKA: totalBALANCEYFKA,
		fXAMP: totalBALANCEXAMP/(10**18),
		fBOA: totalBALANCEBOA/(10**18),
		fTOB: totalBALANCETOB/(10**18),
		fETH: totalBALANCEETH/(10**18),
		fYFKA: totalBALANCEYFKA/(10**18),
	}
}

//Get LP to BTS
const getLPconversions = async () =>{
	const reserves = STATES.POOL_RESERVES;
	const totalYFKAStakes = STATES.StakedYFKA;
	const LP = STATES.TOTAL_LP;
	
	
	//GET XAMP POOLED
	const XAMPReserve = reserves.XAMP[1]/(10**9);
	const TOBReserve = reserves.TOB[1]/(10**18);
	const BOAReserve = reserves.BOA[1]/(10**18);
	const ETHReserve = reserves.ETH[1]/(10**18);
	
	const YFKAinXAMP = reserves.XAMP[0];
	const YFKAinTOB = reserves.TOB[0];
	const YFKAinBOA = reserves.BOA[0];
	const YFKAinETH = reserves.ETH[0];
	
	
	//WORK OUT BTS to LP 
	//XAMP POOL
	const XAMPtoLP = (XAMPReserve/LP.XAMP) *(10**18);
	const YFKAtoLPX = ((YFKAinXAMP/(10**18)) /LP.XAMP)*(10**18);
	console.log("YFKA TO LP (XAMP):", YFKAtoLPX);

	//TOB POOL
	const TOBtoLP = (TOBReserve/LP.TOB) *(10**18);
	const YFKAtoLPT = ((YFKAinTOB/(10**18)) /LP.TOB)*(10**18);
	console.log("YFKA TO LP (TOB):", YFKAtoLPT);
	//BOA POOL
	const BOAtoLP = (BOAReserve/LP.BOA) *(10**18);
	const YFKAtoLPB = ((YFKAinBOA/(10**18)) /LP.BOA)*(10**18);
	console.log("YFKA TO LP (ETH):", YFKAtoLPB);
	//ETH POOL
	const ETHtoLP = (ETHReserve/LP.ETH) *(10**18);
	const YFKAtoLPE = ((YFKAinETH/(10**18)) /LP.ETH)*(10**18);
	console.log("YFKA TO LP (ETH):", YFKAtoLPE);

	STATES.LP_CONVERSIONS = {
		YFKAtoLPXAMP: YFKAtoLPX,
		YFKAtoLPTOB: YFKAtoLPT,
		YFKAtoLPBOA: YFKAtoLPB,
		YFKAtoLPETH: YFKAtoLPE, 
		XAMPtoLP: XAMPtoLP,
		TOBtoLP: TOBtoLP,
		BOAtoLP: BOAtoLP, 
		ETHtoLP: ETHtoLP,
		
		
	}
}

//Retrieve connected account.
const getAccount = async () => {
		const accounts = await ethereum.request({method: 'eth_requestAccounts'});
		if (DISPLAY_CONSOLE) console.log('accounts:', accounts);
		const provider = getInfuraProvider();
		STATES.CONNECTED_WALLET = provider.utils.toChecksumAddress(accounts[0])
		return provider.utils.toChecksumAddress(accounts[0]);
};

//Returns amount of coin to LP (COIN NAME, AMOUNT)
const returnLP = async (coin,amount) =>{
	getLPconv = STATES.LP_CONVERSIONS;
		var LP = 0;
	switch (coin){
		case "XAMP":
			LP = amount/getLPconv.XAMPtoLP;
			return LP;
		break;
		case "TOB":
			LP = amount/getLPconv.TOBtoLP;
			return LP;
		break;
		case "BOA":
			LP = amount/getLPconv.BOAtoLP;
			return LP;
		break;
		case "ETH":
			LP = amount/getLPconv.ETHtoLP;
			return LP;
		break;
		default:
			return LP;
		break;
		
	}
}

// Gets the min size for BTS tokens to stake YFKA
const stakeMinimumPriceForStaking = async () => {
  const MIN_STAKE_AMOUNT = 0.2;

  const prices = STATES.PRICES;

  const yfkaPrices = prices.YFKA;

  const tokenKeys = Object.keys(TOKENS);
  const mappedTokens = tokenKeys.map((key) => {
    const yfkaMinInEth = yfkaPrices.eth * MIN_STAKE_AMOUNT;

    return {
      amount: yfkaMinInEth / prices[key].eth,
    }
  });

  return mappedTokens.reduce((acc, token, idx) => {
    return {
      ...acc,
      [tokenKeys[idx]]: token,
    };
  }, {});
}

const totalYFKAStaked = async () =>{	
	//TOTAL YFKA STAKED	
	const totalStakedYFKA_XAMP = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
		.totalYFKAStaked(YFKA_POOL_INDEXES.XAMP).call();
	const totalStakedYFKA_TOB = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
		.totalYFKAStaked(YFKA_POOL_INDEXES.TOB).call();
	const totalStakedYFKA_BOA = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
		.totalYFKAStaked(YFKA_POOL_INDEXES.BOA).call();
	const totalStakedYFKA_ETH = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
		.totalYFKAStaked(YFKA_POOL_INDEXES.ETH).call();
	
	STATES.StakedYFKA={
		XAMP:totalStakedYFKA_XAMP,
		TOB:totalStakedYFKA_TOB,
		BOA:totalStakedYFKA_BOA,
		ETH:totalStakedYFKA_ETH,
		fXAMP:totalStakedYFKA_XAMP/(10**18),
		fTOB:totalStakedYFKA_TOB/(10**18),
		fBOA:totalStakedYFKA_BOA/(10**18),
		fETH:totalStakedYFKA_ETH/(10**18),
	}	
}

const getReserves = async () => {
	//PULL RESERVES
	const YFKAXAMPReserves = await STATES.CONTRACTS.YFKA_XAMP.methods.getReserves().call();
	const YFKATOBReserves = await STATES.CONTRACTS.YFKA_TOB.methods.getReserves().call();
	const YFKABOAReserves = await STATES.CONTRACTS.YFKA_BOA.methods.getReserves().call();
	const YFKAETHReserves = await STATES.CONTRACTS.YFKA_ETH.methods.getReserves().call();
	
	STATES.POOL_RESERVES = 
	{
	    XAMP: YFKAXAMPReserves,
		BOA: YFKABOAReserves,
		TOB: YFKATOBReserves,
		ETH: YFKAETHReserves,	
	}
	
	
	
	return {
    XAMP: YFKAXAMPReserves,
    BOA: YFKABOAReserves,
    TOB: YFKATOBReserves,
	ETH: YFKAETHReserves,
	}
	
}

function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
        x *= Math.pow(10,e-1);
        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x += (new Array(e+1)).join('0');
    }
  }
  return x;
}

function twoDecimals(b) {
    const newNumber = Math.floor((b + Number.EPSILON) * 100) / 100;
	//const balance = Number(newNumber).toLocaleString('fullwide', {useGrouping:false});
    return _.toNumber(newNumber);
}

function fourDecimals(b) {
    const newNumber = Math.floor((b + Number.EPSILON) * 10000) / 10000;
	//const balance = Number(newNumber).toLocaleString('fullwide', {useGrouping:false});
    return _.toNumber(newNumber);
}

function sixDecimals(b) {
    const newNumber = Math.floor((b + Number.EPSILON) * 1000000) / 1000000;
	//const balance = Number(newNumber).toLocaleString('fullwide', {useGrouping:false});
    return _.toNumber(newNumber);
}

function eightDecimals(b) {
    const newNumber = Math.floor((b + Number.EPSILON) * 100000000) / 100000000;
	//const balance = Number(newNumber).toLocaleString('fullwide', {useGrouping:false});
    return _.toNumber(newNumber);
}

function tenDecimals(b) {
    const newNumber = Math.floor((b + Number.EPSILON) * 10000000000) / 10000000000;
	//const balance = Number(newNumber).toLocaleString('fullwide', {useGrouping:false});
    return _.toNumber(newNumber);
}

function belowZero(n){	
	if (DISPLAY_CONSOLE) console.log('belowZero Function called with:', n);
	if (n <= 0.00){
		if (DISPLAY_CONSOLE) console.log('Below 0.00');
		return '<0.00';
	}else{
		if (DISPLAY_CONSOLE) console.log('not Below 0.00');
		return n;
	}
}

const getTotalBalances = async () => {
	if (DISPLAY_CONSOLE) console.log('getBalances');
		// YFKA_XAMP
		const xampContractBalance = await STATES.CONTRACTS.YFKA_XAMP.methods.totalSupply().call();
		const xampContractDecimals = await STATES.CONTRACTS.YFKA_XAMP.methods.decimals().call();

		// YFKA_TOB
		const tobContractBalance = await STATES.CONTRACTS.YFKA_TOB.methods.totalSupply().call();
		const tobContractDecimals = await STATES.CONTRACTS.YFKA_TOB.methods.decimals().call();


		// YFKA_BOA
		const boaContractBalance = await STATES.CONTRACTS.YFKA_BOA.methods.totalSupply().call();
		const boaContractDecimals = await STATES.CONTRACTS.YFKA_BOA.methods.decimals().call();

		// YFKA_ETH		
		const ethContractBalance = await STATES.CONTRACTS.YFKA_ETH.methods.totalSupply().call();
		const ethContractDecimals = await STATES.CONTRACTS.YFKA_ETH.methods.decimals().call();


		STATES.TOTALS_BTS = {
			XAMP: xampContractBalance
			  ? xampContractBalance / 10 ** xampContractDecimals
			  : 0,
			TOB: tobContractBalance ? tobContractBalance / 10 ** tobContractDecimals : 0,
			BOA: boaContractBalance
			  ? boaContractBalance / 10 ** boaContractDecimals
			  : 0,
			ETH: ethContractBalance
			  ? ethContractBalance / 10 ** ethContractDecimals
			  : 0,
		}
};

const getPersonalEmissions = async () => {
	const account = STATES.CONNECTED_WALLET;
	const bonusPoolIdx = await STATES.CONTRACTS.YFKA_CONTROLLER.methods.getActivePool().call();

	// XAMP Personal emission rate
	const xampPersonalEmissionRate = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
	.getPersonalEmissionRate(YFKA_POOL_INDEXES.XAMP, account)
	.call();

	let emissionRateToReadableXAMP = twoDecimals(
	(xampPersonalEmissionRate / 10 ** 18 / 2) * 100
	);
	if (emissionRateToReadableXAMP <= 0.00) {
		emissionRateToReadableXAMP = 0;
	}
	if (bonusPoolIdx == YFKA_POOL_INDEXES.XAMP) {
		emissionRateToReadableXAMP = emissionRateToReadableXAMP * 2;
	}
	// TOB Personal emission rate
	const tobPersonalEmissionRate = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
	.getPersonalEmissionRate(YFKA_POOL_INDEXES.TOB, account)
	.call();
	let emissionRateToReadableTob = twoDecimals(
	(tobPersonalEmissionRate / 10 ** 18 / 2) * 100
	);
		if (emissionRateToReadableTob <= 0.00) {
	emissionRateToReadableTob = 0;
	}
	if (bonusPoolIdx == YFKA_POOL_INDEXES.TOB) {
		emissionRateToReadableTob = emissionRateToReadableTob * 2;
	}
	// BOA Personal emission rate
	const boaPersonalEmissionRate = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
	.getPersonalEmissionRate(YFKA_POOL_INDEXES.BOA, account)
	.call();
	let emissionRateToReadableBoa = twoDecimals(
	(boaPersonalEmissionRate / 10 ** 18 / 2) * 100
	);
	if (emissionRateToReadableBoa <= 0.00) {
		emissionRateToReadableBoa = 0;
	}
	if (bonusPoolIdx == YFKA_POOL_INDEXES.BOA) {
		emissionRateToReadableBoa = emissionRateToReadableBoa * 2;
	}


	// ETH Personal emission rate
	const ethPersonalEmissionRate = await STATES.CONTRACTS.YFKA_CONTROLLER.methods
	.getPersonalEmissionRate(YFKA_POOL_INDEXES.ETH, account)
	.call();
	let emissionRateToReadableEth = twoDecimals(
	(ethPersonalEmissionRate / 10 ** 18 / 2) * 100
	)/2;
	if (emissionRateToReadableEth <= 0.00) {
		emissionRateToReadableEth = 0;
	}
	if (bonusPoolIdx == YFKA_POOL_INDEXES.ETH) {
		emissionRateToReadableEth = emissionRateToReadableEth * 2;
	}
	
	STATES.PERSONAL_EMISSION = {
		XAMP: _.toNumber(emissionRateToReadableXAMP),
		TOB: _.toNumber(emissionRateToReadableTob),
		BOA: _.toNumber(emissionRateToReadableBoa),
		ETH: _.toNumber(emissionRateToReadableEth),
	}
};

async function update_Ticker_style_off(){
	const bonusAddress = await getBonusPool().catch(e => {
			errorHandling(e, 'GetBonusPool()');
			return("error");
		});
	/*
	document.getElementById('reward-BOA').style.color = "black";
	document.getElementById('reward-BOA').style.fontWeight = "normal";
	document.getElementById('reward-ETH').style.color = "black";
	document.getElementById('reward-ETH').style.fontWeight = "normal";
	document.getElementById('reward-TOB').style.color = "black";
	document.getElementById('reward-TOB').style.fontWeight = "normal";
	document.getElementById('reward-XAMP').style.color = "black";
	document.getElementById('reward-XAMP').style.fontWeight = "normal";

	switch (bonusAddress) {
	case PAIRS.YFKA_XAMP:
		document.getElementById('reward-XAMP').style.color = "white";
		document.getElementById('reward-XAMP').style.fontWeight = "normal";
		break;
	case PAIRS.YFKA_TOB:
		document.getElementById('reward-TOB').style.color = "white";
		document.getElementById('reward-TOB').style.fontWeight = "normal";
		break;
	case PAIRS.YFKA_BOA:
		document.getElementById('reward-BOA').style.color = "white";
		document.getElementById('reward-BOA').style.fontWeight = "normal";
		break;
	case PAIRS.YFKA_ETH:
		document.getElementById('reward-ETH').style.color = "white";
		document.getElementById('reward-ETH').style.fontWeight = "normal";
		break;
	
	default:
		// Dont do shit
		break;
	}

	*/
	
	

}

async function update_Ticker_style_on(){
		const bonusAddress = await getBonusPool().catch(e => {
			errorHandling(e, 'GetBonusPool()');
			return("error");
		});
	/*
	document.getElementById('reward-BOA').style.color = "red";
	document.getElementById('reward-BOA').style.fontWeight = "bold";
	document.getElementById('reward-ETH').style.color = "red";
	document.getElementById('reward-ETH').style.fontWeight = "bold";
	document.getElementById('reward-TOB').style.color = "red";
	document.getElementById('reward-TOB').style.fontWeight = "bold";
	document.getElementById('reward-XAMP').style.color = "red";
	document.getElementById('reward-XAMP').style.fontWeight = "bold";
	
	
	
	


	switch (bonusAddress) {
	case PAIRS.YFKA_XAMP:
		document.getElementById('reward-XAMP').style.color = "darkred";
		break;
	case PAIRS.YFKA_TOB:
		document.getElementById('reward-TOB').style.color = "darkred";
		break;
	case PAIRS.YFKA_BOA:
		document.getElementById('reward-BOA').style.color = "darkred";
		break;
	case PAIRS.YFKA_ETH:
		document.getElementById('reward-ETH').style.color = "darkred";
		break;
	
	default:
		// Dont do shit
		break;
	}
*/
}

async function update_XAMP_STATS(){
	XAMP-INFO = {
		USER_WALLET_BALANCE : STATES.BTS_TOTALS.fXAMPWALLET,
		USER_XAMP_BALANCE_FROM_LP: STATES.BTS_TOTALS.fXAMPLP,
		USER_TOTALBALANCE: STATES.BTS_TOTALS.fXAMPTOTAL,
		CAMP_PER_LP: STATES.LP_CONVERSIONS.XAMPtoLP,
		XAMP_STAKE_PERSONAL_EMISSION: STATES.PERSONAL_EMISSION.XAMP,
		XAMP_POOL_RESERVES: (STATES.POOL_RESERVES.XAMP[1]/(10**9)),
		PRICE_XAMP_USD: STATES.PRICES.XAMP.usd,
		PRICE_XAMP_ETH: STATES.PRICES.XAMP.eth,
		YFKA_POOLED_XAMP: STATES.YFKAinXAMPPool,
		YFKA_STAKED_XAMP_POOL: STATES.StakedYFKA.fXAMP,
		TOTAL_XAMP_LP_COINS: STATES.TOTALS_BTS,
		TOTAL_CIRCULATING: STATES.XAMP,
		USER_OWNED_XAMP_LP_WALLET: STATES.USER_LP.XAMP,
		USER_OWNED_XAMP_LP_TOTAL: STATES.USER_OWNED_LP.fXAMP,
	}
}

function OUTPUT(){
	/*ALL STORED VALUES:
		USER_WALLET_BALANCE : STATES.BTS_TOTALS.fXAMPWALLET,
		USER_XAMP_BALANCE_FROM_LP: STATES.BTS_TOTALS.fXAMPLP,
		USER_TOTALBALANCE: STATES.BTS_TOTALS.fXAMPTOTAL,
		CAMP_PER_LP: STATES.LP_CONVERSIONS.XAMPtoLP,
		XAMP_STAKE_PERSONAL_EMISSION: STATES.PERSONAL_EMISSION.XAMP,
		XAMP_POOL_RESERVES: (STATES.POOL_RESERVES.XAMP[1]/(10**9)),
		PRICE_XAMP_USD: STATES.PRICES.XAMP.usd,
		PRICE_XAMP_ETH: STATES.PRICES.XAMP.eth,
		YFKA_POOLED_XAMP: STATES.YFKAinXAMPPool,
		YFKA_STAKED_XAMP_POOL: STATES.StakedYFKA.fXAMP,
		TOTAL_XAMP_LP_COINS: STATES.TOTALS_BTS,
		TOTAL_CIRCULATING: STATES.XAMP,
		USER_OWNED_XAMP_LP_WALLET: STATES.USER_LP.XAMP,
		USER_OWNED_XAMP_LP_TOTAL: STATES.USER_OWNED_LP.fXAMP,
	
	*/
	$('#ID_NAME').html(XAMP-INFO.INFO REQUIRED));
	
	
	
}

window.addEventListener('load', async (event) => {

	if (DISPLAY_CONSOLE) console.log("PAGE LOAD");
	//await stakeMinimumPrice();
	await Initial_Load();
	
	
	
	//Mobile Detection.
	setTimeout(function(){
		if((screen.width<480) || (screen.height <480)){
			if (DISPLAY_CONSOLE) console.log('User appears to be on a mobile.');
		}
	}, 100);

	web3.eth.getAccounts(async function(err, accounts){
		try {
			
			
			if (err != null) console.error("An error occurred: "+err);
			else if (accounts.length == 0){
				if (DISPLAY_CONSOLE) console.log('NO ACCOUNTS CONNECTED!');
				var durp = await updateGlobal().catch(e => {
					errorHandling(e, 'updateGlobal()');
				});
				
				await syncALL();
			}			
			else {
				var start = performance.now();
				await syncALL();
				
				
				await fillYFKAinfo();
				
				
				console.log("User is logged in to MetaMask");
				if (DISPLAY_CONSOLE) console.log('ACCOUNTS CONNECTED!');
				await updateGlobal();

				
				var updateAP = await updateActivePool().catch(e => {
						errorHandling(e, 'updateActivePool()');
				});
				
				if (updateAP != "error"){
					var updateUS = await updateUserStats().catch(e => {
						errorHandling(e, 'updateUserStats()');
					});
				}
				
				

				if (updateUS != "error"){
					await setStakeBalance({
						currentTarget: {
							value: 'XAMP',
						}
					}).catch(e => {
						errorHandling(e, 'setStakeBalance()');
					});
					await setRedeemBalance({
						currentTarget: {
							value: 'XAMP',
						}
					}).catch(e => {
						errorHandling(e, 'setRedeemBalance()');
					});
					await setUnstakeBalance({
							currentTarget: {
							value: 'XAMP',
						}
					}).catch(e => {
						errorHandling(e, 'setUnstakeBalance()');
					});
					$('#isConnected').html('wallet connected');
				}
				setInterval(
				  () => updateUserStats(),
				  10000
				);
				await FillInfo();
				if (DISPLAY_CONSOLE) console.log("---END OF INITIAL LOAD---");
				var end =	performance.now();
				var time = end - start;
				console.log('Execution time (main Load): ', time/1000, " seconds");	
			}
		}catch(e){
			errorHandling(e, 'GetAccounts()');
		}
	});

});



/*
INITIALISATION
*/

//Initialise Contracts to STATES

async function Initial_Load () {	
await Contract_Setup();
await getAccount();
await getReserves();
await totalPooledYFKA();
await totalYFKAStaked();
await getTotalLP();
await getPrices();
await getWalletBTSCoins();
await getTotalBalances();
await getPoolBalances();
await getPersonalEmissions();
await getLPconversions();
await getGlobalEmissionRate();
await getStakes();
await getGasPrices();
await getBTSTotals();
console.log("STATES: ", STATES);

}



