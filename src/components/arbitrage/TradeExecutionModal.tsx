
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface TradeExecutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  currentPrice: string;
  targetPrice: string;
  sourceMarket: string;
  targetMarket: string;
}

const TradeExecutionModal = ({ 
  isOpen, 
  onClose, 
  title,
  currentPrice,
  targetPrice,
  sourceMarket,
  targetMarket
}: TradeExecutionModalProps) => {
  const [strategy, setStrategy] = useState("flash");
  const { toast } = useToast();

  const handleExecute = () => {
    // Here you would integrate with your trading logic
    toast({
      title: "Trade Executed",
      description: `${strategy.toUpperCase()} trade executed for ${title} from ${sourceMarket} to ${targetMarket}`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Execute Trade: {title}</DialogTitle>
          <DialogDescription>
            Buy at {currentPrice} ({sourceMarket}) → Sell at {targetPrice} ({targetMarket})
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-6 py-4">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Select Trading Strategy</h4>
            
            <RadioGroup value={strategy} onValueChange={setStrategy}>
              <div className="flex items-start space-x-3 space-y-0">
                <RadioGroupItem value="flash" id="flash" />
                <Label htmlFor="flash" className="font-normal">
                  <div className="space-y-1">
                    <p className="font-medium">Flash Trade</p>
                    <p className="text-sm text-muted-foreground">
                      Execute trade in a single atomic transaction. Higher gas fees but guaranteed execution.
                    </p>
                  </div>
                </Label>
              </div>
              
              <div className="flex items-start space-x-3 space-y-0 mt-4">
                <RadioGroupItem value="split" id="split" />
                <Label htmlFor="split" className="font-normal">
                  <div className="space-y-1">
                    <p className="font-medium">Split Trade</p>
                    <p className="text-sm text-muted-foreground">
                      Split execution into multiple transactions. Lower gas fees but higher slippage risk.
                    </p>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
          
          <Button onClick={handleExecute} className="w-full">
            Confirm Trade Execution
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TradeExecutionModal;
