import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Play, Lock, CheckCircle, Trophy, Target } from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  completed: boolean;
  locked: boolean;
  xp: number;
}

const gameData = {
  chess: {
    name: 'Chess',
    description: 'Master the royal game of strategy and tactics',
    icon: '♛',
    color: 'from-gray-700 to-gray-900',
    totalLessons: 6,
    completedLessons: 2,
    progress: 33,
    level: 2,
    xp: 650,
    lessons: [
      { id: 1, title: 'Basic Rules and Piece Movement', description: 'Learn how each chess piece moves', duration: '15 min', difficulty: 'Beginner' as const, completed: true, locked: false, xp: 100 },
      { id: 2, title: 'Tactical Patterns', description: 'Pins, forks, and skewers', duration: '25 min', difficulty: 'Beginner' as const, completed: true, locked: false, xp: 150 },
      { id: 3, title: 'Opening Principles', description: 'Control center and develop pieces', duration: '30 min', difficulty: 'Intermediate' as const, completed: false, locked: false, xp: 200 },
      { id: 4, title: 'Endgame Basics', description: 'Basic mate patterns', duration: '35 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 250 },
      { id: 5, title: 'Intermediate Strategies', description: 'Pawn structure and positional play', duration: '40 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 300 },
      { id: 6, title: 'Master Game Analysis', description: 'AI feedback on grandmaster games', duration: '45 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 350 }
    ]
  },
  sudoku: {
    name: 'Sudoku',
    description: 'Master number logic puzzles',
    icon: '9',
    color: 'from-blue-600 to-blue-800',
    totalLessons: 6,
    completedLessons: 1,
    progress: 17,
    level: 1,
    xp: 280,
    lessons: [
      { id: 1, title: 'Basic Rules and Structure', description: 'Understanding the 9x9 grid', duration: '10 min', difficulty: 'Beginner' as const, completed: true, locked: false, xp: 80 },
      { id: 2, title: 'Single Candidate Techniques', description: 'Naked and hidden singles', duration: '15 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 100 },
      { id: 3, title: 'Pairs and Triples', description: 'Advanced elimination techniques', duration: '20 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 150 },
      { id: 4, title: 'X-Wing and Swordfish', description: 'Pattern-based solving', duration: '25 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 200 },
      { id: 5, title: 'Time-Trial Practice', description: 'Speed solving techniques', duration: '30 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 250 },
      { id: 6, title: 'Custom Puzzle Creation', description: 'Design your own Sudoku', duration: '35 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 300 }
    ]
  },
  'rubiks-cube': {
    name: "Rubik's Cube",
    description: 'Master the world\'s most famous puzzle',
    icon: '🧩',
    color: 'from-red-500 to-orange-600',
    totalLessons: 6,
    completedLessons: 1,
    progress: 17,
    level: 1,
    xp: 190,
    lessons: [
      { id: 1, title: 'Cube Notation and Movements', description: 'Learn basic notation system', duration: '12 min', difficulty: 'Beginner' as const, completed: true, locked: false, xp: 90 },
      { id: 2, title: 'Solving the White Cross', description: 'First layer cross pattern', duration: '18 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 120 },
      { id: 3, title: 'First Two Layers (F2L)', description: 'Complete the first two layers', duration: '25 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 180 },
      { id: 4, title: 'Last Layer Orientation (OLL)', description: 'Orient the last layer', duration: '30 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 220 },
      { id: 5, title: 'Speedcubing Techniques', description: 'Advanced solving methods', duration: '35 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 280 },
      { id: 6, title: 'Tournament Competition', description: 'Timed solves and competitions', duration: '40 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 350 }
    ]
  },
  crossword: {
    name: 'Crossword',
    description: 'Master word puzzles and clue solving',
    icon: '📝',
    color: 'from-purple-600 to-purple-800',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Basic Clue Solving', description: 'Understanding different clue types', duration: '15 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 85 },
      { id: 2, title: 'Crossword Structures', description: 'Grid patterns and themes', duration: '20 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 110 },
      { id: 3, title: 'Themed Crosswords', description: 'Solving themed puzzles', duration: '25 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 160 },
      { id: 4, title: 'Custom Creation', description: 'Create your own crosswords', duration: '30 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 200 },
      { id: 5, title: 'Timed Challenges', description: 'Speed solving competitions', duration: '35 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 250 },
      { id: 6, title: 'Community Submissions', description: 'Share and solve community puzzles', duration: '40 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 300 }
    ]
  },
  go: {
    name: 'Go',
    description: 'Master the ancient game of territory and strategy',
    icon: '⚫',
    color: 'from-slate-600 to-slate-800',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Board Setup and Basic Rules', description: 'Learn the fundamentals of Go', duration: '20 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 120 },
      { id: 2, title: 'Capturing and Liberties', description: 'Understanding stone capture', duration: '25 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 150 },
      { id: 3, title: 'Opening Patterns', description: 'Strategic opening moves', duration: '30 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 200 },
      { id: 4, title: 'Life and Death Problems', description: 'Tactical puzzles', duration: '35 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 250 },
      { id: 5, title: 'Advanced Joseki', description: 'Corner patterns and sequences', duration: '40 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 300 },
      { id: 6, title: 'AI Game Analysis', description: 'Master-level game study', duration: '45 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 350 }
    ]
  },
  poker: {
    name: 'Poker',
    description: 'Master the art of cards and psychology',
    icon: '🃏',
    color: 'from-red-700 to-red-900',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Hand Rankings and Rules', description: 'Learn poker fundamentals', duration: '18 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 100 },
      { id: 2, title: 'Basic Betting Strategies', description: 'When to bet, call, or fold', duration: '22 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 130 },
      { id: 3, title: 'Bluffing and Psychology', description: 'Reading opponents', duration: '28 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 180 },
      { id: 4, title: 'Probability and Pot Odds', description: 'Mathematical poker', duration: '32 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 220 },
      { id: 5, title: 'Tournament Strategies', description: 'Competition play', duration: '38 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 280 },
      { id: 6, title: 'AI Hand Analysis', description: 'Advanced hand simulation', duration: '42 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 320 }
    ]
  },
  tetris: {
    name: 'Tetris',
    description: 'Master the classic block-stacking puzzle game',
    icon: '🟦',
    color: 'from-blue-500 to-blue-700',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Piece Recognition and Basic Rotations', description: 'Learn the 7 tetromino shapes', duration: '12 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 85 },
      { id: 2, title: 'Line Clearing Techniques', description: 'Efficient line clearing strategies', duration: '18 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 110 },
      { id: 3, title: 'T-Spin Basics', description: 'Advanced T-piece maneuvers', duration: '25 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 160 },
      { id: 4, title: 'Speed Strategies', description: 'Fast placement and stacking', duration: '30 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 200 },
      { id: 5, title: 'Advanced Stacking', description: 'Complex stacking patterns', duration: '35 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 250 },
      { id: 6, title: 'Competition Play', description: 'Tournament strategies and AI analysis', duration: '40 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 300 }
    ]
  },
  wordle: {
    name: 'Wordle',
    description: 'Master the daily word puzzle challenge',
    icon: '📝',
    color: 'from-yellow-600 to-yellow-800',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Rules and Basic Strategy', description: 'Understanding Wordle fundamentals', duration: '10 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 70 },
      { id: 2, title: 'Letter Frequency Analysis', description: 'Using common letters effectively', duration: '15 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 90 },
      { id: 3, title: 'Optimal Starting Words', description: 'Best opening strategies', duration: '20 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 120 },
      { id: 4, title: 'Pattern Recognition', description: 'Word pattern identification', duration: '25 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 150 },
      { id: 5, title: 'Advanced Elimination', description: 'Strategic letter elimination', duration: '30 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 180 },
      { id: 6, title: 'Speed Solving', description: 'Timed challenges and competitions', duration: '35 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 220 }
    ]
  },
  mahjong: {
    name: 'Mahjong',
    description: 'Master the ancient Chinese tile game',
    icon: '🀄',
    color: 'from-emerald-600 to-emerald-800',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Tile Recognition and Rules', description: 'Basic Mahjong fundamentals', duration: '20 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 120 },
      { id: 2, title: 'Winning Hand Patterns', description: 'Common winning combinations', duration: '25 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 150 },
      { id: 3, title: 'Table Reading', description: 'Reading other players\' hands', duration: '30 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 180 },
      { id: 4, title: 'Defensive Strategies', description: 'Blocking and safe play', duration: '35 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 220 },
      { id: 5, title: 'Scoring Systems', description: 'Regional variations and scoring', duration: '40 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 260 },
      { id: 6, title: 'Tournament Play', description: 'Competitive strategies', duration: '45 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 300 }
    ]
  },
  backgammon: {
    name: 'Backgammon',
    description: 'Master the ancient game of strategy and luck',
    icon: '🎲',
    color: 'from-amber-600 to-amber-800',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Board Setup and Movement', description: 'Basic rules and piece movement', duration: '15 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 90 },
      { id: 2, title: 'Opening Strategies', description: 'Strong opening moves', duration: '20 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 120 },
      { id: 3, title: 'Building Blocks', description: 'Defensive positioning', duration: '25 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 150 },
      { id: 4, title: 'Doubling Cube', description: 'When to double and accept', duration: '30 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 180 },
      { id: 5, title: 'Probability Analysis', description: 'Mathematical calculations', duration: '35 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 220 },
      { id: 6, title: 'AI Analysis', description: 'Computer-assisted improvement', duration: '40 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 260 }
    ]
  },
  scrabble: {
    name: 'Scrabble',
    description: 'Master the ultimate word game',
    icon: '🔤',
    color: 'from-brown-600 to-brown-800',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Basic Rules and Scoring', description: 'Fundamentals of Scrabble', duration: '15 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 85 },
      { id: 2, title: 'High-Scoring Words', description: 'Premium squares and bonuses', duration: '20 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 110 },
      { id: 3, title: 'Tile Management', description: 'Rack balance and strategy', duration: '25 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 140 },
      { id: 4, title: 'Board Control', description: 'Opening and closing opportunities', duration: '30 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 170 },
      { id: 5, title: 'Anagram Skills', description: 'Word finding techniques', duration: '35 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 200 },
      { id: 6, title: 'Tournament Play', description: 'Competitive strategies', duration: '40 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 240 }
    ]
  },
  bridge: {
    name: 'Bridge',
    description: 'Master the sophisticated card game',
    icon: '♠️',
    color: 'from-slate-700 to-slate-900',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Rules and Positions', description: 'Basic Bridge fundamentals', duration: '25 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 130 },
      { id: 2, title: 'Basic Bidding', description: 'Opening and response bids', duration: '30 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 160 },
      { id: 3, title: 'Declarer Play', description: 'Playing the contract', duration: '35 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 200 },
      { id: 4, title: 'Defensive Play', description: 'Defeating contracts', duration: '40 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 240 },
      { id: 5, title: 'Convention Systems', description: 'Advanced bidding systems', duration: '45 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 280 },
      { id: 6, title: 'Match Analysis', description: 'Computer analysis and improvement', duration: '50 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 320 }
    ]
  },
  checkers: {
    name: 'Checkers',
    description: 'Master the classic strategy game',
    icon: '🔴',
    color: 'from-red-600 to-red-800',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Basic Rules and Movement', description: 'Fundamental checker moves', duration: '12 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 80 },
      { id: 2, title: 'Capturing Strategies', description: 'Forced captures and jumps', duration: '18 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 100 },
      { id: 3, title: 'Opening Principles', description: 'Strong opening moves', duration: '22 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 130 },
      { id: 4, title: 'Midgame Tactics', description: 'Piece coordination and control', duration: '28 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 160 },
      { id: 5, title: 'Endgame Mastery', description: 'King promotion and endgames', duration: '32 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 190 },
      { id: 6, title: 'AI Practice', description: 'Computer analysis and tournaments', duration: '38 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 230 }
    ]
  },
  kakuro: {
    name: 'Kakuro',
    description: 'Master the mathematical crossword puzzle',
    icon: '🔢',
    color: 'from-indigo-600 to-indigo-800',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Rules and Layout', description: 'Understanding Kakuro structure', duration: '15 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 90 },
      { id: 2, title: 'Simple Sum Strategies', description: 'Basic solving techniques', duration: '20 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 120 },
      { id: 3, title: 'Advanced Combinations', description: 'Complex sum patterns', duration: '25 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 150 },
      { id: 4, title: 'Constraint Analysis', description: 'Logical deduction methods', duration: '30 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 180 },
      { id: 5, title: 'Speed Solving', description: 'Timed puzzle techniques', duration: '35 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 210 },
      { id: 6, title: 'Puzzle Creation', description: 'Design your own Kakuro', duration: '40 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 250 }
    ]
  },
  minesweeper: {
    name: 'Minesweeper',
    description: 'Master the classic logic puzzle game',
    icon: '💣',
    color: 'from-gray-600 to-gray-800',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Basic Rules and Indicators', description: 'Understanding mine indicators', duration: '10 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 70 },
      { id: 2, title: 'Deduction Techniques', description: 'Logical mine detection', duration: '15 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 95 },
      { id: 3, title: 'Probability Solving', description: 'When logic isn\'t enough', duration: '20 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 125 },
      { id: 4, title: 'Advanced Patterns', description: 'Complex solving situations', duration: '25 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 155 },
      { id: 5, title: 'Speed Clearing', description: 'Fast solving techniques', duration: '30 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 185 },
      { id: 6, title: 'Custom Boards', description: 'AI-generated challenging puzzles', duration: '35 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 220 }
    ]
  },
  jigsaw: {
    name: 'Jigsaw Puzzles',
    description: 'Master the art of puzzle assembly',
    icon: '🧩',
    color: 'from-violet-600 to-violet-800',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Sorting and Edge Finding', description: 'Basic puzzle strategies', duration: '15 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 85 },
      { id: 2, title: 'Color and Pattern Groups', description: 'Visual organization techniques', duration: '20 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 110 },
      { id: 3, title: 'Section Assembly', description: 'Building in sections', duration: '25 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 140 },
      { id: 4, title: 'Advanced Techniques', description: 'Complex puzzle solving', duration: '30 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 170 },
      { id: 5, title: 'Speed Assembly', description: 'Timed puzzle challenges', duration: '35 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 200 },
      { id: 6, title: 'Custom Puzzles', description: 'Create and share puzzles', duration: '40 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 240 }
    ]
  },
  shogi: {
    name: 'Shogi',
    description: 'Master the Japanese chess variant',
    icon: '🏯',
    color: 'from-orange-600 to-orange-800',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Basic Rules and Pieces', description: 'Shogi fundamentals', duration: '20 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 110 },
      { id: 2, title: 'Piece Dropping Rules', description: 'Unique capture mechanics', duration: '25 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 140 },
      { id: 3, title: 'Opening Strategies', description: 'Joseki and opening theory', duration: '30 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 170 },
      { id: 4, title: 'Midgame Tactics', description: 'Piece coordination', duration: '35 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 200 },
      { id: 5, title: 'Endgame Patterns', description: 'Checkmate sequences', duration: '40 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 240 },
      { id: 6, title: 'AI Analysis', description: 'Computer-assisted study', duration: '45 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 280 }
    ]
  },
  mastermind: {
    name: 'Mastermind',
    description: 'Master the code-breaking puzzle game',
    icon: '🔍',
    color: 'from-pink-600 to-pink-800',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Rules and Color Codes', description: 'Basic Mastermind mechanics', duration: '12 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 75 },
      { id: 2, title: 'Basic Deduction', description: 'Simple code-breaking logic', duration: '18 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 100 },
      { id: 3, title: 'Systematic Approaches', description: 'Methodical solving strategies', duration: '22 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 125 },
      { id: 4, title: 'Optimal Guessing', description: 'Minimizing guess count', duration: '28 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 155 },
      { id: 5, title: 'Advanced Patterns', description: 'Complex code combinations', duration: '32 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 185 },
      { id: 6, title: 'AI Challenges', description: 'Computer-generated puzzles', duration: '38 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 220 }
    ]
  },
  set: {
    name: 'Set',
    description: 'Master the pattern recognition card game',
    icon: '🔺',
    color: 'from-teal-600 to-teal-800',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Rules and Set Identification', description: 'Understanding valid sets', duration: '15 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 85 },
      { id: 2, title: 'Pattern Recognition', description: 'Visual pattern techniques', duration: '20 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 110 },
      { id: 3, title: 'Speed Finding', description: 'Quick set identification', duration: '25 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 140 },
      { id: 4, title: 'Multi-Set Puzzles', description: 'Complex board analysis', duration: '30 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 170 },
      { id: 5, title: 'Competitive Play', description: 'Tournament strategies', duration: '35 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 200 },
      { id: 6, title: 'AI Challenges', description: 'Computer-generated puzzles', duration: '40 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 240 }
    ]
  },
  nim: {
    name: 'Nim',
    description: 'Master the strategic pile game',
    icon: '🎯',
    color: 'from-cyan-600 to-cyan-800',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    level: 1,
    xp: 0,
    lessons: [
      { id: 1, title: 'Basic Rules and Strategy', description: 'Understanding Nim gameplay', duration: '10 min', difficulty: 'Beginner' as const, completed: false, locked: false, xp: 70 },
      { id: 2, title: 'Winning Positions', description: 'Identifying winning moves', duration: '15 min', difficulty: 'Beginner' as const, completed: false, locked: true, xp: 95 },
      { id: 3, title: 'Nim-Sum Calculation', description: 'Mathematical foundation', duration: '20 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 125 },
      { id: 4, title: 'Advanced Pile Management', description: 'Complex pile strategies', duration: '25 min', difficulty: 'Intermediate' as const, completed: false, locked: true, xp: 155 },
      { id: 5, title: 'Variant Games', description: 'Misère and other variants', duration: '30 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 185 },
      { id: 6, title: 'AI Competition', description: 'Computer tournaments', duration: '35 min', difficulty: 'Advanced' as const, completed: false, locked: true, xp: 220 }
    ]
  }
};

const GameDetail = () => {
  const { gameId } = useParams();
  const game = gameData[gameId as keyof typeof gameData];

  if (!game) {
    return (
      <div className="min-h-screen bg-card text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
          <Link to="/">
            <Button>Return to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-card text-foreground">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Dashboard</span>
              </Link>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              GameMastery
            </h1>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Game Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className={`w-24 h-24 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center text-4xl`}>
              {game.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{game.name}</h1>
              <p className="text-xl text-slate-300 mb-4">{game.description}</p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-yellow-500/20 text-yellow-400">Level {game.level}</Badge>
                <Badge className="bg-blue-500/20 text-blue-400">{game.xp.toLocaleString()} XP</Badge>
                <Badge className="bg-green-500/20 text-green-400">
                  {game.completedLessons}/{game.totalLessons} Lessons
                </Badge>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Overall Progress</span>
                    <span>{game.progress}%</span>
                  </div>
                  <Progress value={game.progress} className="h-3" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{game.completedLessons}</div>
                    <p className="text-sm text-slate-400">Lessons Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{game.xp}</div>
                    <p className="text-sm text-slate-400">XP Earned</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{game.level}</div>
                    <p className="text-sm text-slate-400">Current Level</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lessons Grid */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Learning Path</h2>
          <div className="grid gap-4">
            {game.lessons.map((lesson) => (
              <Card key={lesson.id} className="border-slate-700 transition-all duration-300 bg-slate-800/50 hover:bg-slate-800/70 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{lesson.title}</h3>
                        <p className="text-slate-400">{lesson.description}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="outline" className={`
                            ${lesson.difficulty === 'Beginner' ? 'border-green-500 text-green-400' : ''}
                            ${lesson.difficulty === 'Intermediate' ? 'border-yellow-500 text-yellow-400' : ''}
                            ${lesson.difficulty === 'Advanced' ? 'border-red-500 text-red-400' : ''}
                          `}>
                            {lesson.difficulty}
                          </Badge>
                          <span className="text-sm text-slate-400">{lesson.duration}</span>
                          <span className="text-sm text-blue-400">+{lesson.xp} XP</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/learn/${gameId}/${lesson.id}`}>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Start Lesson
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practice Section */}
        <Card className="mt-8 bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Practice Arena
            </CardTitle>
            <CardDescription>
              Apply your knowledge with AI-powered practice sessions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={`/practice`} className="flex-1">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Enter Practice Mode
                </Button>
              </Link>
              <Link to={`/practice`} className="flex-1">
                <Button variant="outline" className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/20">
                  Daily Challenge
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GameDetail;
