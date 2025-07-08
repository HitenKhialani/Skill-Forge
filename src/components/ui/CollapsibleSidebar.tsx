import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  PanelLeft, 
  Home, 
  BookOpen, 
  Target, 
  Users, 
  User, 
  Trophy,
  Clock,
  Brain,
  Zap,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CollapsibleSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const CollapsibleSidebar: React.FC<CollapsibleSidebarProps> = ({ isOpen, onToggle }) => {
  const location = useLocation();
  
  const menuItems = [
    { 
      icon: Home, 
      label: 'Dashboard', 
      path: '/',
      subItems: []
    },
    { 
      icon: BookOpen, 
      label: 'Learn', 
      path: '/learn',
      subItems: []
    },
    { 
      icon: Target, 
      label: 'Practice', 
      path: '/practice',
      subItems: [
        { label: 'Daily Challenges', path: '/practice/daily-challenges', icon: Trophy },
        { label: 'Quick Start', path: '/practice/quick-start', icon: Clock },
        { label: 'AI Practice', path: '/practice/ai-practice', icon: Brain },
        { label: 'Analyze Games', path: '/practice/analyze', icon: Zap },
        { label: 'Tournament', path: '/practice/tournament', icon: Trophy }
      ]
    },
    { 
      icon: Users, 
      label: 'Community', 
      path: '/community',
      subItems: []
    },
    { 
      icon: User, 
      label: 'Profile', 
      path: '/profile',
      subItems: []
    }
  ];

  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 h-full bg-background border-r border-border z-50 transition-transform duration-300 ease-in-out",
        "w-80 shadow-xl",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
            SkillForge
          </Link>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onToggle}
            className="hover:bg-accent"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <div key={item.path}>
              <Link
                to={item.path}
                onClick={item.subItems.length === 0 ? onToggle : undefined}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  "hover:bg-accent hover:text-primary",
                  isActive(item.path) 
                    ? "bg-primary text-background font-medium" 
                    : "text-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
              
              {/* Sub-items */}
              {item.subItems.length > 0 && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      onClick={onToggle}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm",
                        "hover:bg-accent hover:text-primary",
                        isActive(subItem.path) 
                          ? "bg-accent text-primary font-medium" 
                          : "text-muted-foreground"
                      )}
                    >
                      <subItem.icon className="w-4 h-4" />
                      <span>{subItem.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        {/* Footer */}
        <div className="absolute bottom-4 left-4 right-4 p-4 glass-card rounded-lg">
          <div className="text-center">
            <div className="text-sm font-medium text-foreground">Level 8</div>
            <div className="text-xs text-muted-foreground">1,120 XP • 3 day streak</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollapsibleSidebar;