
import { Button } from "@/components/ui/button";
import { useWalletConnection } from "@/hooks/useWalletConnection";
import { shortenAddress } from "@/utils/address";
import { Wallet } from "lucide-react";

const WalletButton = () => {
  const { address, isConnected, connect, disconnect } = useWalletConnection();

  return (
    <Button
      onClick={isConnected ? disconnect : connect}
      variant="outline"
      className="flex items-center gap-2 w-full justify-start"
    >
      <Wallet className="h-4 w-4" />
      {isConnected ? shortenAddress(address as string) : "Connect Wallet"}
    </Button>
  );
};

export default WalletButton;
