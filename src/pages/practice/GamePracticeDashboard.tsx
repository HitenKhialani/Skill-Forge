
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Target, Clock, Star, Trophy, TrendingUp, Brain, Zap } from 'lucide-react';
import { getGameById } from '@/data/gameData';
import InteractiveBoard from '@/components/interactive/InteractiveBoard';

const GamePracticeDashboard = () => {
  const { gameId } = useParams();
  const game = getGameById(gameId || '');
  
  const [activeTab, setActiveTab] = useState('skill-builder');
  const [currentPuzzle, setCurrentPuzzle] = useState(1);
  const [score, setScore] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);

  // Mock practice data
  const practiceStats = {
    puzzlesSolved: 47,
    successRate: 87,
    bestTime: '2:34',
    currentStreak: 12
  };

  const puzzleData = {
    'skill-builder': {
      title: 'Skill Builder',
      description: 'Learn fundamentals with guided hints',
      difficulty: 'Easy',
      puzzles: 50,
      hintsAllowed: 5,
      timeLimit: null,
      color: 'bg-green-500/20 text-green-400'
    },
    'intermediate-drills': {
      title: 'Intermediate Drills',
      description: 'Practice with limited assistance',
      difficulty: 'Medium',
      puzzles: 30,
      hintsAllowed: 2,
      timeLimit: 10,
      color: 'bg-yellow-500/20 text-yellow-400'
    },
    'timed-challenge': {
      title: 'Timed Challenge',
      description: 'Race against the clock',
      difficulty: 'Hard',
      puzzles: 20,
      hintsAllowed: 0,
      timeLimit: 5,
      color: 'bg-red-500/20 text-red-400'
    }
  };

  const currentPuzzleData = puzzleData[activeTab as keyof typeof puzzleData];

  const handleNextPuzzle = () => {
    setCurrentPuzzle(prev => prev + 1);
    setScore(prev => prev + 100);
    setHintsUsed(0);
  };

  const handleUseHint = () => {
    if (hintsUsed < currentPuzzleData.hintsAllowed) {
      setHintsUsed(prev => prev + 1);
    }
  };

  const getBoardType = (gameId: string) => {
    const boardTypes: { [key: string]: string } = {
      chess: 'chess-board',
      sudoku: 'sudoku-grid',
      'rubiks-cube': 'rubiks-cube',
      go: 'go-board',
      poker: 'poker-table'
    };
    return boardTypes[gameId] || 'chess-board';
  };

  if (!game) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="glass-card border-border p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Game Not Found</h2>
          <Link to="/practice">
            <Button>Return to Practice</Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
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
            <h1 className="text-2xl font-bold section-gradient">GameMastery</h1>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{game.icon}</div>
          <h1 className="text-4xl font-bold mb-2">{game.name} Practice Dashboard</h1>
          <p className="text-xl text-muted-foreground">Master {game.name} through structured practice</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass-card border-border">
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{practiceStats.puzzlesSolved}</div>
              <p className="text-sm text-muted-foreground">Puzzles Solved</p>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-border">
            <CardContent className="p-4 text-center">
              <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{practiceStats.successRate}%</div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-border">
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{practiceStats.bestTime}</div>
              <p className="text-sm text-muted-foreground">Best Time</p>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-border">
            <CardContent className="p-4 text-center">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">{practiceStats.currentStreak}</div>
              <p className="text-sm text-muted-foreground">Current Streak</p>
            </CardContent>
          </Card>
        </div>

        {/* Practice Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 glass-card">
            <TabsTrigger value="skill-builder" className="data-[state=active]:bg-green-500/20">
              <Brain className="w-4 h-4 mr-2" />
              Skill Builder
            </TabsTrigger>
            <TabsTrigger value="intermediate-drills" className="data-[state=active]:bg-yellow-500/20">
              <Target className="w-4 h-4 mr-2" />
              Intermediate
            </TabsTrigger>
            <TabsTrigger value="timed-challenge" className="data-[state=active]:bg-red-500/20">
              <Clock className="w-4 h-4 mr-2" />
              Timed Challenge
            </TabsTrigger>
          </TabsList>

          {Object.entries(puzzleData).map(([key, data]) => (
            <TabsContent key={key} value={key} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Practice Area */}
                <div className="lg:col-span-2">
                  <Card className="glass-card border-border">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            <span>{data.title}</span>
                            <Badge className={data.color}>{data.difficulty}</Badge>
                          </CardTitle>
                          <p className="text-muted-foreground">{data.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Puzzle {currentPuzzle} of {data.puzzles}</p>
                          <div className="w-32 bg-muted/20 rounded-full h-2 mt-1">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${(currentPuzzle / data.puzzles) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <InteractiveBoard
                        gameId={game.id}
                        type={getBoardType(game.id) as any}
                        title={`${data.title} - Puzzle ${currentPuzzle}`}
                        description={`Solve this ${data.difficulty.toLowerCase()} ${game.name} puzzle`}
                      />
                      
                      <div className="mt-6 flex gap-4">
                        <Button 
                          onClick={handleNextPuzzle}
                          className="flex-1 bg-green-600 hover:bg-green-700"
                        >
                          Next Puzzle
                        </Button>
                        
                        {data.hintsAllowed > 0 && (
                          <Button 
                            onClick={handleUseHint}
                            disabled={hintsUsed >= data.hintsAllowed}
                            variant="outline"
                            className="border-border"
                          >
                            Hint ({data.hintsAllowed - hintsUsed} left)
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Current Session Stats */}
                  <Card className="glass-card border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Session Stats
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Score:</span>
                        <span className="font-bold text-primary">{score}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Puzzles:</span>
                        <span className="font-bold">{currentPuzzle - 1}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hints Used:</span>
                        <span className="font-bold">{hintsUsed}</span>
                      </div>
                      {data.timeLimit && (
                        <div className="flex justify-between">
                          <span>Time Limit:</span>
                          <span className="font-bold text-orange-400">{data.timeLimit} min</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Progress Tracking */}
                  <Card className="glass-card border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        Progress Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Skill Builder</span>
                          <span>15/50</span>
                        </div>
                        <div className="w-full bg-muted/20 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }} />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Intermediate</span>
                          <span>8/30</span>
                        </div>
                        <div className="w-full bg-muted/20 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '27%' }} />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Timed Challenge</span>
                          <span>3/20</span>
                        </div>
                        <div className="w-full bg-muted/20 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: '15%' }} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default GamePracticeDashboard;
