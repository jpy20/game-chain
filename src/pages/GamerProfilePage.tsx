
import { useParams } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, TrendingUp, Wallet } from "lucide-react";

const GamerProfilePage = () => {
  const { id } = useParams();

  // This would be fetched from your backend
  const profileData = {
    name: "CryptoSlayer",
    avatar: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdhbWVyfGVufDB8fDB8fHww",
    rank: "Diamond League",
    wins: 428,
    tradingVolume: "$52K",
    restaked: "$18K",
    badges: ["Tournament Winner", "Early Adopter", "NFT Collector"]
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-start gap-6">
          <img 
            src={profileData.avatar} 
            alt={profileData.name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold">{profileData.name}</h1>
            <p className="text-muted-foreground">{profileData.rank}</p>
            <div className="flex gap-2 mt-2">
              {profileData.badges.map((badge) => (
                <span key={badge} className="bg-muted px-2 py-1 rounded-full text-xs">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="flex items-center gap-4 pt-6">
              <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Trophy className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Wins</p>
                <p className="text-2xl font-bold">{profileData.wins}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 pt-6">
              <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Trading Volume</p>
                <p className="text-2xl font-bold">{profileData.tradingVolume}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 pt-6">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Wallet className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Restaked</p>
                <p className="text-2xl font-bold">{profileData.restaked}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="activity">
          <TabsList>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="nfts">NFTs</TabsTrigger>
            <TabsTrigger value="staking">Staking</TabsTrigger>
          </TabsList>
          <TabsContent value="activity" className="space-y-4">
            {/* Activity timeline would go here */}
          </TabsContent>
          <TabsContent value="nfts">
            {/* NFT collection would go here */}
          </TabsContent>
          <TabsContent value="staking">
            {/* Staking history would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default GamerProfilePage;
