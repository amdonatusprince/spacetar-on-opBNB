import { Chain } from 'wagmi';

export const opBNBTestnet = {
  id: 5611,
  name: 'opBNB Testnet',
  network: 'opBNB Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'tBNB',
    symbol: 'tBNB',
  },
  rpcUrls: {
    public: { http: ['https://opbnb-testnet-rpc.bnbchain.org'] },
    default: { http: ['https://opbnb-testnet-rpc.bnbchain.org'] },
  },
  blockExplorers: {
    etherscan: { name: 'opBNB Scan', url: 'http://opbnbscan.com/' },
    default: { name: 'opBNB Scan', url: 'http://opbnbscan.com/' },
  },

} as const satisfies Chain


export const opBNBMainnet = {
    id: 204,
    name: 'opBNB Mainnet',
    network: 'opBNB Mainnet',
    nativeCurrency: {
      decimals: 18,
      name: 'BNB',
      symbol: 'BNB',
    },
    rpcUrls: {
      public: { http: ['https://opbnb-mainnet-rpc.bnbchain.org'] },
      default: { http: ['https://opbnb-mainnet-rpc.bnbchain.org'] },
    },
    blockExplorers: {
      etherscan: { name: 'opBNB Scan', url: 'http://mainnet.opbnbscan.com/' },
      default: { name: 'opBNB Scan', url: 'http://mainnet.opbnbscan.com/' },
    },
  
  } as const satisfies Chain