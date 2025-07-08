
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Play, CheckCircle, Star, Lightbulb, Target } from 'lucide-react';
import { useState } from 'react';
import { allGames } from '@/data/gameData';
import InteractiveBoard from '@/components/interactive/InteractiveBoard';

const LessonDetail = () => {
  const { gameId, lessonId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  const game = allGames.find(g => g.id === gameId);
  const lesson = game?.lessons.find(l => l.id === lessonId);

  if (!game || !lesson) {
    return (
      <div className="min-h-screen bg-background text-body-text flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Lesson Not Found</h1>
          <Link to="/learn">
            <Button>Return to Learn</Button>
          </Link>
        </div>
      </div>
    );
  }

  const steps = ['Video', 'Theory', 'Interactive', 'Quiz', 'Complete'];

  const handleQuizAnswer = (questionIndex: number, answer: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = answer;
    setQuizAnswers(newAnswers);
  };

  const completeLesson = () => {
    setCompleted(true);
    // Here you would typically save progress to backend
  };

  return (
    <div className="min-h-screen bg-background text-body-text learn-theme">
      {/* Navigation */}
      <nav className="border-b border-border glass-card backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to={`/learn`} className="flex items-center space-x-2 hover:text-primary transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Learn</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
              SkillForge
            </h1>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Lesson Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-blue-500/20 text-blue-400">
              Lesson {lessonId}
            </Badge>
            <Badge className="bg-green-500/20 text-green-400">
              +{lesson.xp} XP
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-400">
              {lesson.duration}
            </Badge>
            <Badge className={`${
              lesson.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
              lesson.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
              lesson.difficulty === 'Advanced' ? 'bg-orange-500/20 text-orange-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {lesson.difficulty}
            </Badge>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-foreground">{lesson.title}</h1>
          <p className="text-xl text-secondary-text">{lesson.description}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span>Lesson Progress</span>
            <span>{Math.round((currentStep / (steps.length - 1)) * 100)}%</span>
          </div>
          <Progress value={(currentStep / (steps.length - 1)) * 100} className="h-3" />
          
          <div className="flex justify-between mt-4">
            {steps.map((step, index) => (
              <div key={step} className={`flex items-center ${index <= currentStep ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                  index < currentStep ? 'bg-green-500' : 
                  index === currentStep ? 'bg-primary' : 'bg-muted'
                }`}>
                  {index < currentStep ? <CheckCircle className="w-4 h-4" /> : index + 1}
                </div>
                <span className="text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lesson Content */}
        <Card className="glass-card border-border mb-8">
          <CardContent className="p-8">
            {currentStep === 0 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 justify-center text-foreground">
                    <Play className="w-6 h-6 text-blue-400" />
                    {lesson.video.title}
                  </h3>
                  <div className="w-full max-w-3xl mx-auto mb-6">
                    <iframe
                      width="100%"
                      height="400"
                      src={lesson.video.url}
                      title={lesson.video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <p className="text-secondary-text mb-6">{lesson.video.description}</p>
                </div>
                <Button onClick={() => setCurrentStep(1)} className="w-full bg-blue-600 hover:bg-blue-700">
                  Continue to Theory
                </Button>
              </div>
            )}

            {currentStep === 1 && (
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                  Theory & Concepts
                </h3>
                <div className="space-y-4 mb-8">
                  {lesson.theory.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold text-white mt-1">
                        {index + 1}
                      </div>
                      <p className="text-body-text">{point}</p>
                    </div>
                  ))}
                </div>
                <Button onClick={() => setCurrentStep(2)} className="w-full bg-blue-600 hover:bg-blue-700">
                  Continue to Practice
                </Button>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <Target className="w-6 h-6 text-green-400" />
                  Interactive Practice
                </h3>
                <div className="mb-8">
                  <InteractiveBoard
                    gameId={gameId!}
                    type={lesson.interactive.type}
                    title={lesson.interactive.title}
                    description={lesson.interactive.description}
                  />
                </div>
                <Button onClick={() => setCurrentStep(3)} className="w-full bg-green-600 hover:bg-green-700">
                  Complete Practice & Continue
                </Button>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                  <Star className="w-6 h-6 text-yellow-400" />
                  Knowledge Check
                </h3>
                <div className="space-y-6 mb-8">
                  {lesson.quiz.map((question, qIndex) => (
                    <div key={qIndex} className="p-6 bg-muted/20 rounded-lg">
                      <h4 className="text-lg font-semibold mb-4 text-body-text">{question.question}</h4>
                      <div className="space-y-2">
                        {question.options.map((option, oIndex) => (
                          <button
                            key={oIndex}
                            onClick={() => handleQuizAnswer(qIndex, oIndex)}
                            className={`w-full text-left p-3 rounded-lg transition-colors ${
                              quizAnswers[qIndex] === oIndex
                                ? 'bg-blue-600 text-white'
                                : 'bg-muted hover:bg-muted/80'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                      {quizAnswers[qIndex] !== undefined && (
                        <div className={`mt-3 p-3 rounded-lg ${
                          quizAnswers[qIndex] === question.correct
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          <p className="text-sm">{question.explanation}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => setCurrentStep(4)} 
                  disabled={quizAnswers.length < lesson.quiz.length}
                  className="w-full bg-yellow-600 hover:bg-yellow-700"
                >
                  Submit Quiz
                </Button>
              </div>
            )}

            {currentStep === 4 && (
              <div className="text-center">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Lesson Complete!</h3>
                <p className="text-xl text-secondary-text mb-6">
                  You've earned {lesson.xp} XP and mastered {lesson.title}
                </p>
                <div className="flex gap-4 justify-center">
                  <Link to="/learn">
                    <Button variant="outline" className="border-border">
                      Back to Learn
                    </Button>
                  </Link>
                  <Button onClick={completeLesson} className="bg-green-600 hover:bg-green-700">
                    Continue Learning
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LessonDetail;
