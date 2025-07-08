
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Brain, Target, Zap, ArrowLeft, Play, Settings, Trophy } from 'lucide-react';

const aiOpponents = [
  { 
    id: 'beginner-ai', 
    name: 'Training Bot', 
    level: 'Beginner', 
    description: 'Perfect for learning basics', 
    winRate: 85, 
    games: 1247,
    strength: 1200
  },
  { 
    id: 'intermediate-ai', 
    name: 'Challenge Bot', 
    level: 'Intermediate', 
    description: 'Balanced opponent for improvement', 
    winRate: 65, 
    games: 2891,
    strength: 1600
  },
  { 
    id: 'advanced-ai', 
    name: 'Master Bot', 
    level: 'Advanced', 
    description: 'Tough competition for experts', 
    winRate: 35, 
    games: 567,
    strength: 2000
  },
  { 
    id: 'adaptive-ai', 
    name: 'Adaptive AI', 
    level: 'Adaptive', 
    description: 'Adjusts to your skill level', 
    winRate: 55, 
    games: 3456,
    strength: 'Variable'
  }
];

const practiceGames = [
  { id: 'chess', name: 'Chess', icon: '♛', available: true },
  { id: 'checkers', name: 'Checkers', icon: '🔴', available: true },
  { id: 'go', name: 'Go', icon: '⚫', available: true },
  { id: 'backgammon', name: 'Backgammon', icon: '🎲', available: true },
  { id: 'othello', name: 'Othello', icon: '⚪', available: false },
  { id: 'connect4', name: 'Connect 4', icon: '🔵', available: false }
];

const AIPractice = () => {
  const [selectedGame, setSelectedGame] = useState('chess');
  const [selectedAI, setSelectedAI] = useState('intermediate-ai');

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/practice" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Practice</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              GameMastery
            </h1>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            AI Practice Arena
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Train against intelligent AI opponents that adapt to your skill level and provide personalized challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Selection */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Select Game</h2>
            <div className="space-y-3">
              {practiceGames.map((game) => (
                <button
                  key={game.id}
                  onClick={() => setSelectedGame(game.id)}
                  disabled={!game.available}
                  className={`w-full p-4 rounded-lg border transition-all ${
                    selectedGame === game.id
                      ? 'border-blue-500 bg-blue-500/20'
                      : game.available
                        ? 'border-slate-600 bg-slate-700/50 hover:border-slate-500'
                        : 'border-slate-700 bg-slate-800/30 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{game.icon}</div>
                    <div className="text-left">
                      <div className="font-semibold">{game.name}</div>
                      {!game.available && (
                        <div className="text-xs text-slate-400">Coming Soon</div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* AI Opponent Selection */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Choose AI Opponent</h2>
            <div className="space-y-4">
              {aiOpponents.map((ai) => (
                <Card 
                  key={ai.id}
                  className={`cursor-pointer transition-all ${
                    selectedAI === ai.id
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                  onClick={() => setSelectedAI(ai.id)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{ai.name}</CardTitle>
                      <Badge className={`
                        ${ai.level === 'Beginner' ? 'bg-green-500/20 text-green-400' : ''}
                        ${ai.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                        ${ai.level === 'Advanced' ? 'bg-red-500/20 text-red-400' : ''}
                        ${ai.level === 'Adaptive' ? 'bg-purple-500/20 text-purple-400' : ''}
                      `}>
                        {ai.level}
                      </Badge>
                    </div>
                    <CardDescription>{ai.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <div className="text-xs text-slate-400">Win Rate</div>
                        <div className="font-semibold">{ai.winRate}%</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Games</div>
                        <div className="font-semibold">{ai.games.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Strength</div>
                        <div className="font-semibold">{ai.strength}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Game Setup & Start */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Game Setup</h2>
            
            <Card className="bg-slate-800 border-slate-700 mb-6">
              <CardHeader>
                <CardTitle>Match Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Time Control</label>
                  <select className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg">
                    <option>No time limit</option>
                    <option>5 minutes</option>
                    <option>10 minutes</option>
                    <option>15 minutes</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Difficulty Adjustment</label>
                  <select className="w-full p-2 bg-slate-700 border border-slate-600 rounded-lg">
                    <option>Auto-adjust to my level</option>
                    <option>Fixed difficulty</option>
                    <option>Gradually increase</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Analysis Mode</label>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Show move suggestions</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Post-game analysis</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30 mb-6">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Ready to Play?</h3>
                <p className="text-slate-300 mb-4">
                  {practiceGames.find(g => g.id === selectedGame)?.name} vs {aiOpponents.find(ai => ai.id === selectedAI)?.name}
                </p>
                <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-lg py-3">
                  <Play className="w-5 h-5 mr-2" />
                  Start AI Match
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="border-slate-600">
                <Settings className="w-4 h-4 mr-2" />
                Advanced Settings
              </Button>
              <Button variant="outline" className="border-slate-600">
                <Trophy className="w-4 h-4 mr-2" />
                View Statistics
              </Button>
            </div>
          </div>
        </div>

        {/* Recent AI Games */}
        <Card className="bg-slate-800 border-slate-700 mt-12">
          <CardHeader>
            <CardTitle>Recent AI Matches</CardTitle>
            <CardDescription>Your performance against AI opponents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-2xl font-bold text-green-400">12</div>
                <p className="text-sm text-slate-400">Wins Today</p>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-2xl font-bold text-red-400">8</div>
                <p className="text-sm text-slate-400">Losses Today</p>
              </div>
              <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-400">1847</div>
                <p className="text-sm text-slate-400">Current Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIPractice;
