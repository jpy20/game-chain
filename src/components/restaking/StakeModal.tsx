
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface StakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  poolName: string;
  apy: string;
}

const StakeModal = ({ isOpen, onClose, poolName, apy }: StakeModalProps) => {
  const [amount, setAmount] = useState("");
  const { toast } = useToast();

  const handleStake = () => {
    if (!amount || isNaN(Number(amount))) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid number",
        variant: "destructive",
      });
      return;
    }

    // Here you would integrate with your wallet provider
    toast({
      title: "Staking initiated",
      description: `Staking ${amount} tokens in ${poolName}`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Stake in {poolName}</DialogTitle>
          <DialogDescription>
            Current APY: {apy}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Input
              id="amount"
              placeholder="Enter amount to stake"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Minimum stake: 0.1 ETH
            </p>
          </div>
          <Button onClick={handleStake} className="w-full">
            Confirm Stake
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StakeModal;
