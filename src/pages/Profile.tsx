import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Link } from 'react-router-dom';
import { 
  User, Settings, Trophy, Calendar, Clock, Target, Star, 
  Edit3, Share2, Eye, EyeOff, Lock, Globe, PanelLeft, Crown,
  Timer, Zap, Award, TrendingUp
} from 'lucide-react';
import CollapsibleSidebar from '@/components/ui/CollapsibleSidebar';
import { GameIcon } from '@/components/ui/GameIcon';

const Profile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    username: 'GameMaster_Pro',
    email: 'gamemaster@example.com',
    bio: 'Passionate about strategy games and puzzle solving. Currently mastering chess tactics and Sudoku speed solving.',
    location: 'New York, USA',
    joinDate: 'January 2024',
    isPublic: true,
    showEmail: false,
    showStats: true
  });

  const userStats = {
    totalXp: 4580,
    level: 12,
    gamesPlayed: 45,
    winRate: 78,
    averageScore: 89
  };

  const achievements = [
    {
      title: 'Puzzle Master',
      description: 'Solved 1000 puzzles',
      icon: '🧩'
    },
    {
      title: 'Strategic Thinker',
      description: 'Won 50 strategy games',
      icon: '♟️'
    },
    {
      title: 'Speed Solver',
      description: 'Completed 100 challenges under time',
      icon: '⏱️'
    },
    {
      title: 'Community Contributor',
      description: 'Active in community discussions',
      icon: '💬'
    }
  ];

  const recentActivity = [
    {
      title: 'Completed Chess Lesson',
      description: 'Learned advanced tactics',
      timestamp: '2 hours ago',
      type: 'lesson',
      game: 'chess'
    },
    {
      title: 'Sudoku Daily Challenge',
      description: 'Finished in top 10%',
      timestamp: '5 hours ago',
      type: 'challenge',
      game: 'sudoku'
    },
    {
      title: 'Achievement Unlocked',
      description: 'Puzzle Master',
      timestamp: '1 day ago',
      type: 'achievement',
      game: 'rubiks-cube'
    },
    {
      title: 'Joined Tournament',
      description: 'Participated in Chess Tournament',
      timestamp: '2 days ago',
      type: 'tournament',
      game: 'chess'
    }
  ];

  const gameProgress = [
    { id: 'chess', name: 'Chess', progress: 60 },
    { id: 'sudoku', name: 'Sudoku', progress: 85 },
    { id: 'rubiks-cube', name: "Rubik's Cube", progress: 45 },
    { id: 'poker', name: 'Poker', progress: 25 }
  ];

  const personalBests = [
    {
      game: 'chess',
      gameName: 'Chess',
      record: 'Fastest Checkmate',
      value: '4 moves',
      date: '2024-12-15',
      difficulty: 'Expert'
    },
    {
      game: 'sudoku', 
      gameName: 'Sudoku',
      record: 'Speed Solve',
      value: '2:34',
      date: '2024-12-10',
      difficulty: 'Hard'
    },
    {
      game: 'rubiks-cube',
      gameName: "Rubik's Cube", 
      record: 'Best Time',
      value: '45.2s',
      date: '2024-12-08',
      difficulty: 'Standard'
    },
    {
      game: 'poker',
      gameName: 'Poker',
      record: 'Tournament Win',
      value: '1st Place',
      date: '2024-12-05',
      difficulty: 'Advanced'
    },
    {
      game: 'wordle',
      gameName: 'Wordle', 
      record: 'Perfect Week',
      value: '7/7 Games',
      date: '2024-12-01',
      difficulty: 'Daily'
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
                <Link to="/community" className="hover:text-primary transition-colors">Community</Link>
                <Link to="/profile" className="text-primary font-medium">Profile</Link>
              </nav>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="glass-card border-border mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-yellow-400 flex items-center justify-center text-2xl font-bold text-background">
                {profileData.username.charAt(0)}
              </div>
              
              <div className="flex-1">
                {isEditing ? (
                  <div className="space-y-4">
                    <Input
                      value={profileData.username}
                      onChange={(e) => setProfileData({...profileData, username: e.target.value})}
                      className="text-2xl font-bold glass-card"
                      placeholder="Username"
                    />
                    <Input
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      className="glass-card"
                      placeholder="Email"
                    />
                    <Textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      className="glass-card"
                      placeholder="Bio"
                      rows={3}
                    />
                    <Input
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      className="glass-card"
                      placeholder="Location"
                    />
                  </div>
                ) : (
                  <div>
                    <h1 className="text-3xl font-bold mb-2 text-foreground">{profileData.username}</h1>
                    <p className="text-muted-foreground mb-4">{profileData.bio}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>📍 {profileData.location}</span>
                      <span>📅 Joined {profileData.joinDate}</span>
                      <span>⭐ Level {userStats.level}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => setIsEditing(!isEditing)}
                  variant="outline"
                  className="glass-card border-border"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  {isEditing ? 'Save' : 'Edit'}
                </Button>
                <Button variant="outline" className="glass-card border-border">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
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
              <div className="text-2xl font-bold text-green-400">{userStats.gamesPlayed}</div>
              <p className="text-sm text-muted-foreground">Games Played</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-border">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">{userStats.winRate}%</div>
              <p className="text-sm text-muted-foreground">Win Rate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Personal Bests/Records */}
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  Personal Bests & Records
                </CardTitle>
                <CardDescription>Your greatest achievements across all games</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {personalBests.map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-3 glass-card rounded-lg">
                      <div className="flex items-center gap-3">
                        <GameIcon game={record.game} size={24} />
                        <div>
                          <h4 className="font-semibold text-foreground">{record.gameName}</h4>
                          <p className="text-sm text-muted-foreground">{record.record}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{record.value}</div>
                        <div className="text-xs text-muted-foreground">{record.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Privacy Settings */}
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Privacy Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>Public Profile</span>
                  </div>
                  <Switch
                    checked={profileData.isPublic}
                    onCheckedChange={(checked) => setProfileData({...profileData, isPublic: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>Show Email</span>
                  </div>
                  <Switch
                    checked={profileData.showEmail}
                    onCheckedChange={(checked) => setProfileData({...profileData, showEmail: checked})}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span>Show Game Stats</span>
                  </div>
                  <Switch
                    checked={profileData.showStats}
                    onCheckedChange={(checked) => setProfileData({...profileData, showStats: checked})}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 glass-card rounded-lg">
                      <GameIcon game={activity.game} size={32} />
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{activity.title}</h4>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {activity.timestamp}
                        </div>
                      </div>
                      <Badge variant="outline" className={`text-xs ${
                        activity.type === 'achievement' ? 'border-yellow-500 text-yellow-400' :
                        activity.type === 'lesson' ? 'border-blue-500 text-blue-400' :
                        'border-green-500 text-green-400'
                      }`}>
                        {activity.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  Achievements & Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center p-4 glass-card rounded-lg">
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <h4 className="font-semibold text-sm text-foreground">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Game Progress */}
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Game Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {gameProgress.map((game, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <GameIcon game={game.id} size={24} />
                          <span className="font-medium text-foreground">{game.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{game.progress}%</span>
                      </div>
                      <Progress value={game.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
