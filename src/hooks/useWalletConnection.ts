
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export const useWalletConnection = () => {
  const { address, isConnected } = useAccount();
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();

  const handleConnect = async () => {
    try {
      await connectAsync();
    } catch (error) {
      console.error('Failed to connect:', error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnectAsync();
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
