
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Gamepad, Menu, Bell, ChevronDown, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { navItems } from "./Sidebar";

const Navbar = () => {
  return (
    <header className="border-b border-border/40 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <div className="p-4 border-b border-border/40">
                <div className="flex items-center gap-2">
                  <Gamepad className="text-game-primary h-5 w-5" />
                  <span className="font-bold">GameChain Oasis</span>
                </div>
              </div>
              <nav className="flex-1 py-4 px-2">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="nav-link"
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Button className="nav-link w-full justify-start" variant="ghost">
                      <Wallet className="w-5 h-5" />
                      <span>Connect Wallet</span>
                    </Button>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="md:hidden flex items-center gap-2">
            <Gamepad className="text-game-primary h-5 w-5" />
            <span className="font-bold">GameChain Oasis</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-game-accent rounded-full"></span>
            </Button>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-game flex items-center justify-center">
                  <span className="text-white text-sm font-medium">GC</span>
                </div>
                <span className="hidden md:inline-block">GameMaster</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/profile" className="flex w-full">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/settings" className="flex w-full">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
