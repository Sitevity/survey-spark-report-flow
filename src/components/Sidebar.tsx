
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { 
  Menu, 
  FileText, 
  BarChart, 
  User, 
  Users, 
  Home, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
}

const NavItem = ({ to, icon, label, collapsed }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        "flex items-center gap-3 p-3 rounded-md transition-all",
        "hover:bg-sidebar-accent",
        isActive 
          ? "bg-sidebar-accent text-white" 
          : "text-sidebar-foreground/80"
      )}
    >
      <div>{icon}</div>
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn(
      "h-screen bg-sidebar sticky top-0 left-0 transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex flex-col h-full">
        <div className="p-4 flex justify-between items-center border-b border-sidebar-border">
          {!collapsed && <Logo />}
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-sidebar-accent"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Menu size={20} />
          </Button>
        </div>
        
        <div className="p-2 flex-1 overflow-y-auto">
          <div className="space-y-1">
            <NavItem to="/dashboard" icon={<Home size={20} />} label="Dashboard" collapsed={collapsed} />
            <NavItem to="/surveys" icon={<FileText size={20} />} label="Surveys" collapsed={collapsed} />
            <NavItem to="/reports" icon={<BarChart size={20} />} label="Reports" collapsed={collapsed} />
            <NavItem to="/profile" icon={<User size={20} />} label="Profile" collapsed={collapsed} />
            <NavItem to="/users" icon={<Users size={20} />} label="Users" collapsed={collapsed} />
            <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" collapsed={collapsed} />
          </div>
        </div>
        
        <div className="p-4 border-t border-sidebar-border">
          <Button 
            variant="ghost" 
            className={cn(
              "w-full justify-start text-sidebar-foreground/80 hover:bg-sidebar-accent",
              collapsed ? "px-2" : ""
            )}
          >
            <LogOut size={20} />
            {!collapsed && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
