
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Star, TrendingUp, Users, Brain, Zap } from 'lucide-react';

interface PracticeModule {
  name: string;
  difficulty: string;
  time: string;
  xp: string;
  description: string;
}

interface PracticeModuleCardProps {
  module: PracticeModule;
  gameIcon: string;
  onStart: (moduleName: string) => void;
}

const PracticeModuleCard: React.FC<PracticeModuleCardProps> = ({ 
  module, 
  gameIcon, 
  onStart 
}) => {
  const getModuleIcon = (name: string) => {
    if (name.includes('Daily')) return <Calendar className="w-4 h-4" />;
    if (name.includes('Quick')) return <Zap className="w-4 h-4" />;
    if (name.includes('Tournament')) return <Users className="w-4 h-4" />;
    if (name.includes('AI')) return <Brain className="w-4 h-4" />;
    if (name.includes('Speed')) return <TrendingUp className="w-4 h-4" />;
    return <Star className="w-4 h-4" />;
  };

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes('Beginner') || difficulty.includes('Easy')) 
      return 'bg-green-500/20 text-green-400';
    if (difficulty.includes('Intermediate') || difficulty.includes('Mixed') || difficulty.includes('All'))
      return 'bg-yellow-500/20 text-yellow-400';
    if (difficulty.includes('Advanced'))
      return 'bg-orange-500/20 text-orange-400';
    if (difficulty.includes('Expert'))
      return 'bg-red-500/20 text-red-400';
    return 'bg-blue-500/20 text-blue-400';
  };

  return (
    <Card className="glass-card border-border hover:border-primary/30 transition-colors">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          {getModuleIcon(module.name)}
          <span className="text-xl">{gameIcon}</span>
          <span className="text-body-text">{module.name}</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge className={getDifficultyColor(module.difficulty)}>
            {module.difficulty}
          </Badge>
          <Badge variant="outline" className="border-border text-secondary-text">
            <Clock className="w-3 h-3 mr-1" />
            {module.time}
          </Badge>
          <Badge variant="outline" className="border-border text-secondary-text">
            <Star className="w-3 h-3 mr-1" />
            {module.xp}
          </Badge>
        </div>

        <p className="text-sm text-secondary-text leading-relaxed">
          {module.description}
        </p>

        <Button 
          onClick={() => onStart(module.name)}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          Start Practice
        </Button>
      </CardContent>
    </Card>
  );
};

// Add missing Calendar import
import { Calendar } from 'lucide-react';

export default PracticeModuleCard;
