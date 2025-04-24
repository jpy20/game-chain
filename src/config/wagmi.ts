
import { createConfig, configureChains } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { createWeb3Modal } from '@web3modal/react';
import { w3mConnectors, w3mProvider } from '@web3modal/ethereum';

const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID'; // Replace this with your WalletConnect Cloud project ID

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia],
  [w3mProvider({ projectId })]
);

export const config = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ chains, projectId }),
  publicClient,
  webSocketPublicClient,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
  themeMode: 'dark',
});
