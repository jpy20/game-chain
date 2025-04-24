
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
        <footer className="py-4 px-6 text-center text-sm text-muted-foreground border-t border-border/30">
          <p>© 2025 GameChain Oasis. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AppLayout;
