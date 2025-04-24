
import AppLayout from "@/components/layout/AppLayout";
import ProfileCard from "@/components/profiles/ProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

const ProfilesPage = () => {
  const gamers = [
    {
      name: "CryptoSlayer",
      avatar: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdhbWVyfGVufDB8fDB8fHww",
      rank: "Diamond League",
      wins: 428,
      tradingVolume: "$52K",
      restaked: "$18K",
      badges: ["Tournament Winner", "Early Adopter", "NFT Collector"]
    },
    {
      name: "MetaQueen",
      avatar: "https://images.unsplash.com/photo-1581469933275-0f98301a3f74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGdhbWVyfGVufDB8fDB8fHww",
      rank: "Platinum League",
      wins: 312,
      tradingVolume: "$38K",
      restaked: "$12K",
      badges: ["Guild Leader", "Token Staker", "P2E Pro"]
    },
    {
      name: "ChainGamer",
      avatar: "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtZXJ8ZW58MHx8MHx8fDA%3D",
      rank: "Gold League",
      wins: 285,
      tradingVolume: "$24K",
      restaked: "$9K",
      badges: ["Metaverse Explorer", "NFT Trader"]
    },
    {
      name: "BlockchainWizard",
      avatar: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtZXJ8ZW58MHx8MHx8fDA%3D",
      rank: "Diamond League",
      wins: 502,
      tradingVolume: "$64K",
      restaked: "$23K",
      badges: ["Competition Winner", "Whale Investor", "Streamer"]
    },
    {
      name: "TokenHunter",
      avatar: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtZXJ8ZW58MHx8MHx8fDA%3D",
      rank: "Silver League",
      wins: 183,
      tradingVolume: "$15K",
      restaked: "$6K",
      badges: ["Rising Star", "Beta Tester"]
    },
    {
      name: "GameFiNinja",
      avatar: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWVyfGVufDB8fDB8fHww",
      rank: "Platinum League",
      wins: 347,
      tradingVolume: "$42K",
      restaked: "$15K",
      badges: ["Yield Farmer", "Game Developer", "DAO Member"]
    }
  ];

  return (
    <AppLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Gamer Profiles</h1>
          <p className="text-muted-foreground">Cross-chain identity NFTs and player leaderboards</p>
        </div>

        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search gamers by name, badge, or game..." 
                className="pl-9"
              />
            </div>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </div>
          
          <Tabs defaultValue="all">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="all">All Gamers</TabsTrigger>
                <TabsTrigger value="top">Top Performers</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Sort: Wins</Button>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gamers.map((gamer, i) => (
                  <ProfileCard 
                    key={i}
                    name={gamer.name}
                    avatar={gamer.avatar}
                    rank={gamer.rank}
                    wins={gamer.wins}
                    tradingVolume={gamer.tradingVolume}
                    restaked={gamer.restaked}
                    badges={gamer.badges}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="top" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gamers
                  .sort((a, b) => b.wins - a.wins)
                  .slice(0, 3)
                  .map((gamer, i) => (
                    <ProfileCard 
                      key={i}
                      name={gamer.name}
                      avatar={gamer.avatar}
                      rank={gamer.rank}
                      wins={gamer.wins}
                      tradingVolume={gamer.tradingVolume}
                      restaked={gamer.restaked}
                      badges={gamer.badges}
                    />
                  ))
                }
              </div>
            </TabsContent>

            <TabsContent value="recommended" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gamers
                  .filter((_, i) => i === 1 || i === 3 || i === 5)
                  .map((gamer, i) => (
                    <ProfileCard 
                      key={i}
                      name={gamer.name}
                      avatar={gamer.avatar}
                      rank={gamer.rank}
                      wins={gamer.wins}
                      tradingVolume={gamer.tradingVolume}
                      restaked={gamer.restaked}
                      badges={gamer.badges}
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

export default ProfilesPage;
