import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { TrendingUp, Brain, Target, Clock, ArrowLeft, BarChart3, Eye } from 'lucide-react';

const recentGames = [
  { 
    id: 1, 
    game: 'Chess', 
    icon: '♛', 
    result: 'Win', 
    accuracy: 87, 
    time: '12:34', 
    moves: 42, 
    rating: '+12',
    date: '2 hours ago',
    color: 'from-gray-700 to-gray-900'
  },
  { 
    id: 2, 
    game: 'Sudoku', 
    icon: '9', 
    result: 'Complete', 
    accuracy: 95, 
    time: '8:21', 
    mistakes: 2, 
    rating: '+8',
    date: '5 hours ago',
    color: 'from-blue-600 to-blue-800'
  },
  { 
    id: 3, 
    game: 'Rubiks Cube', 
    icon: '🧩', 
    result: 'Complete', 
    accuracy: 78, 
    time: '3:45', 
    moves: 89, 
    rating: '+5',
    date: '1 day ago',
    color: 'from-green-600 to-green-800'
  }
];

const weaknessAreas = [
  { area: 'Chess Endgames', severity: 'High', improvement: '+15% needed', color: 'red' },
  { area: 'Sudoku Advanced Techniques', severity: 'Medium', improvement: '+8% needed', color: 'yellow' },
  { area: 'Cube F2L Speed', severity: 'Low', improvement: '+3% needed', color: 'green' }
];

const Analyze = () => {
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
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Game Analysis
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Get detailed AI-powered analysis of your gameplay, identify weaknesses, and receive personalized improvement suggestions.
          </p>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-400">+127</div>
              <p className="text-sm text-slate-400">Rating This Week</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-400">87%</div>
              <p className="text-sm text-slate-400">Avg Accuracy</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-400">8:23</div>
              <p className="text-sm text-slate-400">Avg Game Time</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-400">23</div>
              <p className="text-sm text-slate-400">Games Analyzed</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Games Analysis */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Recent Game Analysis</h2>
            {recentGames.map((game) => (
              <Card key={game.id} className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${game.color} flex items-center justify-center text-xl`}>
                        {game.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{game.game}</CardTitle>
                        <CardDescription>{game.date}</CardDescription>
                      </div>
                    </div>
                    <Badge className={`${
                      game.result === 'Win' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {game.result}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-slate-400">Accuracy</div>
                      <div className="text-lg font-semibold">{game.accuracy}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Time</div>
                      <div className="text-lg font-semibold">{game.time}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">{game.moves ? 'Moves' : 'Mistakes'}</div>
                      <div className="text-lg font-semibold">{game.moves || game.mistakes}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Rating</div>
                      <div className="text-lg font-semibold text-green-400">{game.rating}</div>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Eye className="w-4 h-4 mr-2" />
                    View Detailed Analysis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Weakness Analysis */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Areas for Improvement</h2>
            
            <Card className="bg-gradient-to-br from-red-600/20 to-red-800/20 border-red-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  AI Recommendations
                </CardTitle>
                <CardDescription>
                  Based on your recent gameplay patterns
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {weaknessAreas.map((weakness, index) => (
                  <div key={index} className="p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{weakness.area}</h4>
                      <Badge className={`${
                        weakness.color === 'red' ? 'bg-red-500/20 text-red-400' :
                        weakness.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {weakness.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-400 mb-3">{weakness.improvement}</p>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Practice This Area
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600/20 to-green-800/20 border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Strength Analysis
                </CardTitle>
                <CardDescription>
                  Your top performing areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Chess Opening Theory</span>
                    <span className="text-green-400 font-semibold">92%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sudoku Logic Chains</span>
                    <span className="text-green-400 font-semibold">89%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Pattern Recognition</span>
                    <span className="text-green-400 font-semibold">85%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle>Custom Analysis</CardTitle>
                <CardDescription>
                  Upload specific games for detailed AI review
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                  Upload Game for Analysis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyze;
