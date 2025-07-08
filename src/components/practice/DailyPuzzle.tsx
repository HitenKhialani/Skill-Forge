
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Star, Clock, Trophy } from 'lucide-react';
import { getDailyPuzzle } from '@/data/gameData';

interface DailyPuzzleProps {
  gameId: string;
  gameName: string;
  gameIcon: string;
}

const DailyPuzzle: React.FC<DailyPuzzleProps> = ({ gameId, gameName, gameIcon }) => {
  const [completed, setCompleted] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const puzzle = getDailyPuzzle(gameId);

  const handleStart = () => {
    console.log(`Starting daily puzzle for ${gameName}`);
    // Here you would implement the actual puzzle logic
    const startTime = Date.now();
    
    // Simulate puzzle completion after a delay
    setTimeout(() => {
      const endTime = Date.now();
      setTimeSpent(Math.round((endTime - startTime) / 1000));
      setCompleted(true);
    }, 3000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="glass-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-primary" />
          <span className="text-2xl">{gameIcon}</span>
          <div>
            <h3 className="text-foreground">Daily {gameName} Puzzle</h3>
            <p className="text-sm text-secondary-text font-normal">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge className={`${
            puzzle.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
            puzzle.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
            puzzle.difficulty === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {puzzle.difficulty}
          </Badge>
          <Badge className="bg-blue-500/20 text-blue-400">
            <Star className="w-3 h-3 mr-1" />
            {puzzle.xp} XP
          </Badge>
        </div>

        <div className="p-4 bg-muted/20 rounded-lg">
          <h4 className="font-semibold text-body-text mb-2">{puzzle.title}</h4>
          <p className="text-sm text-secondary-text">{puzzle.description}</p>
        </div>

        {completed ? (
          <div className="text-center p-4 bg-green-500/20 rounded-lg border border-green-500/30">
            <Trophy className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <h4 className="text-green-400 font-semibold mb-1">Puzzle Complete!</h4>
            <div className="flex items-center justify-center gap-4 text-sm text-secondary-text">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Time: {formatTime(timeSpent)}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                +{puzzle.xp} XP
              </span>
            </div>
            <Button 
              className="mt-3 bg-green-600 hover:bg-green-700" 
              size="sm"
              onClick={() => window.location.reload()}
            >
              Try Again Tomorrow
            </Button>
          </div>
        ) : (
          <Button 
            onClick={handleStart} 
            className="w-full bg-primary hover:bg-primary/80"
          >
            Start Daily Puzzle
          </Button>
        )}

        <div className="text-xs text-muted-foreground text-center">
          New puzzle available every day at midnight
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyPuzzle;
