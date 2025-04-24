
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Star, Users } from "lucide-react";

interface GameCardProps {
  title: string;
  image: string;
  apy: string;
  rating: number;
  playerCount: string;
  categories: string[];
}

const GameCard = ({ title, image, apy, rating, playerCount, categories }: GameCardProps) => {
  return (
    <Card className="game-card overflow-hidden">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/60 rounded px-2 py-1 text-xs flex items-center gap-1">
          <Star className="h-3 w-3 text-yellow-400" />
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {categories.map((category, i) => (
            <span 
              key={i} 
              className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4 text-game-primary" />
            <span className="text-sm">APY: {apy}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-game-secondary" />
            <span className="text-sm">{playerCount}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="game-button-primary flex-1">Play</Button>
        <Button className="game-button-secondary flex-1">Stake</Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
