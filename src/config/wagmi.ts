
import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected, walletConnect } from 'wagmi/connectors';

// Replace with your WalletConnect Cloud project ID
// Get one for free at https://cloud.walletconnect.com
const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID';

// Create wagmi config
export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [
    injected(),
    walletConnect({ projectId }),
  ],
});

export { projectId };
