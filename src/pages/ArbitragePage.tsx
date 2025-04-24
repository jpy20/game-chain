
import AppLayout from "@/components/layout/AppLayout";
import ArbitrageCard from "@/components/arbitrage/ArbitrageCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/dashboard/StatCard";
import { CircleDollarSign, Layers3, TrendingUp } from "lucide-react";

const ArbitragePage = () => {
  const arbitrageOpportunities = [
    {
      title: "Axie Mystic #4281",
      image: "https://images.unsplash.com/photo-1635329347422-3348788cfa05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmZ0fGVufDB8fDB8fHww",
      sourceMarket: "OpenSea",
      targetMarket: "X2Y2",
      currentPrice: "0.82 ETH",
      targetPrice: "0.94 ETH",
      potentialProfit: "0.12 ETH",
      profitPercentage: "14.6%",
      confidence: 89
    },
    {
      title: "Crypto Punks #2048",
      image: "https://images.unsplash.com/photo-1646474123570-50c924c6db14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5mdHxlbnwwfHwwfHx8MA%3D%3D",
      sourceMarket: "Blur",
      targetMarket: "OpenSea",
      currentPrice: "2.15 ETH",
      targetPrice: "2.38 ETH",
      potentialProfit: "0.23 ETH",
      profitPercentage: "10.7%",
      confidence: 76
    },
    {
      title: "Meta Kingdoms Land #871",
      image: "https://images.unsplash.com/photo-1518709911915-712d5fd04677?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D",
      sourceMarket: "Magic Eden",
      targetMarket: "Rarible",
      currentPrice: "1.45 SOL",
      targetPrice: "1.68 SOL",
      potentialProfit: "0.23 SOL",
      profitPercentage: "15.9%",
      confidence: 92
    },
    {
      title: "NFT Racers Car #12",
      image: "https://images.unsplash.com/photo-1545156521-77bd85671d30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFjaW5nJTIwY2FyfGVufDB8fDB8fHww",
      sourceMarket: "Blur",
      targetMarket: "LooksRare",
      currentPrice: "0.35 ETH",
      targetPrice: "0.42 ETH",
      potentialProfit: "0.07 ETH",
      profitPercentage: "20.0%",
      confidence: 84
    },
    {
      title: "Guild Weapon #532",
      image: "https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhcG9ufGVufDB8fDB8fHww",
      sourceMarket: "TofuNFT",
      targetMarket: "OpenSea",
      currentPrice: "0.58 ETH",
      targetPrice: "0.67 ETH",
      potentialProfit: "0.09 ETH",
      profitPercentage: "15.5%",
      confidence: 81
    },
    {
      title: "Virtual Land Plot #94",
      image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
      sourceMarket: "OpenSea",
      targetMarket: "Gamma.io",
      currentPrice: "1.25 ETH",
      targetPrice: "1.42 ETH",
      potentialProfit: "0.17 ETH",
      profitPercentage: "13.6%",
      confidence: 73
    }
  ];

  return (
    <AppLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">NFT Arbitrage</h1>
          <p className="text-muted-foreground">AI-powered opportunities for fractional NFT liquidity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard 
            title="Opportunities Found" 
            value="24" 
            icon={<Layers3 className="h-6 w-6" />}
            change="6 new today"
            isPositive={true}
          />
          <StatCard 
            title="Potential Profit" 
            value="3.42 ETH" 
            icon={<CircleDollarSign className="h-6 w-6" />}
            change="0.81 ETH increase"
            isPositive={true}
          />
          <StatCard 
            title="Avg. Profit Margin" 
            value="14.8%" 
            icon={<TrendingUp className="h-6 w-6" />}
            change="2.3% this week"
            isPositive={true}
          />
        </div>

        <div className="mb-6">
          <Tabs defaultValue="top">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="top">Top Opportunities</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="tracking">Tracking</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Filter</Button>
                <Button variant="outline" size="sm">Sort</Button>
              </div>
            </div>

            <TabsContent value="top" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {arbitrageOpportunities
                  .filter((_, i) => i < 3)
                  .map((opportunity, i) => (
                    <ArbitrageCard 
                      key={i}
                      title={opportunity.title}
                      image={opportunity.image}
                      sourceMarket={opportunity.sourceMarket}
                      targetMarket={opportunity.targetMarket}
                      currentPrice={opportunity.currentPrice}
                      targetPrice={opportunity.targetPrice}
                      potentialProfit={opportunity.potentialProfit}
                      profitPercentage={opportunity.profitPercentage}
                      confidence={opportunity.confidence}
                    />
                  ))
                }
              </div>
            </TabsContent>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {arbitrageOpportunities.map((opportunity, i) => (
                  <ArbitrageCard 
                    key={i}
                    title={opportunity.title}
                    image={opportunity.image}
                    sourceMarket={opportunity.sourceMarket}
                    targetMarket={opportunity.targetMarket}
                    currentPrice={opportunity.currentPrice}
                    targetPrice={opportunity.targetPrice}
                    potentialProfit={opportunity.potentialProfit}
                    profitPercentage={opportunity.profitPercentage}
                    confidence={opportunity.confidence}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tracking" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {arbitrageOpportunities
                  .filter((_, i) => i === 1 || i === 3 || i === 5)
                  .map((opportunity, i) => (
                    <ArbitrageCard 
                      key={i}
                      title={opportunity.title}
                      image={opportunity.image}
                      sourceMarket={opportunity.sourceMarket}
                      targetMarket={opportunity.targetMarket}
                      currentPrice={opportunity.currentPrice}
                      targetPrice={opportunity.targetPrice}
                      potentialProfit={opportunity.potentialProfit}
                      profitPercentage={opportunity.profitPercentage}
                      confidence={opportunity.confidence}
                    />
                  ))
                }
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

export default ArbitragePage;
