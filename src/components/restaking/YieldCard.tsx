import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CirclePlus, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import StakeModal from "./StakeModal";

interface YieldCardProps {
  title: string;
  description: string;
  apy: string;
  tvl: string;
  myStake?: string;
  chains: string[];
  highlight?: boolean;
}

const YieldCard = ({ title, description, apy, tvl, myStake, chains, highlight = false }: YieldCardProps) => {
  const [isStakeModalOpen, setIsStakeModalOpen] = useState(false);

  return (
    <>
      <Card className={`game-card ${highlight ? 'border-game-primary/50 shadow-[0_0_15px_rgba(110,51,228,0.3)]' : ''}`}>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg font-bold">{title}</CardTitle>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            {highlight && (
              <div className="bg-game-primary/20 text-game-primary text-xs px-2 py-1 rounded-full">
                Popular
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">APY</span>
              <span className="text-xl font-bold text-gradient">{apy}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground text-sm">Total Value Locked</span>
              <span className="font-medium">{tvl}</span>
            </div>
            
            {myStake && (
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Your Stake</span>
                  <span className="font-medium">{myStake}</span>
                </div>
                <Progress value={30} className="h-1" />
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mt-2">
              {chains.map((chain, i) => (
                <div key={i} className="bg-muted flex items-center rounded-full px-2 py-1">
                  <span className="w-2 h-2 rounded-full bg-game-secondary mr-1"></span>
                  <span className="text-xs">{chain}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex gap-2">
          <Button 
            className="game-button-primary flex-1 flex items-center gap-1"
            onClick={() => setIsStakeModalOpen(true)}
          >
            <CirclePlus className="w-4 h-4" />
            <span>Stake</span>
          </Button>
          {myStake && (
            <Button variant="outline" className="game-button-secondary flex-1">
              Details
            </Button>
          )}
        </CardFooter>
      </Card>

      <StakeModal
        isOpen={isStakeModalOpen}
        onClose={() => setIsStakeModalOpen(false)}
        poolName={title}
        apy={apy}
      />
    </>
  );
};

export default YieldCard;
