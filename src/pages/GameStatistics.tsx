import React, { useState } from 'react';
import { gameStats, GameStat } from '@/data/gameStats';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GameIcon } from '@/components/ui/GameIcon';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const sortOptions = [
  { label: 'Game Name', value: 'name' },
  { label: 'Total Time', value: 'totalTimePlayed' },
  { label: 'Accuracy', value: 'accuracy' },
];

const COLORS = ['#34d399', '#f87171']; // green for wins, red for losses

function formatTime(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s]
    .map((v) => v.toString().padStart(2, '0'))
    .join(':');
}

const GameStatistics: React.FC = () => {
  const [sortBy, setSortBy] = useState('name');

  const sortedStats = [...gameStats].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'totalTimePlayed') return b.totalTimePlayed - a.totalTimePlayed;
    if (sortBy === 'accuracy') return b.accuracy - a.accuracy;
    return 0;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-4 flex items-center">
          <Link to="/" className="flex items-center space-x-2 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent">
            Game Statistics
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your performance across all games. Analyze your wins, session times, and accuracy to master every challenge!
          </p>
        </div>

        {/* Sorting Tabs */}
        <div className="flex justify-center mb-8">
          <Tabs value={sortBy} onValueChange={setSortBy}>
            <TabsList>
              {sortOptions.map((opt) => (
                <TabsTrigger key={opt.value} value={opt.value}>
                  {opt.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedStats.map((game) => (
            <Card key={game.id} className="glass-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 group">
              <CardHeader className="pb-2">
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <GameIcon game={game.id} />
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors text-center">
                  {game.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-center">
                  Total Time Played: <span className="font-semibold">{formatTime(game.totalTimePlayed)}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <Badge variant="outline" className="border-border">
                    Wins: <span className="ml-1 text-green-500 font-bold">{game.totalWins}</span>
                  </Badge>
                  <Badge variant="outline" className="border-border">
                    Losses: <span className="ml-1 text-red-500 font-bold">{game.totalLosses}</span>
                  </Badge>
                </div>

                {/* Win Ratio Pie Chart */}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="w-full flex flex-col items-center">
                        <span className="text-xs mb-1 text-muted-foreground">Win Ratio</span>
                        <ResponsiveContainer width="100%" height={80}>
                          <PieChart>
                            <Pie
                              dataKey="value"
                              data={[
                                { name: 'Wins', value: game.totalWins },
                                { name: 'Losses', value: game.totalLosses },
                              ]}
                              cx="50%"
                              cy="50%"
                              innerRadius={18}
                              outerRadius={32}
                              fill="#8884d8"
                              paddingAngle={2}
                              label={({ percent }) => `${Math.round(percent * 100)}%`}
                            >
                              <Cell key="win" fill="#34d399" />
                              <Cell key="loss" fill="#f87171" />
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-xs">
                        <div><span className="text-green-500 font-bold">Wins:</span> {game.totalWins}</div>
                        <div><span className="text-red-500 font-bold">Losses:</span> {game.totalLosses}</div>
                        <div><span className="text-primary font-bold">Win Rate:</span> {game.totalWins + game.totalLosses > 0 ? Math.round((game.totalWins / (game.totalWins + game.totalLosses)) * 100) : 0}%</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                {/* Wins vs Losses Bar Chart */}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="w-full flex flex-col items-center">
                        <span className="text-xs mb-1 text-muted-foreground">Wins vs Losses</span>
                        <ResponsiveContainer width="100%" height={60}>
                          <BarChart data={[
                            { name: 'Wins', value: game.totalWins },
                            { name: 'Losses', value: game.totalLosses },
                          ]}>
                            <XAxis dataKey="name" hide tick={false} axisLine={false} />
                            <YAxis hide />
                            <Bar dataKey="value">
                              <Cell fill="#34d399" />
                              <Cell fill="#f87171" />
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-xs">
                        <div><span className="text-green-500 font-bold">Wins:</span> {game.totalWins}</div>
                        <div><span className="text-red-500 font-bold">Losses:</span> {game.totalLosses}</div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                {/* Session Duration Line Chart */}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="w-full flex flex-col items-center">
                        <span className="text-xs mb-1 text-muted-foreground">Session Durations</span>
                        <ResponsiveContainer width="100%" height={60}>
                          <LineChart data={game.sessionDurations.map((d, i) => ({ session: i + 1, duration: d }))}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="session" hide />
                            <YAxis hide />
                            <Line type="monotone" dataKey="duration" stroke="#6366f1" strokeWidth={2} dot={false} />
                            <RechartsTooltip formatter={(v: number) => `${Math.round(v / 60)}m ${v % 60}s`} labelFormatter={(l: number) => `Session ${l}`} />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-xs">Shows the duration (in seconds) of your last 10 sessions.</div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                {/* Accuracy Progress Bar */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Accuracy</span>
                    <span className="font-semibold text-primary">{game.accuracy}%</span>
                  </div>
                  <Progress value={game.accuracy} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameStatistics; 