
import AppLayout from "@/components/layout/AppLayout";
import StatCard from "@/components/dashboard/StatCard";
import GameCard from "@/components/dashboard/GameCard";
import { Gamepad, CircleDollarSign, Layers3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featuredGames = [
    {
      title: "Crypto Legends",
      image: "https://images.unsplash.com/photo-1594844221848-9a3ea585bf41?q=80&w=2574&auto=format&fit=crop",
      apy: "12.5%",
      rating: 4.8,
      playerCount: "24.5k",
      categories: ["RPG", "Strategy", "P2E"]
    },
    {
      title: "NFT Racers",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2670&auto=format&fit=crop",
      apy: "9.2%",
      rating: 4.5,
      playerCount: "18.2k",
      categories: ["Racing", "Action", "P2E"]
    },
    {
      title: "Meta Kingdoms",
      image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=2574&auto=format&fit=crop",
      apy: "14.8%",
      rating: 4.7,
      playerCount: "32.1k",
      categories: ["Strategy", "MMO", "Metaverse"]
    }
  ];

  return (
    <AppLayout>
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome to GameChain Oasis</h1>
          <p className="text-muted-foreground">Your cross-chain gaming asset hub</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard 
            title="Total Games" 
            value="128" 
            icon={<Gamepad className="h-6 w-6" />}
            change="12 this week"
            isPositive={true}
          />
          <StatCard 
            title="Total Staked Value" 
            value="$45.2M" 
            icon={<CircleDollarSign className="h-6 w-6" />}
            change="5.2% this week"
            isPositive={true}
          />
          <StatCard 
            title="NFT Trading Volume" 
            value="$12.4M" 
            icon={<Layers3 className="h-6 w-6" />}
            change="2.5% this week"
            isPositive={false}
          />
          <StatCard 
            title="Active Players" 
            value="245.8K" 
            icon={<Users className="h-6 w-6" />}
            change="8.7% this month"
            isPositive={true}
          />
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Featured Games</h2>
            <Button variant="link" className="text-game-primary">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game, i) => (
              <GameCard 
                key={i}
                title={game.title}
                image={game.image}
                apy={game.apy}
                rating={game.rating}
                playerCount={game.playerCount}
                categories={game.categories}
              />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Platform Analytics</h2>
            <Button variant="link" className="text-game-primary">View Details</Button>
          </div>
          
          <div className="game-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-medium">Platform Growth</h3>
                <p className="text-sm text-muted-foreground">Users and staking volume over time</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Weekly</Button>
                <Button variant="outline" size="sm" className="bg-muted">Monthly</Button>
                <Button variant="outline" size="sm">Yearly</Button>
              </div>
            </div>
            
            <div className="h-64 flex items-center justify-center border-t border-border/30 pt-4">
              <div className="text-muted-foreground text-sm">
                Analytics chart will render here with real data
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
