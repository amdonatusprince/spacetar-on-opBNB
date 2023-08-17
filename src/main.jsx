import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

//wallet import
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  lightTheme
} from '@rainbow-me/rainbowkit';

import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  trustWallet,
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
} from '@rainbow-me/rainbowkit/wallets';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { opBNBMainnet, opBNBTestnet } from './Chain.tsx'
import {
  baseGoerli, base
} from 'wagmi/chains';

import { publicProvider } from 'wagmi/providers/public';

const projectId = import.meta.env.VITE_OPBNB_PROJECT_ID;
const { chains, publicClient } = configureChains(
  [opBNBMainnet, opBNBTestnet],
  [
    publicProvider()
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
    ]
  },
  {
    groupName: 'Others',
    wallets: [
      coinbaseWallet({ chains, 
        appName: 'Spacetar | A Community Empowering Mental Well-Being' }),
      injectedWallet({ chains }),
      rainbowWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
]);


const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider 
      theme={lightTheme({
        accentColor: '#1570ef',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
        overlayBlur: 'small',
        body: 'Arial'
      },
      )}
      chains={chains}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </RainbowKitProvider>
      </WagmiConfig>

  </React.StrictMode>,
);
