
import AppLayout from "@/components/layout/AppLayout";
import YieldCard from "@/components/restaking/YieldCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { TrendingUp, Wallet, CircleDollarSign } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";

const RestakingPage = () => {
  const yieldOpportunities = [
    {
      title: "Ethereum Restaking Pool",
      description: "Stake ETH and earn yield from multiple games",
      apy: "8.2%",
      tvl: "$12.5M",
      myStake: "$2,500",
      chains: ["ETH", "Arbitrum", "Optimism"],
      highlight: true
    },
    {
      title: "GameFi Yield Aggregator",
      description: "Balanced portfolio of gaming assets",
      apy: "12.8%",
      tvl: "$8.7M",
      chains: ["ETH", "BSC", "Polygon"],
      highlight: false
    },
    {
      title: "Play-to-Earn Basket",
      description: "Stake directly into popular P2E games",
      apy: "15.4%",
      tvl: "$5.2M",
      myStake: "$1,000",
      chains: ["Polygon", "Solana", "Base"],
      highlight: false
    },
    {
      title: "Metaverse Land Fund",
      description: "Generate yield from virtual real estate",
      apy: "9.6%",
      tvl: "$7.1M",
      chains: ["ETH", "Base", "Immutable X"],
      highlight: false
    },
    {
      title: "Gaming Governance Bundle",
      description: "Earn rewards through game governance",
      apy: "10.2%",
      tvl: "$4.3M",
      chains: ["ETH", "Avalanche", "Cosmos"],
      highlight: false
    },
    {
      title: "Next-Gen Game Incubator",
      description: "Early access to upcoming gaming platforms",
      apy: "18.5%",
      tvl: "$3.2M",
      chains: ["ETH", "Polygon", "Base"],
      highlight: false
    }
  ];

  return (
    <AppLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Yield Restaking</h1>
          <p className="text-muted-foreground">Generate yield by restaking your gaming assets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <StatCard 
            title="Your Total Staked" 
            value="$3,500" 
            icon={<Wallet className="h-6 w-6" />}
            change="$500 this month"
            isPositive={true}
          />
          <StatCard 
            title="Current Earnings" 
            value="$124.80" 
            icon={<CircleDollarSign className="h-6 w-6" />}
            change="$18.50 this week"
            isPositive={true}
          />
          <StatCard 
            title="Average APY" 
            value="9.8%" 
            icon={<TrendingUp className="h-6 w-6" />}
            change="1.2% this month"
            isPositive={true}
          />
        </div>

        <div className="mb-6">
          <Tabs defaultValue="all">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="all">All Strategies</TabsTrigger>
                <TabsTrigger value="staked">My Staked</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Filter</Button>
                <Button variant="outline" size="sm">Sort</Button>
              </div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yieldOpportunities.map((opportunity, i) => (
                  <YieldCard 
                    key={i}
                    title={opportunity.title}
                    description={opportunity.description}
                    apy={opportunity.apy}
                    tvl={opportunity.tvl}
                    myStake={opportunity.myStake}
                    chains={opportunity.chains}
                    highlight={opportunity.highlight}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="staked" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yieldOpportunities
                  .filter(opportunity => opportunity.myStake)
                  .map((opportunity, i) => (
                    <YieldCard 
                      key={i}
                      title={opportunity.title}
                      description={opportunity.description}
                      apy={opportunity.apy}
                      tvl={opportunity.tvl}
                      myStake={opportunity.myStake}
                      chains={opportunity.chains}
                      highlight={opportunity.highlight}
                    />
                  ))
                }
              </div>
            </TabsContent>

            <TabsContent value="recommended" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yieldOpportunities
                  .filter((_, i) => i === 0 || i === 2 || i === 5)
                  .map((opportunity, i) => (
                    <YieldCard 
                      key={i}
                      title={opportunity.title}
                      description={opportunity.description}
                      apy={opportunity.apy}
                      tvl={opportunity.tvl}
                      myStake={opportunity.myStake}
                      chains={opportunity.chains}
                      highlight={i === 0}
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

export default RestakingPage;
