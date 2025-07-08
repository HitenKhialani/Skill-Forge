import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Play, Trophy, Clock, Users, Star, PanelLeft } from 'lucide-react';
import { GameIcon } from '@/components/ui/GameIcon';
import CollapsibleSidebar from '@/components/ui/CollapsibleSidebar';

const gameCategories = ['All', 'Strategy', 'Logic', 'World', 'Card'];

const allGames = [
  // Strategy Games
  { id: 'chess', name: 'Chess', icon: '♛', category: 'Strategy', color: 'from-gray-700 to-gray-900', progress: 33, level: 2, xp: 650, difficulty: 'Advanced', players: '2.1M' },
  { id: 'go', name: 'Go', icon: '⚫', category: 'Strategy', color: 'from-slate-600 to-slate-800', progress: 0, level: 1, xp: 0, difficulty: 'Expert', players: '890K' },
  { id: 'checkers', name: 'Checkers', icon: '🔴', category: 'Strategy', color: 'from-red-600 to-red-800', progress: 0, level: 1, xp: 0, difficulty: 'Intermediate', players: '1.5M' },
  { id: 'backgammon', name: 'Backgammon', icon: '🎲', category: 'Strategy', color: 'from-amber-600 to-amber-800', progress: 0, level: 1, xp: 0, difficulty: 'Intermediate', players: '750K' },
  { id: 'shogi', name: 'Shogi', icon: '🏯', category: 'Strategy', color: 'from-orange-600 to-orange-800', progress: 0, level: 1, xp: 0, difficulty: 'Expert', players: '320K' },

  // Logic Games
  { id: 'sudoku', name: 'Sudoku', icon: '9', category: 'Logic', color: 'from-blue-600 to-blue-800', progress: 17, level: 1, xp: 280, difficulty: 'Intermediate', players: '3.2M' },
  { id: 'rubiks-cube', name: "Rubik's Cube", icon: '🧩', category: 'Logic', color: 'from-red-500 to-orange-600', progress: 17, level: 1, xp: 190, difficulty: 'Advanced', players: '1.8M' },
  { id: 'crossword', name: 'Crossword', icon: '📝', category: 'Logic', color: 'from-purple-600 to-purple-800', progress: 0, level: 1, xp: 0, difficulty: 'Intermediate', players: '2.5M' },
  { id: 'wordle', name: 'Wordle', icon: '📝', category: 'Logic', color: 'from-yellow-600 to-yellow-800', progress: 0, level: 1, xp: 0, difficulty: 'Beginner', players: '4.1M' },
  { id: 'kakuro', name: 'Kakuro', icon: '🔢', category: 'Logic', color: 'from-indigo-600 to-indigo-800', progress: 0, level: 1, xp: 0, difficulty: 'Advanced', players: '650K' },
  { id: 'minesweeper', name: 'Minesweeper', icon: '💣', category: 'Logic', color: 'from-gray-600 to-gray-800', progress: 0, level: 1, xp: 0, difficulty: 'Intermediate', players: '1.9M' },
  { id: 'mastermind', name: 'Mastermind', icon: '��', category: 'Logic', color: 'from-pink-600 to-pink-800', progress: 0, level: 1, xp: 0, difficulty: 'Intermediate', players: '1.1M' },
  { id: 'set', name: 'Set', icon: '🔺', category: 'Logic', color: 'from-teal-600 to-teal-800', progress: 0, level: 1, xp: 0, difficulty: 'Advanced', players: '800K' },
  { id: 'nim', name: 'Nim', icon: '🎯', category: 'Logic', color: 'from-cyan-600 to-cyan-800', progress: 0, level: 1, xp: 0, difficulty: 'Intermediate', players: '600K' },

  // World Games
  { id: 'tetris', name: 'Tetris', icon: '🟦', category: 'World', color: 'from-blue-500 to-blue-700', progress: 0, level: 1, xp: 0, difficulty: 'Intermediate', players: '5.2M' },
  { id: 'mahjong', name: 'Mahjong', icon: '🀄', category: 'World', color: 'from-emerald-600 to-emerald-800', progress: 0, level: 1, xp: 0, difficulty: 'Advanced', players: '2.8M' },
  { id: 'jigsaw', name: 'Jigsaw Puzzles', icon: '🧩', category: 'World', color: 'from-violet-600 to-violet-800', progress: 0, level: 1, xp: 0, difficulty: 'Beginner', players: '3.7M' },

  // Card Games
  { id: 'poker', name: 'Poker', icon: '🃏', category: 'Card', color: 'from-red-700 to-red-900', progress: 0, level: 1, xp: 0, difficulty: 'Advanced', players: '4.5M' },
  { id: 'bridge', name: 'Bridge', icon: '♠️', category: 'Card', color: 'from-slate-700 to-slate-900', progress: 0, level: 1, xp: 0, difficulty: 'Expert', players: '1.2M' },
  { id: 'scrabble', name: 'Scrabble', icon: '🔤', category: 'Card', color: 'from-brown-600 to-brown-800', progress: 0, level: 1, xp: 0, difficulty: 'Intermediate', players: '2.1M' }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const filteredGames = selectedCategory === 'All' 
    ? allGames 
    : allGames.filter(game => game.category === selectedCategory);

  const userStats = {
    totalXp: 1120,
    level: 8,
    streak: 3,
    completedGames: 3,
    totalGames: 20
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Collapsible Sidebar */}
      <CollapsibleSidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />
      
      {/* Navigation */}
      <nav className="border-b border-border glass-card backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 relative">
            {/* Hamburger menu at far left */}
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-md hover:bg-accent focus:outline-none"
            >
              <PanelLeft className="w-6 h-6 text-foreground" />
            </button>
            {/* Logo left-aligned */}
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent ml-12 mr-8">
              SkillForge
            </Link>
            {/* Centered nav links */}
            <div className="flex-1 flex justify-center">
              <nav className="flex space-x-6">
                <Link to="/" className="text-primary font-medium">Dashboard</Link>
                <Link to="/learn" className="hover:text-primary transition-colors">Learn</Link>
                <Link to="/practice" className="hover:text-primary transition-colors">Practice</Link>
                <Link to="/community" className="hover:text-primary transition-colors">Community</Link>
                <Link to="/profile" className="hover:text-primary transition-colors">Profile</Link>
              </nav>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
            SkillForge
          </h1>
          <p className="text-xl text-muted-foreground">
            Where masters are made
          </p>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{userStats.totalXp.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground">Total XP</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">{userStats.level}</div>
              <p className="text-sm text-muted-foreground">Current Level</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-400">{userStats.streak}</div>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">{userStats.completedGames}/{userStats.totalGames}</div>
              <p className="text-sm text-muted-foreground">Games Started</p>
            </CardContent>
          </Card>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {gameCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-background shadow-lg shadow-primary/25 transform scale-105'
                    : 'glass-card text-foreground hover:bg-accent hover:text-primary hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <Card 
              key={game.id} 
              className="w-full max-w-sm glass-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 group"
            >
              <CardHeader className="pb-2">
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  <GameIcon game={game.id} />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {game.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {game.players} active players
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      game.difficulty === 'Beginner' ? 'border-green-500 text-green-400' :
                      game.difficulty === 'Intermediate' ? 'border-yellow-500 text-yellow-400' :
                      game.difficulty === 'Advanced' ? 'border-orange-500 text-orange-400' :
                      'border-red-500 text-red-400'
                    }`}
                  >
                    {game.difficulty}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3" />
                    Level {game.level}
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground">{game.progress}%</span>
                  </div>
                  <Progress value={game.progress} className="h-2" />
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{game.xp} XP earned</span>
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4" />
                    <span>Rank #{Math.floor(Math.random() * 1000) + 1}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link to={`/game/${game.id}`} className="block">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-colors">
                      <Play className="w-4 h-4 mr-2" />
                      {game.progress > 0 ? 'Continue' : 'Start'}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-card border-blue-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Daily Challenge
              </CardTitle>
              <CardDescription>Complete today's puzzle to maintain your streak</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/practice/quick-start">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Challenge
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Community
              </CardTitle>
              <CardDescription>Join discussions and compete with others</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/community">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Join Community
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-card border-green-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Tournament
              </CardTitle>
              <CardDescription>Compete in live tournaments for prizes</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/practice/tournament">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Enter Tournament
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
