
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Star, Clock } from 'lucide-react';

interface QuickStartButtonProps {
  gameId: string;
  gameName: string;
  gameIcon: string;
  onStart?: () => void;
}

const QuickStartButton: React.FC<QuickStartButtonProps> = ({ 
  gameId, 
  gameName, 
  gameIcon, 
  onStart 
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleQuickStart = async () => {
    setIsLoading(true);
    console.log(`Quick starting ${gameName} practice session`);
    
    // Simulate loading time for generating random puzzle
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (onStart) {
      onStart();
    }
    
    setIsLoading(false);
  };

  return (
    <Button 
      onClick={handleQuickStart}
      disabled={isLoading}
      className="w-full h-auto p-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-200"
    >
      <div className="flex items-center gap-3 w-full">
        <div className="flex items-center gap-2">
          <Zap className={`w-5 h-5 ${isLoading ? 'animate-pulse' : ''}`} />
          <span className="text-2xl">{gameIcon}</span>
        </div>
        
        <div className="flex-1 text-left">
          <div className="font-semibold">Quick Start</div>
          <div className="text-sm opacity-90">
            {isLoading ? 'Generating puzzle...' : `Instant ${gameName} challenge`}
          </div>
        </div>
        
        <div className="flex flex-col gap-1">
          <Badge variant="secondary" className="text-xs bg-white/20">
            <Clock className="w-3 h-3 mr-1" />
            2-5 min
          </Badge>
          <Badge variant="secondary" className="text-xs bg-white/20">
            <Star className="w-3 h-3 mr-1" />
            20-80 XP
          </Badge>
        </div>
      </div>
    </Button>
  );
};

export default QuickStartButton;
