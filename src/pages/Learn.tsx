import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { BookOpen, Play, Lock, CheckCircle, Trophy, Star, Clock, Zap, PanelLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { GameIcon } from '@/components/ui/GameIcon';
import { allGames } from '@/data/gameData';
import CollapsibleSidebar from '@/components/ui/CollapsibleSidebar';

const Learn = () => {
  const [selectedPath, setSelectedPath] = useState('chess');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  
  const currentPath = allGames.find(game => game.id === selectedPath);
  const gamesPerView = 3;
  const totalPages = Math.ceil(allGames.length / gamesPerView);
  const currentGames = allGames.slice(currentGameIndex, currentGameIndex + gamesPerView);

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
                <Link to="/learn" className="text-primary font-medium">Learn</Link>
                <Link to="/practice" className="hover:text-primary transition-colors">Practice</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Learning Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master games through structured learning paths designed by experts. Progress at your own pace with interactive lessons and AI feedback.
          </p>
        </div>

        {/* Learning Path Selection with Horizontal Scrolling */}
        <div className="relative mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Available Learning Paths</h2>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentGames.map((game) => (
              <Card 
                key={game.id} 
                className={`cursor-pointer transition-all duration-300 border-2 ${
                  selectedPath === game.id 
                    ? 'border-primary glass-card shadow-lg shadow-primary/20' 
                    : 'glass-card border-border hover:border-primary/50'
                }`}
                onClick={() => setSelectedPath(game.id)}
              >
                <CardHeader className="pb-2">
                  <div className="mb-4">
                    <GameIcon game={game.id} />
                  </div>
                  <CardTitle className="text-lg text-foreground">{game.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {game.totalLessons} lessons • {game.estimatedTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Badge variant="outline" className={`
                      ${game.difficulty === 'Beginner' ? 'border-green-500 text-green-400' : ''}
                      ${game.difficulty === 'Intermediate' ? 'border-yellow-500 text-yellow-400' : ''}
                      ${game.difficulty === 'Advanced' ? 'border-orange-500 text-orange-400' : ''}
                      ${game.difficulty === 'Expert' ? 'border-red-500 text-red-400' : ''}
                    `}>
                      {game.difficulty}
                    </Badge>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-foreground">{game.progress}%</span>
                      </div>
                      <Progress value={game.progress} className="h-2" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {game.completedLessons}/{game.totalLessons} lessons completed
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Pagination indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentGameIndex / gamesPerView) === i
                    ? 'bg-primary'
                    : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Detailed Learning Path */}
        {currentPath && (
          <div className="space-y-6">
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <GameIcon game={currentPath.id} />
                  {currentPath.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Complete structured learning path with interactive lessons and practice
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{currentPath.totalLessons}</div>
                    <p className="text-sm text-muted-foreground">Total Lessons</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{currentPath.completedLessons}</div>
                    <p className="text-sm text-muted-foreground">Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{currentPath.estimatedTime}</div>
                    <p className="text-sm text-muted-foreground">Est. Time</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{currentPath.progress}%</div>
                    <p className="text-sm text-muted-foreground">Progress</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modules and Lessons */}
            <div className="space-y-6">
              {currentPath.lessons.slice(0, 6).map((lesson, lessonIndex) => (
                <Card key={lesson.id} className="glass-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <BookOpen className="w-5 h-5 text-blue-400" />
                      Lesson {lessonIndex + 1}: {lesson.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-4 rounded-lg border transition-all duration-300 glass-card border-border">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500">
                              <Play className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{lesson.title}</h4>
                              <div className="flex items-center gap-3 text-sm text-slate-400">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {lesson.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Zap className="w-4 h-4 text-yellow-400" />
                                  +{lesson.xp} XP
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Link to={`/learn/${currentPath.id}/${lesson.id}`}>
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                Start
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Continue Learning CTA */}
            <Card className="glass-card border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">Ready to Continue?</h3>
                    <p className="text-muted-foreground">Jump back into your learning journey</p>
                  </div>
                  <Link to={`/game/${currentPath.id}`}>
                    <Button className="bg-primary hover:bg-primary/90 text-background font-semibold">
                      Continue Learning
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learn;
