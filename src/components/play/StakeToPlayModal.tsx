
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface StakeToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  requiredStake: string;
  tokenSymbol: string;
}

const StakeToPlayModal = ({ 
  isOpen, 
  onClose, 
  title,
  requiredStake,
  tokenSymbol
}: StakeToPlayModalProps) => {
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

    // Here you would integrate with your staking logic
    toast({
      title: "Stake Successful",
      description: `Successfully staked ${amount} ${tokenSymbol} in ${title}`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Stake to Play: {title}</DialogTitle>
          <DialogDescription>
            Required Stake: {requiredStake}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Input
              id="amount"
              placeholder={`Enter amount in ${tokenSymbol}`}
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Minimum stake: {requiredStake}
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

export default StakeToPlayModal;
