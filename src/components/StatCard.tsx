
import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  color?: 'default' | 'teal' | 'darkblue' | 'warning' | 'danger';
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatCard = ({ 
  title, 
  value, 
  icon, 
  description,
  color = 'default',
  trend
}: StatCardProps) => {
  const colorMap = {
    default: "bg-white",
    teal: "bg-surveyspark-teal text-white",
    darkblue: "bg-surveyspark-darkblue text-white",
    warning: "bg-surveyspark-warning text-white",
    danger: "bg-surveyspark-danger text-white",
  };
  
  const iconColorMap = {
    default: "bg-surveyspark-lightblue text-surveyspark-darkblue",
    teal: "bg-white/20 text-white",
    darkblue: "bg-white/20 text-white",
    warning: "bg-white/20 text-white",
    danger: "bg-white/20 text-white",
  };
  
  return (
    <Card className={cn(
      "flex flex-col h-full overflow-hidden",
      colorMap[color]
    )}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className={cn(
              "text-sm font-medium",
              color === 'default' ? "text-muted-foreground" : "text-white/80"
            )}>
              {title}
            </p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <div className={cn(
            "p-3 rounded-full",
            iconColorMap[color]
          )}>
            {icon}
          </div>
        </div>
        
        {description && (
          <p className={cn(
            "text-sm",
            color === 'default' ? "text-muted-foreground" : "text-white/80"
          )}>
            {description}
          </p>
        )}
        
        {trend && (
          <div className="flex items-center mt-2">
            <span className={trend.isPositive ? "text-green-500" : "text-red-500"}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
            </span>
            <span className={cn(
              "text-xs ml-1",
              color === 'default' ? "text-muted-foreground" : "text-white/80"
            )}>
              vs last month
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatCard;
