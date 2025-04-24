
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { toast } from '@/hooks/use-toast';

export const useWalletConnection = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = async () => {
    try {
      const availableConnector = connectors.find(c => c.ready);
      
      if (availableConnector) {
        connect({ connector: availableConnector });
        toast({
          title: "Wallet Connection",
          description: "Connection initiated. Please approve in your wallet.",
        });
      } else {
        toast({
          title: "Connection Error",
          description: "No wallet connector available. Please install a wallet extension.",
          variant: "destructive",
        });
        console.error('No connector available');
      }
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      });
      console.error('Failed to connect:', error);
    }
  };

  const handleDisconnect = () => {
    try {
      disconnect();
      toast({
        title: "Wallet Disconnected",
        description: "Your wallet has been disconnected",
      });
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
