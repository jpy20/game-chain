import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Trophy, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleProfileClick = () => {
    // Using the name as an ID for demo purposes
    navigate(`/profiles/${encodeURIComponent(name)}`);
  };

  return (
    <Card className="game-card hover:border-game-primary/50 transition-all cursor-pointer" onClick={handleProfileClick}>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm text-muted-foreground">{rank}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="text-xs text-muted-foreground">Wins</p>
            <div className="flex items-center gap-1">
              <Trophy className="w-3 h-3 text-yellow-500" />
              <span className="font-medium">{wins}</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Volume</p>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-blue-500" />
              <span className="font-medium">{tradingVolume}</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Restaked</p>
            <div className="flex items-center gap-1">
              <Wallet className="w-3 h-3 text-purple-500" />
              <span className="font-medium">{restaked}</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Badges</p>
            <div className="flex items-center gap-1">
              {badges.slice(0, 2).map((badge, index) => (
                <span key={index} className="text-[0.6rem] bg-muted px-1.5 py-0.5 rounded-full">{badge}</span>
              ))}
              {badges.length > 2 && <span className="text-xs text-muted-foreground">+</span>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
