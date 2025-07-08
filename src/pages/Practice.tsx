import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Target, Clock, Zap, Trophy, Brain, Timer, PanelLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { GameIcon } from '@/components/ui/GameIcon';
import { allGames } from '@/data/gameData';
import CollapsibleSidebar from '@/components/ui/CollapsibleSidebar';

const Practice = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  
  const challengesPerView = 3;
  const gamesPerView = 3;
  
  const allDailyChallenges = allGames.slice(0, 12).map((game, index) => ({
    title: `${game.name} Daily Challenge`,
    description: `Master today's ${game.name.toLowerCase()} puzzle`,
    difficulty: ['Easy', 'Medium', 'Hard', 'Expert'][index % 4],
    timeLeft: ['2h 15m', '5h 42m', '18h 24m', '1d 3h'][index % 4],
    reward: `${100 + index * 25} XP`,
    participants: 500 + index * 150,
    gameId: game.id
  }));

  const currentChallenges = allDailyChallenges.slice(currentChallengeIndex, currentChallengeIndex + challengesPerView);
  const currentPracticeGames = allGames.slice(currentGameIndex, currentGameIndex + gamesPerView);

  const nextChallenges = () => {
    if (currentChallengeIndex + challengesPerView < allDailyChallenges.length) {
      setCurrentChallengeIndex(currentChallengeIndex + challengesPerView);
    }
  };

  const prevChallenges = () => {
    if (currentChallengeIndex > 0) {
      setCurrentChallengeIndex(Math.max(0, currentChallengeIndex - challengesPerView));
    }
  };

  const nextGames = () => {
    if (currentGameIndex + gamesPerView < allGames.length) {
      setCurrentGameIndex(currentGameIndex + gamesPerView);
    }
  };

  const prevGames = () => {
    if (currentGameIndex > 0) {
      setCurrentGameIndex(Math.max(0, currentGameIndex - gamesPerView));
    }
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
                <Link to="/practice" className="text-primary font-medium">Practice</Link>
                <Link to="/community" className="hover:text-primary transition-colors">Community</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Practice Arena
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharpen your skills with AI-powered practice sessions, timed challenges, and competitive puzzles.
          </p>
        </div>

        {/* Daily Challenges with Horizontal Scrolling */}
        <Card className="glass-card border-border mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Trophy className="w-6 h-6 text-primary" />
                  Daily Challenges
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Limited-time challenges with exclusive rewards
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevChallenges}
                  disabled={currentChallengeIndex === 0}
                  className="border-border hover:border-primary"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextChallenges}
                  disabled={currentChallengeIndex + challengesPerView >= allDailyChallenges.length}
                  className="border-border hover:border-primary"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {currentChallenges.map((challenge, index) => (
                <div key={index} className="p-4 glass-card rounded-lg border border-border">
                  <h3 className="font-semibold mb-2 text-foreground">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <Badge variant="outline" className={`
                        ${challenge.difficulty === 'Expert' ? 'border-red-500 text-red-400' : ''}
                        ${challenge.difficulty === 'Hard' ? 'border-orange-500 text-orange-400' : ''}
                        ${challenge.difficulty === 'Medium' ? 'border-yellow-500 text-yellow-400' : ''}
                        ${challenge.difficulty === 'Easy' ? 'border-green-500 text-green-400' : ''}
                      `}>
                        {challenge.difficulty}
                      </Badge>
                      <span className="text-muted-foreground">{challenge.participants} players</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-orange-400">{challenge.reward}</span>
                      <span className="text-green-400">{challenge.timeLeft}</span>
                    </div>
                    <Link to={`/practice/daily-challenge/${challenge.gameId}`}>
                      <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                        Join Challenge
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/practice/daily-challenges">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                  View All Daily Challenges
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Practice Games with Horizontal Scrolling */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-center text-foreground">Choose Your Practice</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevGames}
                disabled={currentGameIndex === 0}
                className="border-border hover:border-primary"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextGames}
                disabled={currentGameIndex + gamesPerView >= allGames.length}
                className="border-border hover:border-primary"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {currentPracticeGames.map((game) => (
            <Card key={game.id} className="glass-card border-border">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <GameIcon game={game.id} />
                  <div>
                    <CardTitle className="text-2xl text-foreground">{game.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Multiple practice modes to improve your skills
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {game.practiceModules.slice(0, 3).map((mode, index) => (
                    <div key={index} className="p-4 glass-card rounded-lg hover:border-primary/50 transition-colors border border-border">
                      <h3 className="font-semibold mb-2 text-foreground">{mode.name}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Brain className="w-4 h-4 text-blue-400" />
                          <span className="text-muted-foreground">Difficulty: {mode.difficulty}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Timer className="w-4 h-4 text-green-400" />
                          <span className="text-muted-foreground">Duration: {mode.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">XP Reward: {mode.xp}</span>
                        </div>
                      </div>
                      <Link to={`/practice/${game.id}/dashboard`}>
                        <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                          Start Practice
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Practice Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="glass-card border-red-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                <Clock className="w-5 h-5" />
                Quick Start
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Fast 5-minute challenges across all games</p>
              <Link to="/practice/quick-start">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Quick Start
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-card border-blue-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                <Target className="w-5 h-5" />
                Analyze Games
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">AI analysis of your past games and performance</p>
              <Link to="/practice/analyze">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Analyze & Practice
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-card border-green-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                <Zap className="w-5 h-5" />
                AI Practice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Practice against intelligent AI opponents</p>
              <Link to="/practice/ai-practice">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Face AI
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="glass-card border-purple-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                <Trophy className="w-5 h-5" />
                Tournament
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Join live tournaments with other players</p>
              <Link to="/practice/tournament">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
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

export default Practice;
