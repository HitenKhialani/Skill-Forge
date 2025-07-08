
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Trophy, Clock, Star, Flame, Target, CheckCircle } from 'lucide-react';

interface DailyChallenge {
  id: string;
  gameId: string;
  gameName: string;
  gameIcon: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  timeLimit: number; // in minutes
  xpReward: number;
  participants: number;
  description: string;
}

const DailyChallenges = () => {
  const navigate = useNavigate();
  const [challenges] = useState<DailyChallenge[]>([
    {
      id: 'chess-daily-1',
      gameId: 'chess',
      gameName: 'Chess',
      gameIcon: '♛',
      title: 'Mate in 3 Moves',
      difficulty: 'Hard',
      timeLimit: 15,
      xpReward: 500,
      participants: 1247,
      description: 'Find the winning combination to checkmate in exactly 3 moves'
    },
    {
      id: 'sudoku-daily-1',
      gameId: 'sudoku',
      gameName: 'Sudoku',
      gameIcon: '9',
      title: 'Expert Grid Challenge',
      difficulty: 'Expert',
      timeLimit: 25,
      xpReward: 750,
      participants: 892,
      description: 'Solve this challenging sudoku grid with minimal given numbers'
    },
    {
      id: 'rubiks-daily-1',
      gameId: 'rubiks-cube',
      gameName: "Rubik's Cube",
      gameIcon: '🧩',
      title: 'Speed Solve Challenge',
      difficulty: 'Medium',
      timeLimit: 10,
      xpReward: 400,
      participants: 567,
      description: 'Solve the cube configuration as quickly as possible'
    }
  ]);

  const [dailyStreak, setDailyStreak] = useState(4);
  const [todayCompleted, setTodayCompleted] = useState(1);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Hard': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Expert': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const handleJoinChallenge = (challenge: DailyChallenge) => {
    navigate(`/practice/daily-challenge/${challenge.id}`, { state: { challenge } });
  };

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
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Daily Challenges
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take on today's most challenging puzzles. Complete challenges to build your daily streak and earn exclusive rewards.
          </p>
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card border-border">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Flame className="w-8 h-8 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-orange-400 mb-1">{dailyStreak}</div>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-border">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-1">{todayCompleted}/3</div>
              <p className="text-sm text-muted-foreground">Today's Progress</p>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-border">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">2,450</div>
              <p className="text-sm text-muted-foreground">Total XP</p>
            </CardContent>
          </Card>
        </div>

        {/* Today's Challenges */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Today's Featured Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <Card key={challenge.id} className="glass-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-3xl">{challenge.gameIcon}</div>
                    <Badge className={getDifficultyColor(challenge.difficulty)}>
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{challenge.gameName}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {challenge.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span>{challenge.timeLimit} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary" />
                      <span>{challenge.xpReward} XP</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Target className="w-3 h-3" />
                    <span>{challenge.participants} players joined today</span>
                  </div>
                  
                  <Button 
                    onClick={() => handleJoinChallenge(challenge)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                  >
                    Join Challenge
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Challenge History */}
        <Card className="glass-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Recent Completions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 glass-card rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">♛</span>
                  <div>
                    <p className="font-medium">Chess Tactics Puzzle</p>
                    <p className="text-sm text-muted-foreground">Completed 2 days ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-500/20 text-green-400">+350 XP</Badge>
                  <p className="text-xs text-muted-foreground mt-1">7:23 time</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 glass-card rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">9</span>
                  <div>
                    <p className="font-medium">Sudoku Speed Challenge</p>
                    <p className="text-sm text-muted-foreground">Completed 3 days ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-500/20 text-green-400">+425 XP</Badge>
                  <p className="text-xs text-muted-foreground mt-1">12:45 time</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DailyChallenges;
