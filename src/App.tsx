import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GameDetail from "./pages/GameDetail";
import Learn from "./pages/Learn";
import LessonDetail from "./pages/LessonDetail";
import Community from "./pages/Community";
import Practice from "./pages/Practice";
import QuickStart from "./pages/practice/QuickStart";
import Analyze from "./pages/practice/Analyze";
import AIPractice from "./pages/practice/AIPractice";
import Tournament from "./pages/practice/Tournament";
import GamePractice from "./pages/practice/GamePractice";
import GamePracticeDashboard from "./pages/practice/GamePracticeDashboard";
import DailyChallenges from "./pages/practice/DailyChallenges";
import DailyChallengeSolver from "./pages/practice/DailyChallengeSolver";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import GameStatistics from "./pages/GameStatistics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/game/:gameId" element={<GameDetail />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:gameId/:lessonId" element={<LessonDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/:gameId" element={<GamePractice />} />
          <Route path="/practice/:gameId/dashboard" element={<GamePracticeDashboard />} />
          <Route path="/practice/daily-challenges" element={<DailyChallenges />} />
          <Route path="/practice/daily-challenge/:challengeId" element={<DailyChallengeSolver />} />
          <Route path="/practice/quick-start" element={<QuickStart />} />
          <Route path="/practice/analyze" element={<Analyze />} />
          <Route path="/practice/ai-practice" element={<AIPractice />} />
          <Route path="/practice/tournament" element={<Tournament />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stats" element={<GameStatistics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
