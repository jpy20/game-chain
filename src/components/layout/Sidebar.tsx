
import { Link, useLocation } from "react-router-dom";
import { Gamepad, TrendingUp, Layers3, Star, Users, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Dashboard", icon: <Gamepad className="w-5 h-5" /> },
    { path: "/restaking", label: "Yield Restaking", icon: <TrendingUp className="w-5 h-5" /> },
    { path: "/arbitrage", label: "NFT Arbitrage", icon: <Layers3 className="w-5 h-5" /> },
    { path: "/recommendations", label: "AI Recommendations", icon: <Star className="w-5 h-5" /> },
    { path: "/profiles", label: "Gamer Profiles", icon: <Users className="w-5 h-5" /> },
    { path: "/play-to-earn", label: "Play to Earn", icon: <Wallet className="w-5 h-5" /> }
  ];

  return (
    <div className="hidden md:flex flex-col w-64 bg-sidebar border-r border-border/40">
      <div className="p-4 border-b border-border/40">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-gradient-game flex items-center justify-center">
            <Gamepad className="text-white" />
          </div>
          <div>
            <h1 className="font-bold text-xl">GameChain</h1>
            <p className="text-xs text-muted-foreground">Oasis</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 py-4 px-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "nav-link",
                  location.pathname === item.path && "active"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-border/40">
        <div className="game-card p-4">
          <p className="text-sm font-medium mb-2">Total Staked Value</p>
          <p className="text-2xl font-bold text-gradient">$1,240,521</p>
          <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-gradient-game"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
