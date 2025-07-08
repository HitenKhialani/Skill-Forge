
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Trophy, Target } from 'lucide-react';
import { getGameById } from '@/data/gameData';
import DailyPuzzle from '@/components/practice/DailyPuzzle';
import QuickStartButton from '@/components/practice/QuickStartButton';
import PracticeModuleCard from '@/components/practice/PracticeModuleCard';

const GamePractice = () => {
  const { gameId } = useParams();
  const [activeSession, setActiveSession] = useState<string | null>(null);
  const game = getGameById(gameId || '');

  if (!game) {
    return (
      <div className="min-h-screen bg-background text-body-text flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Game Not Found</h1>
          <Link to="/practice">
            <Button>Return to Practice</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleModuleStart = (moduleName: string) => {
    console.log(`Starting ${moduleName} for ${game.name}`);
    setActiveSession(moduleName);
    // Here you would implement the specific practice logic for each module
  };

  const handleQuickStart = () => {
    console.log(`Quick start for ${game.name}`);
    setActiveSession('Quick Start');
  };

  return (
    <div className="min-h-screen bg-background text-body-text practice-theme">
      {/* Navigation */}
      <nav className="border-b border-border glass-card backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/practice" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Practice</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold section-gradient">
              GameMastery
            </h1>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Game Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{game.icon}</div>
          <h1 className="text-4xl font-bold mb-2 text-foreground">{game.name} Practice</h1>
          <p className="text-xl text-secondary-text max-w-2xl mx-auto">
            {game.description}
          </p>
        </div>

        {activeSession ? (
          <div className="max-w-2xl mx-auto">
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-400" />
                  Active Session: {activeSession}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center py-8">
                <div className="text-6xl mb-4">{game.icon}</div>
                <p className="text-secondary-text mb-6">
                  Practice session is loading...
                </p>
                <Button 
                  onClick={() => setActiveSession(null)}
                  variant="outline"
                  className="border-border"
                >
                  End Session
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Practice Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Start */}
              <div className="mb-6">
                <QuickStartButton
                  gameId={game.id}
                  gameName={game.name}
                  gameIcon={game.icon}
                  onStart={handleQuickStart}
                />
              </div>

              {/* Practice Modules */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {game.practiceModules.slice(1).map((module, index) => (
                  <PracticeModuleCard
                    key={index}
                    module={module}
                    gameIcon={game.icon}
                    onStart={handleModuleStart}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Daily Puzzle */}
              <DailyPuzzle
                gameId={game.id}
                gameName={game.name}
                gameIcon={game.icon}
              />

              {/* Game Stats */}
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    Your Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">1,247</div>
                    <p className="text-sm text-secondary-text">Total XP Earned</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">23</div>
                    <p className="text-sm text-secondary-text">Practice Sessions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">4</div>
                    <p className="text-sm text-secondary-text">Daily Streak</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePractice;
