import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleDollarSign, Users } from "lucide-react";
import { useState } from "react";
import StakeToPlayModal from "./StakeToPlayModal";

interface PlayToEarnCardProps {
  title: string;
  image: string;
  description: string;
  requiredStake: string;
  potentialEarnings: string;
  tokenSymbol: string;
  tokenLogo: string;
  chains: string[];
  playerCount: string;
}

const PlayToEarnCard = ({ 
  title, 
  image, 
  description, 
  requiredStake,
  potentialEarnings,
  tokenSymbol,
  tokenLogo,
  chains,
  playerCount
}: PlayToEarnCardProps) => {
  const [showStakeModal, setShowStakeModal] = useState(false);

  return (
    <>
      <Card className="game-card">
        <div className="relative h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/60 rounded-full px-2 py-1">
            <img src={tokenLogo} alt={tokenSymbol} className="w-4 h-4 rounded-full" />
            <span className="text-xs">{tokenSymbol}</span>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
        </CardHeader>
        
        <CardContent className="pb-0">
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4">
            <div>
              <p className="text-xs text-muted-foreground">Required Stake</p>
              <p className="font-medium">{requiredStake}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Potential Earnings</p>
              <p className="font-medium text-green-500">{potentialEarnings}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Supported Chains</p>
              <div className="flex gap-1 mt-1">
                {chains.map((chain, i) => (
                  <div key={i} className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-[10px]">{chain.charAt(0)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Active Players</p>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3 text-game-secondary" />
                <p className="font-medium">{playerCount}</p>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex gap-2">
          <Button 
            className="game-button-primary flex-1 gap-1"
            onClick={() => setShowStakeModal(true)}
          >
            <CircleDollarSign className="w-4 h-4" />
            <span>Stake & Play</span>
          </Button>
          <Button variant="outline" className="game-button-secondary flex-1">Learn More</Button>
        </CardFooter>
      </Card>

      <StakeToPlayModal
        isOpen={showStakeModal}
        onClose={() => setShowStakeModal(false)}
        title={title}
        requiredStake={requiredStake}
        tokenSymbol={tokenSymbol}
      />
    </>
  );
};

export default PlayToEarnCard;
