import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Play, Clock, Zap, Target, Trophy, ArrowLeft } from 'lucide-react';

const quickGames = [
  { id: 'chess-blitz', name: 'Chess Blitz', icon: '♛', time: '5 min', xp: '50-150', players: 234 },
  { id: 'sudoku-sprint', name: 'Sudoku Sprint', icon: '9', time: '3 min', xp: '30-120', players: 189 },
  { id: 'cube-solve', name: 'Speed Cube', icon: '🧩', time: '2 min', xp: '25-200', players: 156 },
  { id: 'wordle-rapid', name: 'Wordle Rapid', icon: '📝', time: '1 min', xp: '20-80', players: 298 },
  { id: 'crossword-quick', name: 'Mini Crossword', icon: '📝', time: '4 min', xp: '40-100', players: 167 },
  { id: 'poker-hand', name: 'Poker Hand Analysis', icon: '🃏', time: '3 min', xp: '35-90', players: 134 }
];

const QuickStart = () => {
  return (
    <div className="min-h-screen bg-card text-foreground">
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
          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            Quick Start Practice
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Jump into fast-paced challenges across all games. Perfect for warming up or quick skill practice.
          </p>
        </div>

        {/* Active Players */}
        <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Live Quick Games</h3>
                <p className="text-slate-300">Join other players in real-time challenges</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">1,247</div>
                <p className="text-sm text-slate-400">Players Online</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {quickGames.map((game) => (
            <Card key={game.id} className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-3xl">{game.icon}</div>
                  <div className="flex items-center gap-1 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">{game.players} playing</span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-yellow-400 transition-colors">
                  {game.name}
                </CardTitle>
                <CardDescription>Quick challenge game</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>{game.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>{game.xp} XP</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 group-hover:shadow-lg">
                  <Play className="w-4 h-4 mr-2" />
                  Quick Start
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Random Challenge
              </CardTitle>
              <CardDescription>Get matched with a random quick game</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Surprise Me!
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-600/20 to-green-800/20 border-green-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Daily Sprint
              </CardTitle>
              <CardDescription>Complete 5 quick games for bonus XP</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>2/5</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Continue Sprint
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Time Attack
              </CardTitle>
              <CardDescription>Beat your personal best times</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-slate-400 mb-4">
                Best: Chess 2:34, Sudoku 1:48
              </div>
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                Beat Records
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuickStart;
