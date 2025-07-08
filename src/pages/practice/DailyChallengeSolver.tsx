
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Lightbulb, CheckCircle, AlertTriangle, Star, RefreshCw } from 'lucide-react';
import InteractiveBoard from '@/components/interactive/InteractiveBoard';

const DailyChallengeSolver = () => {
  const { challengeId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const challenge = location.state?.challenge;

  const [timeLeft, setTimeLeft] = useState(challenge?.timeLimit * 60 || 900); // in seconds
  const [hintsUsed, setHintsUsed] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [aieFeedback, setAiFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [solution, setSolution] = useState('');

  useEffect(() => {
    if (timeLeft > 0 && !isCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isCompleted]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleHint = () => {
    if (hintsUsed < 3) {
      setHintsUsed(hintsUsed + 1);
      // Simulate hint logic based on game type
      const hints = {
        chess: ['Look for forcing moves first', 'Check for knight forks', 'Consider sacrificial attacks'],
        sudoku: ['Focus on the empty cells with fewest possibilities', 'Look for hidden singles in rows and columns', 'Use elimination technique in 3x3 boxes'],
        'rubiks-cube': ['Start with the white cross', 'Use the right-hand algorithm: R U R\' U\'', 'Focus on corner positioning first']
      };
      
      const gameHints = hints[challenge?.gameId as keyof typeof hints] || ['Think step by step', 'Consider all possibilities', 'Look for patterns'];
      setAiFeedback(`Hint ${hintsUsed + 1}: ${gameHints[hintsUsed]}`);
    }
  };

  const handleSubmitSolution = () => {
    setIsCompleted(true);
    
    // Calculate score based on time remaining and hints used
    const timeBonus = Math.max(0, timeLeft * 2);
    const hintPenalty = hintsUsed * 50;
    const baseScore = challenge?.xpReward || 500;
    const finalScore = Math.max(baseScore * 0.3, baseScore + timeBonus - hintPenalty);
    
    setScore(Math.round(finalScore));
    setAiFeedback(`Excellent work! You solved this ${challenge?.gameName} challenge with ${hintsUsed} hints used. Your solution shows good strategic thinking.`);
  };

  const handleTryAnother = () => {
    // Reset state for another puzzle
    setTimeLeft(challenge?.timeLimit * 60 || 900);
    setHintsUsed(0);
    setIsCompleted(false);
    setAiFeedback('');
    setScore(0);
    setSolution('');
  };

  const getBoardType = (gameId: string) => {
    const boardTypes: { [key: string]: string } = {
      chess: 'chess-board',
      sudoku: 'sudoku-grid',
      'rubiks-cube': 'rubiks-cube',
      go: 'go-board',
      poker: 'poker-table'
    };
    return boardTypes[gameId] || 'chess-board';
  };

  if (!challenge) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="glass-card border-border p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Challenge Not Found</h2>
          <Button onClick={() => navigate('/practice/daily-challenges')}>
            Return to Daily Challenges
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border glass-card backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/practice/daily-challenges')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Challenges</span>
              </Button>
            </div>
            <h1 className="text-2xl font-bold section-gradient">GameMastery</h1>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Game Area */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-border mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{challenge.gameIcon}</span>
                    <div>
                      <CardTitle className="text-xl">{challenge.title}</CardTitle>
                      <p className="text-muted-foreground">{challenge.gameName} Daily Challenge</p>
                    </div>
                  </div>
                  <Badge className={`${
                    challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                    challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    challenge.difficulty === 'Hard' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {challenge.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{challenge.description}</p>
                
                <InteractiveBoard
                  gameId={challenge.gameId}
                  type={getBoardType(challenge.gameId) as any}
                  title={`${challenge.gameName} Challenge`}
                  description="Solve this daily challenge puzzle"
                />
              </CardContent>
            </Card>

            {/* Solution Input */}
            {!isCompleted && (
              <Card className="glass-card border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Submit Your Solution</h3>
                    <textarea
                      value={solution}
                      onChange={(e) => setSolution(e.target.value)}
                      placeholder="Enter your solution or describe your approach..."
                      className="w-full h-24 p-3 bg-muted/20 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button 
                      onClick={handleSubmitSolution}
                      className="w-full bg-green-600 hover:bg-green-700"
                      disabled={!solution.trim()}
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Submit Solution
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timer & Stats */}
            <Card className="glass-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Challenge Timer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${timeLeft < 300 ? 'text-red-400' : 'text-green-400'}`}>
                    {formatTime(timeLeft)}
                  </div>
                  <p className="text-sm text-muted-foreground">Time Remaining</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-primary">{hintsUsed}/3</div>
                    <p className="text-xs text-muted-foreground">Hints Used</p>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-yellow-400">{challenge.xpReward}</div>
                    <p className="text-xs text-muted-foreground">Max XP</p>
                  </div>
                </div>

                {!isCompleted && (
                  <Button 
                    onClick={handleHint}
                    disabled={hintsUsed >= 3}
                    variant="outline"
                    className="w-full border-border"
                  >
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Get Hint ({3 - hintsUsed} left)
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* AI Feedback */}
            {aieFeedback && (
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {isCompleted ? <CheckCircle className="w-5 h-5 text-green-400" /> : <AlertTriangle className="w-5 h-5 text-yellow-400" />}
                    {isCompleted ? 'Challenge Complete!' : 'AI Feedback'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">{aieFeedback}</p>
                  
                  {isCompleted && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold">XP Earned:</span>
                        <Badge className="bg-green-500/20 text-green-400">
                          <Star className="w-3 h-3 mr-1" />
                          +{score}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <Button 
                          onClick={handleTryAnother}
                          className="w-full bg-blue-600 hover:bg-blue-700"
                        >
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Try Another Puzzle
                        </Button>
                        
                        <Button 
                          onClick={() => navigate('/practice/daily-challenges')}
                          variant="outline"
                          className="w-full border-border"
                        >
                          Return to Daily Challenges
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyChallengeSolver;
