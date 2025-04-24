
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Layers3, CircleDollarSign } from "lucide-react";

interface ProfileCardProps {
  name: string;
  avatar: string;
  rank: string;
  wins: number;
  tradingVolume: string;
  restaked: string;
  badges: string[];
}

const ProfileCard = ({ 
  name, 
  avatar, 
  rank,
  wins,
  tradingVolume,
  restaked,
  badges
}: ProfileCardProps) => {
  return (
    <Card className="game-card">
      <CardContent className="pt-6 pb-4 px-4">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-game-primary mb-3">
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          </div>
          
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-xs text-muted-foreground mb-2">{rank}</p>
          
          <div className="flex gap-1 mb-3">
            {Array.from({ length: 5 }, (_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-muted'}`}
                fill={i < 4 ? 'currentColor' : 'none'}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-2 w-full mb-4">
            <div className="text-center">
              <div className="flex items-center justify-center h-8 w-8 mx-auto rounded-full bg-muted text-game-primary">
                <Star className="w-4 h-4" />
              </div>
              <p className="text-lg font-bold">{wins}</p>
              <p className="text-xs text-muted-foreground">Wins</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-8 w-8 mx-auto rounded-full bg-muted text-game-secondary">
                <CircleDollarSign className="w-4 h-4" />
              </div>
              <p className="text-lg font-bold">{tradingVolume}</p>
              <p className="text-xs text-muted-foreground">Volume</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-8 w-8 mx-auto rounded-full bg-muted text-game-accent">
                <TrendingUp className="w-4 h-4" />
              </div>
              <p className="text-lg font-bold">{restaked}</p>
              <p className="text-xs text-muted-foreground">Restaked</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 justify-center">
            {badges.map((badge, i) => (
              <span 
                key={i} 
                className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-4 pb-4 pt-0">
        <Button className="game-button-primary w-full">View Profile</Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
