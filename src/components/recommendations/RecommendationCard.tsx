
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, CircleDollarSign, Layers3 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface RecommendationCardProps {
  title: string;
  image: string;
  description: string;
  earnings: string;
  riskLevel: number;
  playStyle: string[];
  matchScore: number;
}

const RecommendationCard = ({ 
  title, 
  image, 
  description, 
  earnings,
  riskLevel,
  playStyle,
  matchScore
}: RecommendationCardProps) => {
  // Risk level color
  const getRiskColor = () => {
    if (riskLevel <= 3) return "text-green-500";
    if (riskLevel <= 7) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <Card className="game-card">
      <div className="relative h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-card to-transparent"></div>
        <div className="absolute bottom-2 left-2 flex items-center gap-2 bg-black/60 rounded-full pl-2 pr-3 py-1">
          <CircleDollarSign className="w-4 h-4 text-game-primary" />
          <span className="text-xs">{earnings}</span>
        </div>
      </div>
      
      <CardHeader className="pb-0">
        <div className="flex justify-between">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <div className="flex items-center gap-1">
            <span className="text-sm">Match:</span>
            <span className="text-sm font-bold text-game-primary">{matchScore}%</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="py-4">
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">Risk Level</span>
              <span className={getRiskColor()}>{riskLevel}/10</span>
            </div>
            <Progress value={riskLevel * 10} className="h-1" />
          </div>
          
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">AI Confidence</span>
              <span className="font-medium">{matchScore}%</span>
            </div>
            <Progress value={matchScore} className="h-1" />
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-xs text-muted-foreground mb-2">Play Style</p>
          <div className="flex flex-wrap gap-1">
            {playStyle.map((style, i) => (
              <span 
                key={i} 
                className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground"
              >
                {style}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button className="game-button-primary flex-1">Play Now</Button>
        <Button variant="outline" className="game-button-secondary flex-1">Learn More</Button>
      </CardFooter>
    </Card>
  );
};

export default RecommendationCard;
