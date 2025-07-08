import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { Users, Trophy, MessageCircle, Calendar, Star, TrendingUp, PanelLeft } from 'lucide-react';
import CollapsibleSidebar from '@/components/ui/CollapsibleSidebar';

const Community = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const leaderboard = [
    { rank: 1, name: 'ChessGrandmaster', xp: 25400, games: 12, avatar: 'CG' },
    { rank: 2, name: 'PuzzleSolver', xp: 23100, games: 10, avatar: 'PS' },
    { rank: 3, name: 'GameWiz', xp: 21800, games: 11, avatar: 'GW' },
    { rank: 4, name: 'StrategyMind', xp: 20500, games: 9, avatar: 'SM' },
    { rank: 5, name: 'LogicMaster', xp: 19200, games: 8, avatar: 'LM' },
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'Advanced Chess Tactics Discussion',
      author: 'ChessGrandmaster',
      replies: 23,
      time: '2 hours ago',
      category: 'Chess',
      featured: true
    },
    {
      id: 2,
      title: 'Sudoku Speed Solving Tips',
      author: 'PuzzleSolver',
      replies: 15,
      time: '4 hours ago',
      category: 'Sudoku',
      featured: false
    },
    {
      id: 3,
      title: 'Weekly Rubiks Cube Challenge Results',
      author: 'GameWiz',
      replies: 31,
      time: '6 hours ago',
      category: 'Rubiks Cube',
      featured: true
    }
  ];

  const challenges = [
    {
      id: 1,
      title: 'Chess Blitz Tournament',
      participants: 128,
      prize: '5000 XP',
      timeLeft: '2 days',
      difficulty: 'Advanced'
    },
    {
      id: 2,
      title: 'Sudoku Speed Challenge',
      participants: 89,
      prize: '2500 XP',
      timeLeft: '5 days',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      title: 'Multi-Game Master Quest',
      participants: 45,
      prize: '10000 XP',
      timeLeft: '1 week',
      difficulty: 'Expert'
    }
  ];

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
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-md hover:bg-accent focus:outline-none"
            >
              <PanelLeft className="w-6 h-6 text-foreground" />
            </button>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent ml-12 mr-8">
              SkillForge
            </Link>
            <div className="flex-1 flex justify-center">
              <nav className="flex space-x-6">
                <Link to="/" className="hover:text-primary transition-colors">Dashboard</Link>
                <Link to="/learn" className="hover:text-primary transition-colors">Learn</Link>
                <Link to="/practice" className="hover:text-primary transition-colors">Practice</Link>
                <Link to="/community" className="text-primary font-medium">Community</Link>
                <Link to="/profile" className="hover:text-primary transition-colors">Profile</Link>
                <Link to="/stats" className="hover:text-primary transition-colors">Stats</Link>
              </nav>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            SkillForge Community
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Connect with fellow game masters, share strategies, compete in challenges, and climb the leaderboards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Challenges */}
            <Card className="bg-card border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  Active Challenges
                </CardTitle>
                <CardDescription>
                  Join competitive challenges and earn rewards
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                    <div>
                      <h3 className="font-semibold">{challenge.title}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {challenge.participants} participants
                        </span>
                        <Badge variant="outline" className={`
                          ${challenge.difficulty === 'Advanced' || challenge.difficulty === 'Expert' ? 'border-red-500 text-red-400' : ''}
                          ${challenge.difficulty === 'Intermediate' ? 'border-yellow-500 text-yellow-400' : ''}
                        `}>
                          {challenge.difficulty}
                        </Badge>
                        <span className="text-green-400">{challenge.prize}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-400 mb-2">{challenge.timeLeft} left</div>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Join Challenge
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Discussion Forum */}
            <Card className="bg-card border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  Recent Discussions
                </CardTitle>
                <CardDescription>
                  Join the conversation with the community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className={`p-4 rounded-lg transition-colors hover:bg-slate-700/50 ${
                    post.featured ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20' : 'bg-slate-700/30'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {post.featured && <Star className="w-4 h-4 text-yellow-400" />}
                          <h3 className="font-semibold">{post.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span>by {post.author}</span>
                          <span>{post.replies} replies</span>
                          <span>{post.time}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Thread
                      </Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full" variant="outline">
                  View All Discussions
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Card className="bg-card border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Global Leaderboard
                </CardTitle>
                <CardDescription>
                  Top players this month
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {leaderboard.map((player) => (
                  <div key={player.rank} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700/50 transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      player.rank === 1 ? 'bg-yellow-500 text-black' :
                      player.rank === 2 ? 'bg-gray-400 text-black' :
                      player.rank === 3 ? 'bg-amber-600 text-white' :
                      'bg-slate-600 text-white'
                    }`}>
                      {player.rank}
                    </div>
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-slate-600 text-xs">
                        {player.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{player.name}</div>
                      <div className="text-xs text-slate-400">
                        {player.xp.toLocaleString()} XP • {player.games} games
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full" size="sm">
                  View Full Leaderboard
                </Button>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card className="bg-card border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-400" />
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">12,547</div>
                  <p className="text-sm text-slate-400">Active Players</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">1,234</div>
                  <p className="text-sm text-slate-400">Games Completed Today</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">89</div>
                  <p className="text-sm text-slate-400">Active Challenges</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/30">
              <CardHeader>
                <CardTitle>Get Involved</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" size="sm">
                  Create Discussion
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  Join Discord
                </Button>
                <Button className="w-full" variant="outline" size="sm">
                  Find Study Partner
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
