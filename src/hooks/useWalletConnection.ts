
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { mainnet } from 'wagmi/chains';

export const useWalletConnection = () => {
  const { address, isConnected } = useAccount();
  const { connectAsync, connectors } = useConnect();
  const { disconnectAsync } = useDisconnect();

  const handleConnect = async () => {
    if (!isConnected) {
      try {
        const connector = connectors.find(c => c.ready);
        if (connector) {
          await connectAsync({ connector, chainId: mainnet.id });
          console.log("Connected to wallet");
        } else {
          console.error('No connector found');
        }
      } catch (error) {
        console.error('Failed to connect:', error);
      }
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnectAsync();
      console.log("Disconnected from wallet");
    } catch (error) {
      console.error('Failed to disconnect:', error);
    }
  };

  return {
    address,
    isConnected,
    connect: handleConnect,
    disconnect: handleDisconnect,
  };
};
