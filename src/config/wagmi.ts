
import { createConfig, configureChains } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';

// Replace this with your actual WalletConnect Cloud project ID if you have one
// You can get one for free at https://cloud.walletconnect.com/
const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID';

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

export const ethereumClient = new EthereumClient(config, chains);
