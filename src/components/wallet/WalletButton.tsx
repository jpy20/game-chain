
import { Button } from "@/components/ui/button";
import { useWalletConnection } from "@/hooks/useWalletConnection";
import { shortenAddress } from "@/utils/address";

const WalletButton = () => {
  const { address, isConnected, connect, disconnect } = useWalletConnection();

  return (
    <Button
      onClick={isConnected ? disconnect : connect}
      variant="outline"
      className="flex items-center gap-2"
    >
      {isConnected ? shortenAddress(address as string) : "Connect Wallet"}
    </Button>
  );
};

export default WalletButton;
