
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Trophy, Clock, Users, Star, ArrowLeft, Calendar, Zap } from 'lucide-react';

const activeTournaments = [
  {
    id: 1,
    name: 'Weekly Chess Blitz Championship',
    game: 'Chess',
    icon: '♛',
    participants: 1247,
    maxParticipants: 2048,
    prize: '5000 XP + Exclusive Badge',
    startTime: '2 hours',
    duration: '3 hours',
    entryFee: 'Free',
    difficulty: 'All Levels',
    status: 'Open'
  },
  {
    id: 2,
    name: 'Sudoku Speed Masters',
    game: 'Sudoku',
    icon: '9',
    participants: 892,
    maxParticipants: 1000,
    prize: '3000 XP + Speed Master Title',
    startTime: '45 minutes',
    duration: '2 hours',
    entryFee: '50 XP',
    difficulty: 'Intermediate+',
    status: 'Open'
  },
  {
    id: 3,
    name: 'Rubiks Cube Speedcubing Arena',
    game: 'Rubiks Cube',
    icon: '🧩',
    participants: 456,
    maxParticipants: 512,
    prize: '2500 XP + Cube Master Badge',
    startTime: '1 day',
    duration: '4 hours',
    entryFee: '100 XP',
    difficulty: 'Advanced',
    status: 'Open'
  }
];

const upcomingTournaments = [
  {
    id: 4,
    name: 'Multi-Game Grand Championship',
    games: ['Chess', 'Sudoku', 'Wordle', 'Crossword'],
    participants: 234,
    maxParticipants: 1024,
    prize: '15000 XP + Grand Master Title',
    startTime: '3 days',
    duration: '1 week',
    entryFee: '500 XP',
    difficulty: 'Expert'
  },
  {
    id: 5,
    name: 'Beginner Friendly Tournament',
    games: ['Wordle', 'Jigsaw', 'Minesweeper'],
    participants: 678,
    maxParticipants: 2000,
    prize: '1000 XP + Rookie Badge',
    startTime: '5 days',
    duration: '2 days',
    entryFee: 'Free',
    difficulty: 'Beginner'
  }
];

const completedTournaments = [
  {
    id: 6,
    name: 'Last Week Chess Masters',
    game: 'Chess',
    yourRank: 23,
    totalParticipants: 1456,
    xpEarned: 250,
    status: 'Completed'
  },
  {
    id: 7,
    name: 'Sudoku Sprint Challenge',
    game: 'Sudoku',
    yourRank: 12,
    totalParticipants: 890,
    xpEarned: 450,
    status: 'Completed'
  }
];

const Tournament = () => {
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
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Tournament Arena
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Compete against players worldwide in official tournaments. Win prizes, earn titles, and climb the global leaderboards.
          </p>
        </div>

        {/* Tournament Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-400">3</div>
              <p className="text-sm text-slate-400">Tournaments Won</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-400">1847</div>
              <p className="text-sm text-slate-400">Tournament Rating</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-400">23</div>
              <p className="text-sm text-slate-400">Best Rank</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6 text-center">
              <Zap className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-400">12,450</div>
              <p className="text-sm text-slate-400">XP from Tournaments</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Tournaments */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Active Tournaments</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {activeTournaments.map((tournament) => (
              <Card key={tournament.id} className="bg-slate-800 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-3xl">{tournament.icon}</div>
                    <Badge className="bg-green-500/20 text-green-400">
                      {tournament.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{tournament.name}</CardTitle>
                  <CardDescription>{tournament.game} Tournament</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-slate-400">Participants</div>
                      <div className="font-semibold">{tournament.participants.toLocaleString()}/{tournament.maxParticipants.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Starts In</div>
                      <div className="font-semibold text-yellow-400">{tournament.startTime}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Duration</div>
                      <div className="font-semibold">{tournament.duration}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Entry Fee</div>
                      <div className="font-semibold">{tournament.entryFee}</div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                    <div className="text-sm text-slate-400 mb-1">Prize Pool</div>
                    <div className="font-semibold text-yellow-400">{tournament.prize}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge className={`
                      ${tournament.difficulty === 'All Levels' ? 'bg-blue-500/20 text-blue-400' : ''}
                      ${tournament.difficulty === 'Intermediate+' ? 'bg-yellow-500/20 text-yellow-400' : ''}
                      ${tournament.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' : ''}
                    `}>
                      {tournament.difficulty}
                    </Badge>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700">
                    Join Tournament
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Tournaments */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Upcoming Tournaments</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingTournaments.map((tournament) => (
              <Card key={tournament.id} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{tournament.name}</CardTitle>
                    <Badge className="bg-purple-500/20 text-purple-400">
                      Upcoming
                    </Badge>
                  </div>
                  <CardDescription>
                    Multi-Game Event: {tournament.games.join(', ')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-slate-400">Participants</div>
                      <div className="font-semibold">{tournament.participants}/{tournament.maxParticipants}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Starts In</div>
                      <div className="font-semibold text-purple-400">{tournament.startTime}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Duration</div>
                      <div className="font-semibold">{tournament.duration}</div>
                    </div>
                    <div>
                      <div className="text-slate-400">Entry Fee</div>
                      <div className="font-semibold">{tournament.entryFee}</div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                    <div className="text-sm text-slate-400 mb-1">Grand Prize</div>
                    <div className="font-semibold text-purple-400">{tournament.prize}</div>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    Register Interest
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tournament History */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Your Tournament History</h2>
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle>Recent Completions</CardTitle>
              <CardDescription>Your performance in past tournaments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {completedTournaments.map((tournament) => (
                  <div key={tournament.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{tournament.name}</h4>
                      <p className="text-sm text-slate-400">{tournament.game}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">
                        Rank #{tournament.yourRank} of {tournament.totalParticipants.toLocaleString()}
                      </div>
                      <div className="text-sm text-green-400">+{tournament.xpEarned} XP</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
