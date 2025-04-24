
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  change?: string;
  isPositive?: boolean;
  className?: string;
}

const StatCard = ({ title, value, icon, change, isPositive = true, className }: StatCardProps) => {
  return (
    <Card className={cn("game-stat-card", className)}>
      <CardContent className="p-0 flex items-center gap-4">
        <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center text-game-primary">
          {icon}
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          {change && (
            <p className={cn(
              "text-xs",
              isPositive ? "text-green-500" : "text-red-500"
            )}>
              {isPositive ? "↑" : "↓"} {change}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
