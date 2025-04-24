
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layers, ArrowRight } from "lucide-react";

interface ArbitrageCardProps {
  title: string;
  image: string;
  sourceMarket: string;
  targetMarket: string;
  currentPrice: string;
  targetPrice: string;
  potentialProfit: string;
  profitPercentage: string;
  confidence: number;
}

const ArbitrageCard = ({ 
  title, 
  image, 
  sourceMarket, 
  targetMarket, 
  currentPrice, 
  targetPrice,
  potentialProfit,
  profitPercentage,
  confidence 
}: ArbitrageCardProps) => {
  return (
    <Card className="game-card">
      <CardHeader className="pb-0">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-muted-foreground">AI Confidence</span>
            <div className="h-1.5 w-20 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-game-primary" 
                style={{ width: `${confidence}%` }}
              ></div>
            </div>
            <span className="text-xs font-medium">{confidence}%</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="py-4">
        <div className="flex gap-4">
          <div className="w-24 h-24 rounded-md overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-game-primary"></div>
                <span className="text-sm">{sourceMarket}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-game-secondary"></div>
                <span className="text-sm">{targetMarket}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-y-4">
              <div>
                <p className="text-xs text-muted-foreground">Current Price</p>
                <p className="font-medium">{currentPrice}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Target Price</p>
                <p className="font-medium">{targetPrice}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Potential Profit</p>
                <p className="font-medium text-green-500">{potentialProfit}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Profit %</p>
                <p className="font-medium text-green-500">+{profitPercentage}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button className="game-button-primary flex-1">Execute Trade</Button>
        <Button variant="outline" className="game-button-secondary flex-1">Details</Button>
      </CardFooter>
    </Card>
  );
};

export default ArbitrageCard;
