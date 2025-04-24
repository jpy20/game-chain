
import AppLayout from "@/components/layout/AppLayout";
import RecommendationCard from "@/components/recommendations/RecommendationCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Star, ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const RecommendationsPage = () => {
  const recommendations = [
    {
      title: "Crypto Legends",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nfGVufDB8fDB8fHww",
      description: "Strategic card game with blockchain rewards and active community.",
      earnings: "10-15 tokens/day",
      riskLevel: 3,
      playStyle: ["Strategy", "Casual", "Collection"],
      matchScore: 92
    },
    {
      title: "NFT Racers",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFjaW5nJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Race futuristic cars and earn by winning tournaments on Polygon.",
      earnings: "8-12 tokens/day",
      riskLevel: 5,
      playStyle: ["Action", "Competitive", "Grinding"],
      matchScore: 88
    },
    {
      title: "Meta Kingdoms",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2luZ2RvbXxlbnwwfHwwfHx8MA%3D%3D",
      description: "MMORPG with land ownership and resource gathering economy.",
      earnings: "25-40 tokens/day",
      riskLevel: 7,
      playStyle: ["RPG", "Social", "Investment"],
      matchScore: 85
    },
    {
      title: "Pixel Miners",
      image: "https://images.unsplash.com/photo-1518709911915-712d5fd04677?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Mine resources, craft items, and trade on the blockchain marketplace.",
      earnings: "15-25 tokens/day",
      riskLevel: 4,
      playStyle: ["Casual", "Crafting", "Trading"],
      matchScore: 79
    },
    {
      title: "Cyber Hunters",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Team-based shooter with prize pools and token rewards.",
      earnings: "8-30 tokens/day",
      riskLevel: 6,
      playStyle: ["FPS", "Team", "Competitive"],
      matchScore: 75
    },
    {
      title: "DeFi Pets",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Breed, collect and battle fantasy creatures while earning rewards.",
      earnings: "5-10 tokens/day",
      riskLevel: 2,
      playStyle: ["Collection", "Casual", "Breeding"],
      matchScore: 82
    }
  ];

  return (
    <AppLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">AI Game Recommendations</h1>
          <p className="text-muted-foreground">Personalized game suggestions to maximize your earnings</p>
        </div>

        <div className="game-card p-6 mb-8">
          <h3 className="text-lg font-bold mb-4">Your Gaming Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Preferred Play Style</p>
              <Button variant="outline" className="w-full justify-between">
                <span>Strategy Games</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Time Available</p>
              <Button variant="outline" className="w-full justify-between">
                <span>2-4 hours daily</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Risk Tolerance</p>
              <Button variant="outline" className="w-full justify-between">
                <span>Medium</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for game types, chains, tokens..." 
                className="pl-9"
              />
            </div>
            <Button className="game-button-primary">
              Update Recommendations
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <Tabs defaultValue="recommended">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="highest">Highest Earning</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Filter</Button>
                <Button variant="outline" size="sm">Sort</Button>
              </div>
            </div>

            <TabsContent value="recommended" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations
                  .sort((a, b) => b.matchScore - a.matchScore)
                  .map((recommendation, i) => (
                    <RecommendationCard 
                      key={i}
                      title={recommendation.title}
                      image={recommendation.image}
                      description={recommendation.description}
                      earnings={recommendation.earnings}
                      riskLevel={recommendation.riskLevel}
                      playStyle={recommendation.playStyle}
                      matchScore={recommendation.matchScore}
                    />
                  ))
                }
              </div>
            </TabsContent>

            <TabsContent value="trending" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations
                  .slice()
                  .sort(() => Math.random() - 0.5)
                  .map((recommendation, i) => (
                    <RecommendationCard 
                      key={i}
                      title={recommendation.title}
                      image={recommendation.image}
                      description={recommendation.description}
                      earnings={recommendation.earnings}
                      riskLevel={recommendation.riskLevel}
                      playStyle={recommendation.playStyle}
                      matchScore={Math.floor(Math.random() * 15) + 70}
                    />
                  ))
                }
              </div>
            </TabsContent>

            <TabsContent value="highest" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendations
                  .sort((a, b) => {
                    const aMin = parseInt(a.earnings.split('-')[0]);
                    const bMin = parseInt(b.earnings.split('-')[0]);
                    return bMin - aMin;
                  })
                  .map((recommendation, i) => (
                    <RecommendationCard 
                      key={i}
                      title={recommendation.title}
                      image={recommendation.image}
                      description={recommendation.description}
                      earnings={recommendation.earnings}
                      riskLevel={recommendation.riskLevel}
                      playStyle={recommendation.playStyle}
                      matchScore={recommendation.matchScore}
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

export default RecommendationsPage;
