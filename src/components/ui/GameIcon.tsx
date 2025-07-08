
import { Puzzle, Gamepad, Square, Users, Activity, Book, Flag, Clock, Star, Grid3X3, Plus, Layers, Trophy, Circle, Map, Dice1, Code, Image, Minus, X } from 'lucide-react';
import React from 'react';

const iconMap: Record<string, any> = {
  chess: Trophy,
  sudoku: Puzzle,
  'rubiks-cube': Square,
  'rubik-cube': Square,
  crossword: Grid3X3,
  go: Circle,
  poker: Flag,
  tetris: Square,
  wordle: Book,
  mahjong: Layers,
  backgammon: Gamepad,
  scrabble: Grid3X3,
  bridge: Flag,
  checkers: Circle,
  kakuro: Grid3X3,
  minesweeper: Plus,
  'jigsaw-puzzles': Puzzle,
  'jigsaw': Puzzle,
  shogi: Trophy,
  mastermind: Circle,
  set: Layers,
  nim: Flag,
  strategy: Gamepad,
  logic: Activity,
  community: Users,
  learning: Book,
  challenge: Flag,
  time: Clock,
  star: Star,
};

const colorMap: Record<string, string> = {
  chess: '#FFD600',
  sudoku: '#00B8D9',
  'rubiks-cube': '#FF7043',
  'rubik-cube': '#FF7043',
  crossword: '#AB47BC',
  go: '#4CAF50',
  poker: '#F44336',
  tetris: '#2196F3',
  wordle: '#FFEB3B',
  mahjong: '#FF9800',
  backgammon: '#795548',
  scrabble: '#9C27B0',
  bridge: '#607D8B',
  checkers: '#E91E63',
  kakuro: '#3F51B5',
  minesweeper: '#9E9E9E',
  'jigsaw-puzzles': '#009688',
  'jigsaw': '#009688',
  shogi: '#FF5722',
  mastermind: '#673AB7',
  set: '#00BCD4',
  nim: '#FFC107',
  strategy: '#7C3AED',
  logic: '#00E676',
  community: '#42A5F5',
  learning: '#AB47BC',
  challenge: '#FFCA28',
  time: '#29B6F6',
  star: '#FFD600',
};

export function GameIcon({ game, color, size = 40 }: { game: string; color?: string; size?: number }) {
  const Icon = iconMap[game] || Puzzle;
  const iconColor = color || colorMap[game] || '#FFD600';
  
  return (
    <div
      className="w-14 h-14 flex items-center justify-center rounded-2xl glass-card relative overflow-hidden"
      style={{
        boxShadow: `0 4px 24px 0 rgba(0,0,0,0.3), 0 0 20px 2px ${iconColor}33`,
      }}
    >
      {/* Glow effect background */}
      <div
        className="absolute inset-0 rounded-2xl opacity-20"
        style={{
          background: `radial-gradient(circle at center, ${iconColor}40 0%, transparent 70%)`
        }}
      />
      
      <Icon
        size={size}
        color={iconColor}
        className="relative z-10 drop-shadow-lg"
        style={{
          filter: `drop-shadow(0 0 8px ${iconColor}88) drop-shadow(0 2px 4px rgba(0,0,0,0.3))`
        }}
      />
      
      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${iconColor}22, 0 0 16px 2px ${iconColor}22`
        }}
      />
    </div>
  );
}
