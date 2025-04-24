
import AppLayout from "@/components/layout/AppLayout";
import PlayToEarnCard from "@/components/play/PlayToEarnCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const PlayToEarnPage = () => {
  const playToEarnGames = [
    {
      title: "Crypto Legends",
      image: "https://images.unsplash.com/photo-1594844221848-9a3ea585bf41?q=80&w=2574&auto=format&fit=crop",
      description: "Strategic card game with daily quests and ranked modes.",
      requiredStake: "100 CLGT ($50)",
      potentialEarnings: "$5-15 daily",
      tokenSymbol: "CLGT",
      tokenLogo: "https://placehold.co/200",
      chains: ["ETH", "Polygon"],
      playerCount: "24.5k"
    },
    {
      title: "NFT Racers",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2670&auto=format&fit=crop",
      description: "Race to earn by competing in daily tournaments and challenges.",
      requiredStake: "1 Car NFT (~$120)",
      potentialEarnings: "$8-20 daily",
      tokenSymbol: "RACE",
      tokenLogo: "https://placehold.co/200",
      chains: ["ETH", "Arbitrum"],
      playerCount: "18.2k"
    },
    {
      title: "Meta Kingdoms",
      image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2574&auto=format&fit=crop",
      description: "Build your kingdom, battle enemies, and earn through governance.",
      requiredStake: "500 KING ($200)",
      potentialEarnings: "$10-30 daily",
      tokenSymbol: "KING",
      tokenLogo: "https://placehold.co/200",
      chains: ["ETH", "Base", "Optimism"],
      playerCount: "32.1k"
    },
    {
      title: "Pixel Miners",
      image: "https://images.unsplash.com/photo-1518709911915-712d5fd04677?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Mine resources in a virtual world and craft valuable NFTs.",
      requiredStake: "200 MINE ($80)",
      potentialEarnings: "$4-12 daily",
      tokenSymbol: "MINE",
      tokenLogo: "https://placehold.co/200",
      chains: ["Polygon", "Immutable X"],
      playerCount: "15.8k"
    },
    {
      title: "Cyber Hunters",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Team-based shooter with battle passes and tournament rewards.",
      requiredStake: "300 HUNT ($150)",
      potentialEarnings: "$7-25 daily",
      tokenSymbol: "HUNT",
      tokenLogo: "https://placehold.co/200",
      chains: ["ETH", "Polygon"],
      playerCount: "28.3k"
    },
    {
      title: "DeFi Pets",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Collect, breed and battle fantasy creatures in a vibrant world.",
      requiredStake: "1 Pet NFT (~$70)",
      potentialEarnings: "$3-10 daily",
      tokenSymbol: "DPET",
      tokenLogo: "https://placehold.co/200",
      chains: ["BSC", "Polygon"],
      playerCount: "12.6k"
    }
  ];

  return (
    <AppLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Play to Earn</h1>
          <p className="text-muted-foreground">Stake tokens to access premium gaming experiences</p>
        </div>

        <div className="game-card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-bold mb-3">Your Play-to-Earn Portfolio</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Currently Staked</p>
                  <p className="text-2xl font-bold text-gradient">$420</p>
                  <p className="text-xs text-muted-foreground mt-1">Across 2 games</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Earnings (30d)</p>
                  <p className="text-2xl font-bold text-gradient">$186</p>
                  <p className="text-xs text-green-500 mt-1">↑ 12.4% vs previous period</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-muted/50 rounded-lg p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-bold mb-1">Quick Stake</h3>
                <p className="text-xs text-muted-foreground mb-4">Instantly stake into trending games</p>
              </div>
              <Button className="game-button-primary w-full">Stake Now</Button>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search games by name, token, or chain..." 
                className="pl-9"
              />
            </div>
            <Button className="game-button-primary">Explore Games</Button>
          </div>
          
          <Tabs defaultValue="all">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="all">All Games</TabsTrigger>
                <TabsTrigger value="staked">Your Staked</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Filter</Button>
                <Button variant="outline" size="sm">Sort</Button>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {playToEarnGames.map((game, i) => (
                  <PlayToEarnCard 
                    key={i}
                    title={game.title}
                    image={game.image}
                    description={game.description}
                    requiredStake={game.requiredStake}
                    potentialEarnings={game.potentialEarnings}
                    tokenSymbol={game.tokenSymbol}
                    tokenLogo={game.tokenLogo}
                    chains={game.chains}
                    playerCount={game.playerCount}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="staked" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {playToEarnGames
                  .filter((_, i) => i === 0 || i === 2)
                  .map((game, i) => (
                    <PlayToEarnCard 
                      key={i}
                      title={game.title}
                      image={game.image}
                      description={game.description}
                      requiredStake={game.requiredStake}
                      potentialEarnings={game.potentialEarnings}
                      tokenSymbol={game.tokenSymbol}
                      tokenLogo={game.tokenLogo}
                      chains={game.chains}
                      playerCount={game.playerCount}
                    />
                  ))
                }
              </div>
            </TabsContent>

            <TabsContent value="recommended" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {playToEarnGames
                  .filter((_, i) => i === 1 || i === 2 || i === 4)
                  .map((game, i) => (
                    <PlayToEarnCard 
                      key={i}
                      title={game.title}
                      image={game.image}
                      description={game.description}
                      requiredStake={game.requiredStake}
                      potentialEarnings={game.potentialEarnings}
                      tokenSymbol={game.tokenSymbol}
                      tokenLogo={game.tokenLogo}
                      chains={game.chains}
                      playerCount={game.playerCount}
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

export default PlayToEarnPage;
