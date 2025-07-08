export interface GameLesson {
  id: string;
  title: string;
  description: string;
  video: {
    title: string;
    url: string;
    description: string;
  };
  theory: string[];
  interactive: {
    title: string;
    description: string;
    type: 'chess-board' | 'sudoku-grid' | 'rubiks-cube' | 'crossword-grid' | 'go-board' | 'poker-table' | 'tetris-board' | 'wordle-grid' | 'mahjong-table' | 'backgammon-board' | 'scrabble-board' | 'bridge-table' | 'checkers-board' | 'kakuro-grid' | 'minesweeper-grid' | 'jigsaw-board' | 'shogi-board' | 'mastermind-board' | 'set-cards' | 'nim-board';
  };
  quiz: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }[];
  xp: number;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface GameData {
  id: string;
  name: string;
  icon: string;
  color: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  totalLessons: number;
  completedLessons: number;
  progress: number;
  estimatedTime: string;
  description: string;
  category: 'Strategy' | 'Logic' | 'Card' | 'Puzzle' | 'Word';
  lessons: GameLesson[];
  practiceModules: {
    name: string;
    difficulty: string;
    time: string;
    xp: string;
    description: string;
  }[];
}

export const allGames: GameData[] = [
  {
    id: 'chess',
    name: 'Chess',
    icon: '♛',
    color: 'from-gray-700 to-gray-900',
    difficulty: 'Advanced',
    totalLessons: 6,
    completedLessons: 2,
    progress: 33,
    estimatedTime: '12 hours',
    description: 'Master the royal game with strategic thinking and tactical awareness',
    category: 'Strategy',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Chess',
        description: 'Learn the basics of chess: rules, board setup, and piece movement',
        video: { title: 'Chess Basics', url: 'https://www.youtube.com/embed/OCSbzArwB10', description: 'Overview of chess rules and board setup' },
        theory: ['Understand chess objectives: checkmate the opponent\'s king', 'Learn about the 64-square chessboard with alternating colors', 'Identify all pieces: King, Queen, Rook, Bishop, Knight, and Pawn'],
        interactive: { title: 'Set up the Chess Board', description: 'Practice setting up a chessboard and identify each piece', type: 'chess-board' },
        quiz: [{ question: 'How many squares are on a chessboard?', options: ['32', '48', '64', '72'], correct: 2, explanation: 'A standard chessboard has 64 squares arranged in an 8x8 grid.' }],
        xp: 100, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Chess Piece Movements',
        description: 'Learn how each chess piece moves and captures',
        video: { title: 'How Chess Pieces Move', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Detailed movement of each chess piece' },
        theory: ['Rook moves horizontally and vertically any number of squares', 'Bishop moves diagonally any number of squares', 'Queen combines rook and bishop movements'],
        interactive: { title: 'Practice Piece Movements', description: 'Move pieces to correct squares in movement drills', type: 'chess-board' },
        quiz: [{ question: 'Which piece moves in an L-shape?', options: ['Bishop', 'Knight', 'Rook', 'Queen'], correct: 1, explanation: 'The Knight is the only piece that moves in an L-shape.' }],
        xp: 150, duration: '60 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Opening Principles',
        description: 'Master the fundamental principles of chess openings',
        video: { title: 'Chess Opening Principles', url: 'https://www.youtube.com/embed/21L45Qo6EIY', description: 'Basic chess opening strategies and principles' },
        theory: ['Control the center with pawns (e4, d4, e5, d5)', 'Develop knights before bishops for flexibility', 'Castle early to ensure king safety'],
        interactive: { title: 'Opening Setup Practice', description: 'Execute simple opening setups following the principles', type: 'chess-board' },
        quiz: [{ question: 'Should you develop knights or bishops first?', options: ['Bishops', 'Knights', 'Queen', 'Rooks'], correct: 1, explanation: 'Generally, knights should be developed before bishops for more flexibility.' }],
        xp: 200, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Tactical Patterns',
        description: 'Learn essential chess tactics: pins, forks, and skewers',
        video: { title: 'Chess Tactics Explained', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Common tactical ideas: pins, forks, skewers' },
        theory: ['Pin: attacking a piece that cannot move without exposing a more valuable piece', 'Fork: attacking two or more pieces simultaneously', 'Skewer: forcing a valuable piece to move and capturing the piece behind it'],
        interactive: { title: 'Tactical Puzzles', description: 'Solve basic tactical puzzles to practice pattern recognition', type: 'chess-board' },
        quiz: [{ question: 'What is a fork in chess?', options: ['A type of endgame', 'Attacking two pieces at once', 'A pawn move', 'A defensive tactic'], correct: 1, explanation: 'A fork is when one piece attacks two or more enemy pieces simultaneously.' }],
        xp: 250, duration: '90 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Checkmates and Endgames',
        description: 'Master basic checkmate patterns and endgame principles',
        video: { title: 'Basic Checkmates', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Basic checkmate patterns and endgame principles' },
        theory: ['Queen and king vs king checkmate technique', 'Rook and king vs king checkmate pattern', 'Opposition in king and pawn endgames'],
        interactive: { title: 'Checkmate Practice', description: 'Solve basic checkmate in one and two puzzles', type: 'chess-board' },
        quiz: [{ question: 'Can a lone king checkmate an opponent?', options: ['Yes', 'No', 'Only with pawns', 'Only in special cases'], correct: 1, explanation: 'A lone king cannot deliver checkmate by itself.' }],
        xp: 300, duration: '100 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Chess Challenge',
        description: 'Put everything together in a complete game analysis',
        video: { title: 'Complete Chess Game', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Full game walkthrough combining all learned concepts' },
        theory: ['Combining opening principles with tactical awareness', 'Transitioning from opening to middlegame', 'Converting advantages in the endgame'],
        interactive: { title: 'Complete Game Analysis', description: 'Play a full game with guidance applying all learned concepts', type: 'chess-board' },
        quiz: [{ question: 'Should you rush to attack without development?', options: ['Yes, always attack', 'No, develop first', 'Only in blitz', 'Only with white'], correct: 1, explanation: 'Premature attacks without proper development usually fail.' }],
        xp: 400, duration: '120 min', difficulty: 'Advanced'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick chess puzzle solving' },
      { name: 'Tactical Training', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Solve tactical puzzles' },
      { name: 'Endgame Studies', difficulty: 'Advanced', time: '30 min', xp: '250', description: 'Master endgame positions' },
      { name: 'Opening Drills', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Practice opening principles' }
    ]
  },
  {
    id: 'sudoku',
    name: 'Sudoku',
    icon: '9',
    color: 'from-blue-600 to-blue-800',
    difficulty: 'Intermediate',
    totalLessons: 6,
    completedLessons: 1,
    progress: 17,
    estimatedTime: '8 hours',
    description: 'Master number placement puzzles with logical deduction',
    category: 'Logic',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Sudoku',
        description: 'Learn the basic rules and structure of Sudoku puzzles',
        video: { title: 'Sudoku Basics', url: 'https://www.youtube.com/embed/C6-jOJGL7jE', description: 'Understanding the Sudoku grid and numbers' },
        theory: ['Sudoku is played on a 9x9 grid divided into nine 3x3 subgrids', 'Fill each row with numbers 1-9 without repetition', 'Fill each column with numbers 1-9 without repetition'],
        interactive: { title: 'Basic Sudoku', description: 'Solve a simple 4x4 Sudoku to understand the rules', type: 'sudoku-grid' },
        quiz: [{ question: 'Can a number repeat in a row?', options: ['Yes', 'No', 'Only sometimes', 'Only in hard puzzles'], correct: 1, explanation: 'No, each number 1-9 must appear exactly once in each row.' }],
        xp: 80, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Scanning Techniques',
        description: 'Learn efficient scanning methods for number placement',
        video: { title: 'Sudoku Scanning Methods', url: 'https://www.youtube.com/embed/C3JHO-PNbAo', description: 'Row and column elimination techniques' },
        theory: ['Scan rows to find missing numbers and their possible positions', 'Scan columns to eliminate possibilities', 'Scan subgrids to identify where numbers can go'],
        interactive: { title: 'Scanning Practice', description: 'Complete simple 6x6 puzzles using scanning techniques', type: 'sudoku-grid' },
        quiz: [{ question: 'Should you scan by row or box first?', options: ['Row', 'Box', 'Column', 'It doesn\'t matter'], correct: 3, explanation: 'You can start with any method, but be systematic.' }],
        xp: 120, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Crosshatching Strategy',
        description: 'Master crosshatching for systematic number placement',
        video: { title: 'Crosshatching Technique', url: 'https://www.youtube.com/embed/YCpNu8t6vN8', description: 'Mastering crosshatching for medium puzzles' },
        theory: ['Crosshatching involves analyzing each number 1-9 systematically', 'For each number, scan all rows and columns to find placement', 'Use elimination to narrow down possible positions'],
        interactive: { title: 'Crosshatching Practice', description: 'Solve medium 9x9 puzzles using crosshatching', type: 'sudoku-grid' },
        quiz: [{ question: 'Is crosshatching better for larger grids?', options: ['Yes', 'No', 'Only sometimes', 'Only for experts'], correct: 0, explanation: 'Yes, crosshatching becomes more effective on larger grids.' }],
        xp: 160, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Advanced Pencil Marking',
        description: 'Learn efficient pencil marking techniques for complex puzzles',
        video: { title: 'Pencil Mark Strategies', url: 'https://www.youtube.com/embed/LIx96nN9Ty8', description: 'Efficient marking of possible values' },
        theory: ['Use pencil marks to track possible numbers in each cell', 'Update pencil marks systematically when placing numbers', 'Look for naked singles (cells with one candidate)'],
        interactive: { title: 'Pencil Mark Practice', description: 'Complete advanced Sudoku with minimal erasing', type: 'sudoku-grid' },
        quiz: [{ question: 'Should you pencil in all possibilities?', options: ['Yes, always', 'No, never', 'Only when stuck', 'Only for hard puzzles'], correct: 2, explanation: 'Pencil in candidates when you need to track possibilities.' }],
        xp: 200, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'X-Wing and Swordfish Patterns',
        description: 'Master advanced elimination patterns for expert puzzles',
        video: { title: 'Advanced Sudoku Patterns', url: 'https://www.youtube.com/embed/N0OKFzGdtfE', description: 'Advanced elimination patterns' },
        theory: ['X-Wing: When a number appears in only two positions in two parallel lines', 'Swordfish: Extension of X-Wing pattern involving three lines', 'These patterns allow elimination in intersecting lines'],
        interactive: { title: 'Pattern Recognition', description: 'Solve expert-level puzzles using advanced patterns', type: 'sudoku-grid' },
        quiz: [{ question: 'What is an X-Wing in Sudoku?', options: ['A type of aircraft', 'An elimination pattern', 'A solving mistake', 'A pencil mark style'], correct: 1, explanation: 'X-Wing is an advanced elimination pattern.' }],
        xp: 280, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Sudoku Challenge',
        description: 'Apply all techniques to solve expert-level timed puzzles',
        video: { title: 'Expert Sudoku Solving', url: 'https://www.youtube.com/embed/r-psQHgwHgs', description: 'Solving an expert puzzle under timed conditions' },
        theory: ['Combine all solving techniques efficiently', 'Develop a systematic approach to puzzle solving', 'Manage time effectively in competitive settings'],
        interactive: { title: 'Timed Challenge', description: 'Solve a challenging timed Sudoku using all learned techniques', type: 'sudoku-grid' },
        quiz: [{ question: 'Should you rush through the puzzle?', options: ['Yes, speed is everything', 'No, accuracy first', 'Only in competitions', 'Only easy parts'], correct: 1, explanation: 'Accuracy is more important than speed; mistakes cost more time.' }],
        xp: 350, duration: '100 min', difficulty: 'Expert'
      }
    ],
    practiceModules: [
      { name: 'Easy Puzzles', difficulty: 'Beginner', time: '10 min', xp: '60', description: 'Simple number placement practice' },
      { name: 'Medium Challenge', difficulty: 'Intermediate', time: '20 min', xp: '120', description: 'Intermediate logic puzzles' },
      { name: 'Expert Mode', difficulty: 'Advanced', time: '45 min', xp: '300', description: 'Complex pattern recognition' },
      { name: 'Speed Rounds', difficulty: 'Intermediate', time: '5 min', xp: '80', description: 'Quick solving practice' }
    ]
  },
  {
    id: 'rubiks-cube',
    name: "Rubik's Cube",
    icon: '🧩',
    color: 'from-red-500 to-orange-600',
    difficulty: 'Advanced',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '15 hours',
    description: 'Learn to solve the classic 3D puzzle through algorithmic methods',
    category: 'Logic',
    lessons: [
      {
        id: '1',
        title: "Introduction to Rubik's Cube",
        description: 'Cube notation and basic turns.',
        video: { title: 'Cube Notation and Turns', url: 'https://www.youtube.com/embed/7Ron6MN45LY', description: 'Cube notation and basic turns.' },
        theory: [
          'Understanding cube faces and basic algorithms.'
        ],
        interactive: { title: 'Solve One Face', description: 'Practice solving one face of the cube.', type: 'rubiks-cube' },
        quiz: [
          { question: "How many faces does a Rubik's Cube have?", options: ['4', '6', '8', '12'], correct: 1, explanation: "A standard Rubik's Cube has 6 faces." },
          { question: 'What does U mean in cube notation?', options: ['Up face', 'Under face', 'Upper left', 'Unsolved'], correct: 0, explanation: 'U stands for the Up face.' },
          { question: 'Should you solve one layer at a time?', options: ['Yes', 'No', 'Only for experts', 'Never'], correct: 0, explanation: 'Layer-by-layer is the standard beginner method.' },
          { question: 'Can colors be in the wrong position on a solved face?', options: ['Yes', 'No', 'Only on corners', 'Only on edges'], correct: 0, explanation: 'A face can be solved but the cube not fully solved.' },
          { question: "What is the goal of the Rubik's Cube?", options: ["Solve one face", 'Solve all faces', 'Make patterns', 'Speed solve'], correct: 1, explanation: 'The goal is to solve all faces.' }
        ],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Layer-by-Layer Solving',
        description: 'Solve the cube layer by layer',
        video: { title: 'Layer-by-Layer Solving', url: 'https://www.youtube.com/embed/DzX-B0-WgXc', description: 'Solving the cube layer by layer' },
        theory: ['Solve the cube one layer at a time', 'Use algorithms to move pieces to their correct positions'],
        interactive: { title: 'Layer-by-Layer Practice', description: 'Solve the cube layer by layer', type: 'rubiks-cube' },
        quiz: [{ question: 'What is the first layer of the cube?', options: ['Up', 'Down', 'Middle', 'None'], correct: 0, explanation: 'The first layer is the Up layer.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Cross-Corner Swap',
        description: 'Solve the cube using the cross-corner swap algorithm',
        video: { title: 'Cross-Corner Swap', url: 'https://www.youtube.com/embed/XjXJ5g0XjFc', description: 'Solving the cube using the cross-corner swap algorithm' },
        theory: ['Cross-corner swap algorithm', 'Useful for solving the cube'],
        interactive: { title: 'Cross-Corner Swap Practice', description: 'Solve the cube using the cross-corner swap algorithm', type: 'rubiks-cube' },
        quiz: [{ question: 'What is the purpose of the cross-corner swap?', options: ['To solve the cube', 'To scramble the cube', 'To mix the cube', 'To solve the middle layer'], correct: 0, explanation: 'The cross-corner swap is used to solve the cube.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'F2L Algorithm',
        description: 'Solve the cube using the F2L algorithm',
        video: { title: 'F2L Algorithm', url: 'https://www.youtube.com/embed/XjXJ5g0XjFc', description: 'Solving the cube using the F2L algorithm' },
        theory: ['F2L algorithm', 'Useful for solving the cube'],
        interactive: { title: 'F2L Practice', description: 'Solve the cube using the F2L algorithm', type: 'rubiks-cube' },
        quiz: [{ question: 'What is the purpose of the F2L algorithm?', options: ['To solve the cube', 'To scramble the cube', 'To mix the cube', 'To solve the middle layer'], correct: 0, explanation: 'The F2L algorithm is used to solve the cube.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'OLL Algorithm',
        description: 'Solve the cube using the OLL algorithm',
        video: { title: 'OLL Algorithm', url: 'https://www.youtube.com/embed/XjXJ5g0XjFc', description: 'Solving the cube using the OLL algorithm' },
        theory: ['OLL algorithm', 'Useful for solving the cube'],
        interactive: { title: 'OLL Practice', description: 'Solve the cube using the OLL algorithm', type: 'rubiks-cube' },
        quiz: [{ question: 'What is the purpose of the OLL algorithm?', options: ['To solve the cube', 'To scramble the cube', 'To mix the cube', 'To solve the middle layer'], correct: 0, explanation: 'The OLL algorithm is used to solve the cube.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'PLL Algorithm',
        description: 'Solve the cube using the PLL algorithm',
        video: { title: 'PLL Algorithm', url: 'https://www.youtube.com/embed/XjXJ5g0XjFc', description: 'Solving the cube using the PLL algorithm' },
        theory: ['PLL algorithm', 'Useful for solving the cube'],
        interactive: { title: 'PLL Practice', description: 'Solve the cube using the PLL algorithm', type: 'rubiks-cube' },
        quiz: [{ question: 'What is the purpose of the PLL algorithm?', options: ['To solve the cube', 'To scramble the cube', 'To mix the cube', 'To solve the middle layer'], correct: 0, explanation: 'The PLL algorithm is used to solve the cube.' }],
        xp: 350, duration: '100 min', difficulty: 'Advanced'
      }
    ],
    practiceModules: []
  },
  {
    id: 'go',
    name: 'Go',
    icon: '⚫',
    color: 'from-slate-600 to-slate-800',
    difficulty: 'Expert',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '20 hours',
    description: 'Master the ancient game of territorial control and strategic thinking',
    category: 'Strategy',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Go',
        description: 'Go board, stones, and game objectives.',
        video: { title: 'Go Basics', url: '', description: 'Go board, stones, and game objectives.' },
        theory: ['Rules for placing stones and capturing.'],
        interactive: { title: 'Play Basic 9x9 Go', description: 'Play basic 9x9 Go games.', type: 'go-board' },
        quiz: [
          { question: 'How many intersections are on a 9x9 Go board?', options: ['81', '64', '100', '72'], correct: 0, explanation: 'A 9x9 Go board has 81 intersections.' },
          { question: 'Can you place stones on occupied intersections?', options: ['Yes', 'No', 'Only in endgame', 'Only with permission'], correct: 1, explanation: 'You cannot place stones on occupied intersections.' },
          { question: 'What is the goal in Go?', options: ['Capture all stones', 'Control territory', 'Checkmate', 'Draw'], correct: 1, explanation: 'The goal is to control more territory than your opponent.' },
          { question: 'How are stones captured?', options: ['By surrounding them', 'By jumping over', 'By matching colors', 'By removing lines'], correct: 0, explanation: 'Stones are captured by surrounding them on all orthogonal sides.' },
          { question: 'Can stones form unbreakable groups?', options: ['Yes', 'No', 'Only in corners', 'Only with 3 stones'], correct: 0, explanation: 'Groups with two eyes are unbreakable.' }
        ],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Capturing Stones',
        description: 'Liberties and capturing techniques.',
        video: { title: 'Capturing Stones', url: '', description: 'Liberties and capturing techniques.' },
        theory: ['Reducing liberties to capture.'],
        interactive: { title: 'Capturing Exercises', description: 'Solve capturing exercises.', type: 'go-board' },
        quiz: [
          { question: 'How many liberties does a lone stone have?', options: ['2', '3', '4', '5'], correct: 2, explanation: 'A lone stone in the center has 4 liberties.' },
          { question: 'Can a group with no liberties survive?', options: ['Yes', 'No', 'Only with help', 'Only in corners'], correct: 1, explanation: 'A group with no liberties is captured.' },
          { question: 'Can capturing stones reverse the game?', options: ['Yes', 'No', 'Only in endgame', 'Only with big groups'], correct: 0, explanation: 'Capturing can change the balance of the game.' },
          { question: 'Should you always aim to capture stones?', options: ['Yes', 'No', 'Depends on position', 'Only in endgame'], correct: 2, explanation: 'Capturing is important, but territory is the main goal.' },
          { question: 'Can a group surround multiple enemy stones?', options: ['Yes', 'No', 'Only in corners', 'Only with 3 stones'], correct: 0, explanation: 'Groups can surround and capture multiple enemy stones.' }
        ],
        xp: 120, duration: '40 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Building Territory',
        description: 'Creating secure territory.',
        video: { title: 'Building Territory', url: '', description: 'Creating secure territory.' },
        theory: ['Territory vs. influence strategies.'],
        interactive: { title: 'Territory Problems', description: 'Solve territory-building problems.', type: 'go-board' },
        quiz: [
          { question: 'Can territory be built without capturing?', options: ['Yes', 'No', 'Only in corners', 'Only with big groups'], correct: 0, explanation: 'You can build territory without capturing.' },
          { question: 'Is corner control important in Go?', options: ['Yes', 'No', 'Only for beginners', 'Only in endgame'], correct: 0, explanation: 'Corners are easier to secure and are important.' },
          { question: 'Should you prioritize territory over influence?', options: ['Yes', 'No', 'Depends on style', 'Only in endgame'], correct: 2, explanation: 'Both are important; balance is key.' },
          { question: 'Can a territory be invaded?', options: ['Yes', 'No', 'Only in corners', 'Only with big groups'], correct: 0, explanation: 'Territory can be invaded if not secure.' },
          { question: 'Are small groups safe inside large territories?', options: ['Yes', 'No', 'Only in corners', 'Only with 3 stones'], correct: 1, explanation: 'Small groups can be attacked even inside large territories.' }
        ],
        xp: 140, duration: '50 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Ko Fights and Special Situations',
        description: 'Understanding ko, seki, and life-and-death.',
        video: { title: 'Ko Fights and Special Situations', url: '', description: 'Understanding ko, seki, and life-and-death.' },
        theory: ['Handling special repeating positions.'],
        interactive: { title: 'Ko Fight Problems', description: 'Solve ko fight problems.', type: 'go-board' },
        quiz: [
          { question: 'What is a ko in Go?', options: ['A repeating position', 'A type of stone', 'A corner', 'A territory'], correct: 0, explanation: 'Ko is a repeating position that cannot be immediately recaptured.' },
          { question: 'Can you immediately recapture a ko?', options: ['Yes', 'No', 'Only in endgame', 'Only with permission'], correct: 1, explanation: 'You must play elsewhere before recapturing a ko.' },
          { question: 'Can a seki occur in the middle of the board?', options: ['Yes', 'No', 'Only in corners', 'Only with big groups'], correct: 0, explanation: 'Seki (mutual life) can occur anywhere.' },
          { question: 'Should you ignore life-and-death problems?', options: ['Yes', 'No', 'Only in endgame', 'Only with big groups'], correct: 1, explanation: 'Life-and-death is critical in Go.' },
          { question: 'Can ko fights decide a game?', options: ['Yes', 'No', 'Only in endgame', 'Only with big groups'], correct: 0, explanation: 'Ko fights can be decisive.' }
        ],
        xp: 160, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Opening and Midgame Strategies',
        description: 'Best openings and shape efficiency.',
        video: { title: 'Opening and Midgame Strategies', url: '', description: 'Best openings and shape efficiency.' },
        theory: ['Fuseki patterns and shape building.'],
        interactive: { title: 'Go Openings', description: 'Play Go openings.', type: 'go-board' },
        quiz: [
          { question: 'Should you play in the corners first?', options: ['Yes', 'No', 'Only for beginners', 'Only in endgame'], correct: 0, explanation: 'Corners are easier to secure and are important.' },
          { question: 'Are open shapes more efficient?', options: ['Yes', 'No', 'Depends on style', 'Only in endgame'], correct: 0, explanation: 'Open shapes are generally more efficient.' },
          { question: 'Can early attacks weaken your structure?', options: ['Yes', 'No', 'Only for beginners', 'Only in endgame'], correct: 0, explanation: 'Early attacks can leave weaknesses.' },
          { question: 'Should you fight every small battle?', options: ['Yes', 'No', 'Depends on style', 'Only in endgame'], correct: 1, explanation: 'Choose your battles wisely.' },
          { question: 'Can you build a wall for influence?', options: ['Yes', 'No', 'Only for beginners', 'Only in endgame'], correct: 0, explanation: 'Walls can be used for influence.' }
        ],
        xp: 180, duration: '70 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Go Challenge',
        description: 'Full game analysis.',
        video: { title: 'Final Go Challenge', url: '', description: 'Full game analysis.' },
        theory: ['Combining territory, influence, and endgame moves.'],
        interactive: { title: 'Complete Go Game', description: 'Play a complete Go game.', type: 'go-board' },
        quiz: [
          { question: 'Should you focus on borders in the endgame?', options: ['Yes', 'No', 'Only for beginners', 'Only in endgame'], correct: 0, explanation: 'Borders are important in the endgame.' },
          { question: 'Can endgame moves flip a game result?', options: ['Yes', 'No', 'Only for beginners', 'Only in endgame'], correct: 0, explanation: 'Endgame moves can be decisive.' },
          { question: 'How can you secure weak groups?', options: ['By connecting', 'By attacking', 'By ignoring', 'By sacrificing'], correct: 0, explanation: 'Connecting weak groups is a key defensive technique.' },
          { question: 'Why is reading ahead critical in Go?', options: ['To plan', 'To attack', 'To defend', 'All of the above'], correct: 3, explanation: 'Reading ahead is essential for all aspects of Go.' },
          { question: 'Should you gamble in ko fights late in the game?', options: ['Yes', 'No', 'Depends on position', 'Only in endgame'], correct: 2, explanation: 'Gambling in ko fights is risky and depends on the situation.' }
        ],
        xp: 200, duration: '90 min', difficulty: 'Expert'
      }
    ],
    practiceModules: []
  },
  {
    id: 'checkers',
    name: 'Checkers',
    icon: '🔴',
    color: 'from-red-600 to-red-800',
    difficulty: 'Intermediate',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '6 hours',
    description: 'Master the classic strategy game of captures and king promotion',
    category: 'Strategy',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Checkers',
        description: 'Game setup and basic rules.',
        video: { title: 'Checkers Basics', url: '', description: 'Game setup and basic rules.' },
        theory: ['Moving, jumping, and capturing.'],
        interactive: { title: 'Basic Checkers Setups', description: 'Play basic Checkers setups.', type: 'checkers-board' },
        quiz: [
          { question: 'Can pieces move backward in the beginning?', options: ['Yes', 'No', 'Only kings', 'Only after jumping'], correct: 1, explanation: 'Only kings can move backward.' },
          { question: 'How do you capture in Checkers?', options: ['Jump over', 'Slide', 'Swap', 'Stack'], correct: 0, explanation: 'You capture by jumping over an opponent.' },
          { question: 'Can you skip a capture opportunity?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 1, explanation: 'You must capture if able.' },
          { question: 'What is the goal in Checkers?', options: ['Capture all', 'Reach king row', 'Block opponent', 'Draw'], correct: 0, explanation: 'The goal is to capture all opponent pieces or block them.' },
          { question: 'How many squares are used on the board?', options: ['32', '64', '16', '48'], correct: 0, explanation: 'Only the 32 dark squares are used.' }
        ],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'King Piece Strategy',
        description: 'Reaching the king row.',
        video: { title: 'King Piece Strategy', url: '', description: 'Reaching the king row.' },
        theory: ['Benefits of kinging.'],
        interactive: { title: 'King Movement', description: 'Get a piece to the last row and use king movement.', type: 'checkers-board' },
        quiz: [
          { question: 'Can kings move backward?', options: ['Yes', 'No', 'Only after jumping', 'Only at the end'], correct: 0, explanation: 'Kings can move backward.' },
          { question: 'How do you crown a piece?', options: ['Reach last row', 'Capture', 'Stack', 'Swap'], correct: 0, explanation: 'A piece is crowned when it reaches the last row.' },
          { question: 'Can kings jump in any direction?', options: ['Yes', 'No', 'Only forward', 'Only backward'], correct: 0, explanation: 'Kings can jump in any direction.' },
          { question: 'Can multiple kings exist?', options: ['Yes', 'No', 'Only one per player', 'Only in endgame'], correct: 0, explanation: 'Multiple kings can exist.' },
          { question: 'Is kinging always the best move?', options: ['Yes', 'No', 'Depends', 'Only at the end'], correct: 2, explanation: 'Sometimes it is better to wait.' }
        ],
        xp: 120, duration: '40 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Forcing Captures',
        description: 'Capture chains and multi-jumps.',
        video: { title: 'Forcing Captures', url: '', description: 'Capture chains and multi-jumps.' },
        theory: ['Setting up forced moves.'],
        interactive: { title: 'Forced Capture Problems', description: 'Solve forced capture problems.', type: 'checkers-board' },
        quiz: [
          { question: 'Must you make a capture when available?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 0, explanation: 'You must capture if able.' },
          { question: 'Can you chain multiple captures in one turn?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 0, explanation: 'Multiple captures are allowed in one turn.' },
          { question: 'Should you set traps for forced moves?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 0, explanation: 'Setting traps is a key strategy.' },
          { question: 'Can forcing captures backfire?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 0, explanation: 'Sometimes you can lose pieces by forcing captures.' },
          { question: 'Can a king perform multiple jumps?', options: ['Yes', 'No', 'Only forward', 'Only backward'], correct: 0, explanation: 'Kings can perform multiple jumps.' }
        ],
        xp: 140, duration: '50 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Midgame Control',
        description: 'Board control and piece positioning.',
        video: { title: 'Midgame Control', url: '', description: 'Board control and piece positioning.' },
        theory: ['Holding the center and restricting movement.'],
        interactive: { title: 'Central Control', description: 'Play games focusing on central control.', type: 'checkers-board' },
        quiz: [
          { question: 'Should you leave gaps in the back row?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 1, explanation: 'Keep your back row solid to prevent kinging.' },
          { question: 'Is holding the center a winning strategy?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 0, explanation: 'Controlling the center is usually strong.' },
          { question: 'Can you sacrifice pieces for positioning?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 0, explanation: 'Sacrifices can be strategic.' },
          { question: 'Should you avoid the sides of the board?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 1, explanation: 'The sides are often dangerous.' },
          { question: 'Can midgame mistakes lose the game instantly?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 0, explanation: 'A single mistake can be costly.' }
        ],
        xp: 160, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Endgame Techniques',
        description: 'Closing games with precision.',
        video: { title: 'Endgame Techniques', url: '', description: 'Closing games with precision.' },
        theory: ['Forcing wins in simplified positions.'],
        interactive: { title: 'Endgame Puzzles', description: 'Solve endgame puzzles.', type: 'checkers-board' },
        quiz: [
          { question: 'Can you win with just one king?', options: ['Yes', 'No', 'Only with help', 'Only at the end'], correct: 0, explanation: 'A lone king can win against a few pieces.' },
          { question: 'Should you force the opponent to the edges?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 0, explanation: 'Forcing to the edge limits their moves.' },
          { question: "Can you corner the last opponent's piece?", options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 0, explanation: 'Cornering is a common endgame tactic.' },
          { question: 'Is patience key in the endgame?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 0, explanation: 'Patience is important in the endgame.' },
          { question: 'Can a lone piece beat multiple opponents?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 1, explanation: 'It is very difficult for a lone piece to win.' }
        ],
        xp: 180, duration: '70 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Checkers Challenge',
        description: 'Full game review.',
        video: { title: 'Final Checkers Challenge', url: '', description: 'Full game review.' },
        theory: ['Integrating opening, midgame, and endgame strategies.'],
        interactive: { title: 'Complete Matches', description: 'Play complete matches.', type: 'checkers-board' },
        quiz: [
          { question: 'Should you memorize common openings?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 0, explanation: 'Memorizing openings can help.' },
          { question: 'Can you recover from material disadvantage?', options: ['Yes', 'No', 'Only with kings', 'Only at the end'], correct: 0, explanation: 'It is possible to recover with good play.' },
          { question: 'Why is careful calculation important?', options: ['To avoid mistakes', 'To win', 'To draw', 'To lose'], correct: 0, explanation: 'Careful calculation helps avoid mistakes.' },
          { question: 'How can you outmaneuver experienced players?', options: ['By being creative', 'By being aggressive', 'By being defensive', 'By being lucky'], correct: 0, explanation: 'Creativity can help outmaneuver opponents.' },
          { question: 'Should you play aggressive or defensive Checkers?', options: ['Aggressive', 'Defensive', 'Both', 'Neither'], correct: 2, explanation: 'A balance of both is best.' }
        ],
        xp: 200, duration: '90 min', difficulty: 'Expert'
      }
    ],
    practiceModules: []
  },
  {
    id: 'backgammon',
    name: 'Backgammon',
    icon: '🎲',
    color: 'from-amber-600 to-amber-800',
    difficulty: 'Intermediate',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '8 hours',
    description: 'Master dice strategy and checker movement',
    category: 'Strategy',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Backgammon',
        description: 'Game setup and basic dice movement.',
        video: { title: 'Backgammon Basics', url: '', description: 'Game setup and basic dice movement.' },
        theory: ['Home boards, bars, and movement direction.'],
        interactive: { title: 'Play a Few Turns', description: 'Set up and play a few turns.', type: 'backgammon-board' },
        quiz: [
          { question: 'Can you move checkers in both directions?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 1, explanation: 'Checkers move in one direction only.' },
          { question: 'Can you land on occupied points?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 1, explanation: 'You cannot land on points with two or more opponent checkers.' },
          { question: 'How many dice do you roll per turn?', options: ['1', '2', '3', '4'], correct: 1, explanation: 'You roll two dice per turn.' },
          { question: 'Can a checker jump over an entire home board?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 1, explanation: 'Checkers move step by step.' },
          { question: 'What happens when a checker is hit?', options: ['It goes to the bar', 'It is removed', 'It is doubled', 'It is safe'], correct: 0, explanation: 'A hit checker goes to the bar.' }
        ],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Basic Hitting and Entering',
        description: 'Rules for hitting and re-entering from the bar.',
        video: { title: 'Basic Hitting and Entering', url: '', description: 'Rules for hitting and re-entering from the bar.' },
        theory: ['Risk vs. reward in aggressive hitting.'],
        interactive: { title: 'Hit or Safe Move Scenarios', description: 'Solve hit or safe move scenarios.', type: 'backgammon-board' },
        quiz: [
          { question: 'Can you hit a checker on a closed point?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 1, explanation: 'You cannot hit on a closed point.' },
          { question: 'Can you re-enter on any point?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 1, explanation: 'You can only re-enter on open points.' },
          { question: 'Should you always hit exposed checkers?', options: ['Yes', 'No', 'Depends', 'Only in endgame'], correct: 2, explanation: 'Sometimes it is better not to hit.' },
          { question: 'Can aggressive hitting backfire?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 0, explanation: 'Aggressive hitting can leave your own checkers exposed.' },
          { question: 'Can you block an opponent from re-entering?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 0, explanation: 'You can block all entry points.' }
        ],
        xp: 120, duration: '40 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Building a Strong Home Board',
        description: 'Securing your home points.',
        video: { title: 'Building a Strong Home Board', url: '', description: 'Securing your home points.' },
        theory: ['Efficient checker stacking.'],
        interactive: { title: 'Home Board Building Games', description: 'Play home board building games.', type: 'backgammon-board' },
        quiz: [
          { question: 'Should you aim for a fully closed home board?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 0, explanation: 'A fully closed home board is very strong.' },
          { question: 'Can stacking multiple checkers slow you down?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 0, explanation: 'Stacking can slow your progress.' },
          { question: 'Is a blocked home board an instant win?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 1, explanation: 'You still need to bear off your checkers.' },
          { question: 'Should you leave exposed checkers for speed?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 1, explanation: 'Leaving exposed checkers is risky.' },
          { question: 'Can a weak home board lose you the game?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 0, explanation: 'A weak home board can be a liability.' }
        ],
        xp: 140, duration: '50 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Doubling Cube Strategy',
        description: 'How and when to offer the double.',
        video: { title: 'Doubling Cube Strategy', url: '', description: 'How and when to offer the double.' },
        theory: ['Using the cube to pressure opponents.'],
        interactive: { title: 'Double or No-Double Scenarios', description: 'Decide double or no-double scenarios.', type: 'backgammon-board' },
        quiz: [
          { question: 'Should you always accept doubles?', options: ['Yes', 'No', 'Depends', 'Only in endgame'], correct: 2, explanation: 'Sometimes it is better to drop.' },
          { question: 'Can doubling bluff opponents into dropping?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 0, explanation: 'Doubling can be used as a bluff.' },
          { question: 'Can you double in a losing position?', options: ['Yes', 'No', 'Depends', 'Only in endgame'], correct: 2, explanation: 'Sometimes doubling in a losing position is strategic.' },
          { question: 'Does the cube add psychological pressure?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 0, explanation: 'The cube can add pressure.' },
          { question: 'Should you use the cube early?', options: ['Yes', 'No', 'Depends', 'Only in endgame'], correct: 2, explanation: 'Early use of the cube can be risky.' }
        ],
        xp: 160, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Bearing Off and Closing Games',
        description: 'Efficient checker removal.',
        video: { title: 'Bearing Off and Closing Games', url: '', description: 'Efficient checker removal.' },
        theory: ['Risk management during bear-off.'],
        interactive: { title: 'Timed Bear-Off Puzzles', description: 'Play timed bear-off puzzles.', type: 'backgammon-board' },
        quiz: [
          { question: 'Can you bear off from any point?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 1, explanation: 'You can only bear off from your home board.' },
          { question: 'Can you bear off aggressively while leaving shots?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 1, explanation: 'Leaving shots is risky.' },
          { question: 'Should you rush or play safe in bear-off?', options: ['Rush', 'Safe', 'Depends', 'Only in endgame'], correct: 2, explanation: 'Balance speed and safety.' },
          { question: 'Can opponent hits delay your bear-off significantly?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 0, explanation: 'Being hit can delay your bear-off.' },
          { question: 'Can efficient bear-off reverse a losing game?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 0, explanation: 'Efficient bear-off can turn the game around.' }
        ],
        xp: 180, duration: '70 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Backgammon Challenge',
        description: 'Full game breakdown.',
        video: { title: 'Final Backgammon Challenge', url: '', description: 'Full game breakdown.' },
        theory: ['Combining hitting, home boards, and cube use.'],
        interactive: { title: 'Competitive Backgammon Rounds', description: 'Play competitive backgammon rounds.', type: 'backgammon-board' },
        quiz: [
          { question: 'Can you change doubling cube strategies midgame?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 0, explanation: 'You can change strategies as the game progresses.' },
          { question: 'Should you always hit late in the game?', options: ['Yes', 'No', 'Depends', 'Only in endgame'], correct: 2, explanation: 'Sometimes it is better not to hit.' },
          { question: 'Can conservative play beat aggressive players?', options: ['Yes', 'No', 'Depends', 'Only in endgame'], correct: 2, explanation: 'Both styles can win.' },
          { question: 'Should you memorize opening rolls?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 0, explanation: 'Memorizing openings can help.' },
          { question: 'Can a single hit change the whole game?', options: ['Yes', 'No', 'Only with doubles', 'Only in endgame'], correct: 0, explanation: 'A single hit can be decisive.' }
        ],
        xp: 200, duration: '90 min', difficulty: 'Expert'
      }
    ],
    practiceModules: []
  },
  {
    id: 'shogi',
    name: 'Shogi',
    icon: '🏯',
    color: 'from-orange-600 to-orange-800',
    difficulty: 'Expert',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '18 hours',
    description: 'Learn Japanese chess with piece drops and promotions',
    category: 'Strategy',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Shogi',
        description: 'Learn the basic rules and structure of Shogi',
        video: { title: 'Shogi Basics', url: 'https://www.youtube.com/embed/C6-jOJGL7jE', description: 'Understanding the Shogi board and pieces' },
        theory: ['Shogi is played on a 9x9 board with 10 pieces', 'The goal is to capture the opponent\'s king'],
        interactive: { title: 'Basic Shogi', description: 'Play a simple Shogi game', type: 'shogi-board' },
        quiz: [{ question: 'How many pieces are on a Shogi board?', options: ['10', '20', '9', '18'], correct: 0, explanation: 'A standard Shogi board has 10 pieces.' }],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Shogi Piece Movements',
        description: 'Learn how each Shogi piece moves and captures',
        video: { title: 'How Shogi Pieces Move', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Detailed movement of each Shogi piece' },
        theory: ['Pieces move diagonally', 'Pieces capture diagonally', 'King moves in any direction'],
        interactive: { title: 'Shogi Piece Movements Practice', description: 'Move pieces to correct squares in movement drills', type: 'shogi-board' },
        quiz: [{ question: 'Which piece moves diagonally?', options: ['King', 'Pawn', 'Rook', 'Bishop'], correct: 0, explanation: 'Pieces move diagonally in Shogi.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Shogi Strategy',
        description: 'Learn key strategies and tactics in Shogi',
        video: { title: 'Shogi Strategy and Tactics', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Key strategies and tactics in Shogi' },
        theory: ['Positioning pieces', 'Blocking opponent\'s pieces', 'Using the board'],
        interactive: { title: 'Shogi Strategy Practice', description: 'Practice applying strategies in Shogi games', type: 'shogi-board' },
        quiz: [{ question: 'What is the main objective in Shogi?', options: ['Capturing the king', 'Blocking the king', 'Building a large army', 'Playing beautiful moves'], correct: 0, explanation: 'The main objective is to capture the opponent\'s king.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Shogi Tactics',
        description: 'Learn essential Shogi tactics: pins, forks, and skewers',
        video: { title: 'Shogi Tactics Explained', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Common tactics in Shogi' },
        theory: ['Pin: attacking a piece that cannot move without exposing a more valuable piece', 'Fork: attacking two or more pieces simultaneously', 'Skewer: forcing a valuable piece to move and capturing the piece behind it'],
        interactive: { title: 'Shogi Tactics Practice', description: 'Solve basic tactics puzzles in Shogi', type: 'shogi-board' },
        quiz: [{ question: 'What is a fork in Shogi?', options: ['A type of endgame', 'Attacking two pieces at once', 'A pawn move', 'A defensive tactic'], correct: 1, explanation: 'A fork is when one piece attacks two or more enemy pieces simultaneously.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Shogi Endgame Strategies',
        description: 'Master strategies for the final stages of a Shogi game',
        video: { title: 'Shogi Endgame Strategies', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Strategies for the final stages of a Shogi game' },
        theory: ['Territorial consolidation', 'Threat and retreat', 'Eye-catching moves'],
        interactive: { title: 'Shogi Endgame Practice', description: 'Practice applying endgame strategies in Shogi', type: 'shogi-board' },
        quiz: [{ question: 'What is the best way to consolidate territory in the endgame?', options: ['Expanding', 'Consolidating', 'Attacking', 'Defending'], correct: 1, explanation: 'Consolidating territory is the best way to end the game.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Shogi Challenge',
        description: 'Put everything together in a complete game analysis',
        video: { title: 'Complete Shogi Game', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Full game walkthrough combining all learned concepts' },
        theory: ['Combining opening principles with tactical awareness', 'Transitioning from opening to middlegame', 'Converting advantages in the endgame'],
        interactive: { title: 'Complete Game Analysis', description: 'Play a complete Shogi game', type: 'shogi-board' },
        quiz: [{ question: 'Should you rush to attack without development?', options: ['Yes, always attack', 'No, develop first', 'Only in blitz', 'Only with white'], correct: 1, explanation: 'Premature attacks without proper development usually fail.' }],
        xp: 400, duration: '120 min', difficulty: 'Advanced'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick shogi puzzle solving' },
      { name: 'Tactical Training', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Solve tactical puzzles' },
      { name: 'Endgame Studies', difficulty: 'Advanced', time: '30 min', xp: '250', description: 'Master endgame positions' },
      { name: 'Opening Drills', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Practice opening principles' }
    ]
  },
  {
    id: 'crossword',
    name: 'Crossword',
    icon: '📝',
    color: 'from-purple-600 to-purple-800',
    difficulty: 'Intermediate',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '6 hours',
    description: 'Develop clue solving and pattern recognition skills',
    category: 'Word',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Crossword Puzzles',
        description: 'Learn the basics of crossword puzzles',
        video: { title: 'Crossword Basics', url: 'https://www.youtube.com/embed/0v5U6aY2r5Y', description: 'Overview of crossword puzzles' },
        theory: ['Crossword puzzles consist of a grid of letters', 'Clues are provided for each word'],
        interactive: { title: 'Crossword Puzzle Practice', description: 'Solve a simple crossword puzzle', type: 'crossword-grid' },
        quiz: [{ question: 'How many words are in a crossword puzzle?', options: ['10', '20', '100', '1000'], correct: 0, explanation: 'Crossword puzzles typically contain 10-20 words.' }],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Clue Analysis',
        description: 'Learn how to analyze clues and find answers',
        video: { title: 'Clue Analysis', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Techniques for analyzing clues' },
        theory: ['Clues can be anagrams', 'Clues can be synonyms', 'Clues can be definitions'],
        interactive: { title: 'Clue Analysis Practice', description: 'Analyze different types of clues', type: 'crossword-grid' },
        quiz: [{ question: 'What is an anagram clue?', options: ['A type of word', 'A type of clue', 'A type of puzzle', 'A type of answer'], correct: 1, explanation: 'An anagram clue is a type of clue.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Pattern Recognition',
        description: 'Learn how to recognize patterns in clues and answers',
        video: { title: 'Pattern Recognition', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Techniques for recognizing patterns' },
        theory: ['Patterns can be letters', 'Patterns can be numbers', 'Patterns can be shapes'],
        interactive: { title: 'Pattern Recognition Practice', description: 'Identify patterns in different clues', type: 'crossword-grid' },
        quiz: [{ question: 'What is a letter pattern clue?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of word'], correct: 0, explanation: 'A letter pattern clue is a type of clue.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Word Building',
        description: 'Learn how to build words from clues',
        video: { title: 'Word Building', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Techniques for building words from clues' },
        theory: ['Words can be formed from letters', 'Words can be formed from numbers', 'Words can be formed from shapes'],
        interactive: { title: 'Word Building Practice', description: 'Build words from different types of clues', type: 'crossword-grid' },
        quiz: [{ question: 'What is a number pattern clue?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of word'], correct: 1, explanation: 'A number pattern clue is a type of clue.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Crossword Construction',
        description: 'Learn how to create crossword puzzles',
        video: { title: 'Crossword Construction', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Techniques for constructing crossword puzzles' },
        theory: ['Crossword puzzles are constructed from clues', 'Crossword puzzles are constructed from answers'],
        interactive: { title: 'Crossword Construction Practice', description: 'Construct a crossword puzzle', type: 'crossword-grid' },
        quiz: [{ question: 'What is a clue?', options: ['A type of word', 'A type of clue', 'A type of puzzle', 'A type of answer'], correct: 1, explanation: 'A clue is a type of clue.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Crossword Challenge',
        description: 'Apply all learned skills in a complete crossword puzzle',
        video: { title: 'Complete Crossword Puzzle', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Solve a complete crossword puzzle' },
        theory: ['Combining all skills', 'Applying all learned techniques'],
        interactive: { title: 'Complete Crossword Practice', description: 'Solve a complete crossword puzzle', type: 'crossword-grid' },
        quiz: [{ question: 'What is the main skill in crossword puzzles?', options: ['Clue analysis', 'Pattern recognition', 'Word building', 'Crossword construction'], correct: 0, explanation: 'Clue analysis is the main skill in crossword puzzles.' }],
        xp: 400, duration: '120 min', difficulty: 'Expert'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick crossword puzzle solving' },
      { name: 'Clue Analysis', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Analyze different types of clues' },
      { name: 'Pattern Recognition', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Identify patterns in different clues' },
      { name: 'Word Building', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Build words from different types of clues' },
      { name: 'Crossword Construction', difficulty: 'Advanced', time: '30 min', xp: '300', description: 'Construct a crossword puzzle' }
    ]
  },
  {
    id: 'wordle',
    name: 'Wordle',
    icon: '📝',
    color: 'from-yellow-600 to-yellow-800',
    difficulty: 'Beginner',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '3 hours',
    description: 'Enhance your word guessing and pattern recognition',
    category: 'Word',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Wordle',
        description: 'Learn the basics of Wordle',
        video: { title: 'Wordle Basics', url: 'https://www.youtube.com/embed/0v5U6aY2r5Y', description: 'Overview of Wordle' },
        theory: ['Wordle is a daily word game', 'The goal is to guess the 5-letter word'],
        interactive: { title: 'Wordle Practice', description: 'Play a simple Wordle game', type: 'wordle-grid' },
        quiz: [{ question: 'How many letters are in a Wordle word?', options: ['4', '5', '6', '7'], correct: 1, explanation: 'A Wordle word is 5 letters long.' }],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Pattern Analysis',
        description: 'Learn how to analyze Wordle patterns',
        video: { title: 'Wordle Pattern Analysis', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Techniques for analyzing Wordle patterns' },
        theory: ['Patterns can be letters', 'Patterns can be positions', 'Patterns can be absent'],
        interactive: { title: 'Wordle Pattern Practice', description: 'Analyze different Wordle patterns', type: 'wordle-grid' },
        quiz: [{ question: 'What is a letter pattern clue?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of word'], correct: 0, explanation: 'A letter pattern clue is a type of clue.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Word Building',
        description: 'Learn how to build words from Wordle clues',
        video: { title: 'Word Building', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Techniques for building words from Wordle clues' },
        theory: ['Words can be formed from letters', 'Words can be formed from numbers', 'Words can be formed from shapes'],
        interactive: { title: 'Word Building Practice', description: 'Build words from different types of Wordle clues', type: 'wordle-grid' },
        quiz: [{ question: 'What is a number pattern clue?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of word'], correct: 1, explanation: 'A number pattern clue is a type of clue.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Clue Analysis',
        description: 'Learn how to analyze Wordle clues',
        video: { title: 'Wordle Clue Analysis', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Techniques for analyzing Wordle clues' },
        theory: ['Clues can be anagrams', 'Clues can be synonyms', 'Clues can be definitions'],
        interactive: { title: 'Wordle Clue Practice', description: 'Analyze different types of Wordle clues', type: 'wordle-grid' },
        quiz: [{ question: 'What is an anagram clue?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of word'], correct: 0, explanation: 'An anagram clue is a type of clue.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Wordle Construction',
        description: 'Learn how to create Wordle puzzles',
        video: { title: 'Wordle Construction', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Techniques for constructing Wordle puzzles' },
        theory: ['Wordle puzzles are constructed from clues', 'Wordle puzzles are constructed from answers'],
        interactive: { title: 'Wordle Construction Practice', description: 'Construct a Wordle puzzle', type: 'wordle-grid' },
        quiz: [{ question: 'What is a clue?', options: ['A type of word', 'A type of clue', 'A type of puzzle', 'A type of answer'], correct: 1, explanation: 'A clue is a type of clue.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Wordle Challenge',
        description: 'Apply all learned skills in a complete Wordle puzzle',
        video: { title: 'Complete Wordle Puzzle', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Solve a complete Wordle puzzle' },
        theory: ['Combining all skills', 'Applying all learned techniques'],
        interactive: { title: 'Complete Wordle Practice', description: 'Solve a complete Wordle puzzle', type: 'wordle-grid' },
        quiz: [{ question: 'What is the main skill in Wordle?', options: ['Pattern analysis', 'Word building', 'Clue analysis', 'Wordle construction'], correct: 0, explanation: 'Pattern analysis is the main skill in Wordle.' }],
        xp: 400, duration: '120 min', difficulty: 'Expert'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick wordle puzzle solving' },
      { name: 'Pattern Analysis', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Analyze different types of wordle patterns' },
      { name: 'Word Building', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Build words from different types of wordle clues' },
      { name: 'Clue Analysis', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Analyze different types of wordle clues' },
      { name: 'Wordle Construction', difficulty: 'Advanced', time: '30 min', xp: '300', description: 'Construct a wordle puzzle' }
    ]
  },
  {
    id: 'kakuro',
    name: 'Kakuro',
    icon: '🔢',
    color: 'from-indigo-600 to-indigo-800',
    difficulty: 'Advanced',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '9 hours',
    description: 'Master number logic and arithmetic puzzles',
    category: 'Logic',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Kakuro',
        description: 'Learn the basic rules and structure of Kakuro',
        video: { title: 'Kakuro Basics', url: 'https://www.youtube.com/embed/0v5U6aY2r5Y', description: 'Overview of Kakuro rules and structure' },
        theory: ['Kakuro is played on a grid', 'The goal is to fill the grid with numbers'],
        interactive: { title: 'Kakuro Practice', description: 'Play a simple Kakuro puzzle', type: 'kakuro-grid' },
        quiz: [{ question: 'How many cells are in a Kakuro grid?', options: ['10', '20', '100', '1000'], correct: 0, explanation: 'A Kakuro grid typically has 10 cells.' }],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Kakuro Logic',
        description: 'Learn how to use logic to solve Kakuro puzzles',
        video: { title: 'Kakuro Logic', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Techniques for using logic in Kakuro' },
        theory: ['Logic can be used to find missing numbers', 'Logic can be used to find possible sums'],
        interactive: { title: 'Kakuro Logic Practice', description: 'Use logic to solve Kakuro puzzles', type: 'kakuro-grid' },
        quiz: [{ question: 'What is a possible sum in Kakuro?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of number'], correct: 1, explanation: 'A possible sum is a type of number.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Kakuro Arithmetic',
        description: 'Learn how to use arithmetic to solve Kakuro puzzles',
        video: { title: 'Kakuro Arithmetic', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Techniques for using arithmetic in Kakuro' },
        theory: ['Arithmetic can be used to find missing numbers', 'Arithmetic can be used to find possible sums'],
        interactive: { title: 'Kakuro Arithmetic Practice', description: 'Use arithmetic to solve Kakuro puzzles', type: 'kakuro-grid' },
        quiz: [{ question: 'What is a possible sum in Kakuro?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of number'], correct: 1, explanation: 'A possible sum is a type of number.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Kakuro Strategy',
        description: 'Learn key strategies and tactics in Kakuro',
        video: { title: 'Kakuro Strategy and Tactics', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Key strategies and tactics in Kakuro' },
        theory: ['Positioning numbers', 'Blocking opponent\'s numbers', 'Using the grid'],
        interactive: { title: 'Kakuro Strategy Practice', description: 'Practice applying strategies in Kakuro', type: 'kakuro-grid' },
        quiz: [{ question: 'What is the main objective in Kakuro?', options: ['Capturing numbers', 'Blocking numbers', 'Building a large grid', 'Playing beautiful moves'], correct: 0, explanation: 'The main objective is to capture numbers.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Kakuro Tactics',
        description: 'Learn essential Kakuro tactics: pins, forks, and skewers',
        video: { title: 'Kakuro Tactics Explained', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Common tactics in Kakuro' },
        theory: ['Pin: attacking a number that cannot be used without exposing a more valuable number', 'Fork: attacking two or more numbers simultaneously', 'Skewer: forcing a valuable number to be used and capturing the number behind it'],
        interactive: { title: 'Kakuro Tactics Practice', description: 'Solve basic tactics puzzles in Kakuro', type: 'kakuro-grid' },
        quiz: [{ question: 'What is a fork in Kakuro?', options: ['A type of endgame', 'Attacking two numbers at once', 'A possible sum', 'A defensive tactic'], correct: 1, explanation: 'A fork is when one number attacks two or more enemy numbers simultaneously.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Kakuro Challenge',
        description: 'Put everything together in a complete Kakuro puzzle',
        video: { title: 'Complete Kakuro Puzzle', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Solve a complete Kakuro puzzle' },
        theory: ['Combining all skills', 'Applying all learned techniques'],
        interactive: { title: 'Complete Kakuro Practice', description: 'Solve a complete Kakuro puzzle', type: 'kakuro-grid' },
        quiz: [{ question: 'What is the main skill in Kakuro?', options: ['Kakuro logic', 'Kakuro arithmetic', 'Kakuro strategy', 'Kakuro tactics'], correct: 0, explanation: 'Kakuro logic is the main skill in Kakuro.' }],
        xp: 400, duration: '120 min', difficulty: 'Expert'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick kakuro puzzle solving' },
      { name: 'Kakuro Logic', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Use logic to solve Kakuro puzzles' },
      { name: 'Kakuro Arithmetic', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Use arithmetic to solve Kakuro puzzles' },
      { name: 'Kakuro Strategy', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Practice Kakuro strategy' },
      { name: 'Kakuro Tactics', difficulty: 'Advanced', time: '30 min', xp: '300', description: 'Solve Kakuro tactics puzzles' }
    ]
  },
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    icon: '💣',
    color: 'from-gray-600 to-gray-800',
    difficulty: 'Intermediate',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '4 hours',
    description: 'Perfect logical deduction and pattern recognition',
    category: 'Logic',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Minesweeper',
        description: 'Learn the basic rules and objectives of Minesweeper',
        video: { title: 'Minesweeper Basics', url: 'https://www.youtube.com/embed/0v5U6aY2r5Y', description: 'Overview of Minesweeper rules and objectives' },
        theory: ['Minesweeper is played on a grid', 'The goal is to uncover all safe cells'],
        interactive: { title: 'Minesweeper Practice', description: 'Play a simple Minesweeper game', type: 'minesweeper-grid' },
        quiz: [{ question: 'How many cells are in a Minesweeper grid?', options: ['10', '20', '100', '1000'], correct: 0, explanation: 'A Minesweeper grid typically has 10 cells.' }],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Minesweeper Logic',
        description: 'Learn how to use logic to solve Minesweeper puzzles',
        video: { title: 'Minesweeper Logic', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Techniques for using logic in Minesweeper' },
        theory: ['Logic can be used to find safe cells', 'Logic can be used to find possible mines'],
        interactive: { title: 'Minesweeper Logic Practice', description: 'Use logic to solve Minesweeper puzzles', type: 'minesweeper-grid' },
        quiz: [{ question: 'What is a possible mine in Minesweeper?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of cell'], correct: 1, explanation: 'A possible mine is a type of cell.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Minesweeper Arithmetic',
        description: 'Learn how to use arithmetic to solve Minesweeper puzzles',
        video: { title: 'Minesweeper Arithmetic', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Techniques for using arithmetic in Minesweeper' },
        theory: ['Arithmetic can be used to find safe cells', 'Arithmetic can be used to find possible mines'],
        interactive: { title: 'Minesweeper Arithmetic Practice', description: 'Use arithmetic to solve Minesweeper puzzles', type: 'minesweeper-grid' },
        quiz: [{ question: 'What is a possible mine in Minesweeper?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of cell'], correct: 1, explanation: 'A possible mine is a type of cell.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Minesweeper Strategy',
        description: 'Learn key strategies and tactics in Minesweeper',
        video: { title: 'Minesweeper Strategy and Tactics', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Key strategies and tactics in Minesweeper' },
        theory: ['Positioning mines', 'Blocking opponent\'s mines', 'Using the grid'],
        interactive: { title: 'Minesweeper Strategy Practice', description: 'Practice applying strategies in Minesweeper', type: 'minesweeper-grid' },
        quiz: [{ question: 'What is the main objective in Minesweeper?', options: ['Uncovering safe cells', 'Uncovering mines', 'Building a large grid', 'Playing beautiful moves'], correct: 0, explanation: 'The main objective is to uncover safe cells.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Minesweeper Tactics',
        description: 'Learn essential Minesweeper tactics: pins, forks, and skewers',
        video: { title: 'Minesweeper Tactics Explained', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Common tactics in Minesweeper' },
        theory: ['Pin: attacking a mine that cannot be used without exposing a more valuable mine', 'Fork: attacking two or more mines simultaneously', 'Skewer: forcing a valuable mine to be used and capturing the mine behind it'],
        interactive: { title: 'Minesweeper Tactics Practice', description: 'Solve basic tactics puzzles in Minesweeper', type: 'minesweeper-grid' },
        quiz: [{ question: 'What is a fork in Minesweeper?', options: ['A type of endgame', 'Attacking two mines at once', 'A possible mine', 'A defensive tactic'], correct: 1, explanation: 'A fork is when one mine attacks two or more enemy mines simultaneously.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Minesweeper Challenge',
        description: 'Put everything together in a complete Minesweeper puzzle',
        video: { title: 'Complete Minesweeper Puzzle', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Solve a complete Minesweeper puzzle' },
        theory: ['Combining all skills', 'Applying all learned techniques'],
        interactive: { title: 'Complete Minesweeper Practice', description: 'Solve a complete Minesweeper puzzle', type: 'minesweeper-grid' },
        quiz: [{ question: 'What is the main skill in Minesweeper?', options: ['Minesweeper logic', 'Minesweeper arithmetic', 'Minesweeper strategy', 'Minesweeper tactics'], correct: 0, explanation: 'Minesweeper logic is the main skill in Minesweeper.' }],
        xp: 400, duration: '120 min', difficulty: 'Expert'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick minesweeper puzzle solving' },
      { name: 'Minesweeper Logic', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Use logic to solve minesweeper puzzles' },
      { name: 'Minesweeper Arithmetic', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Use arithmetic to solve minesweeper puzzles' },
      { name: 'Minesweeper Strategy', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Practice minesweeper strategy' },
      { name: 'Minesweeper Tactics', difficulty: 'Advanced', time: '30 min', xp: '300', description: 'Solve minesweeper tactics puzzles' }
    ]
  },
  {
    id: 'mastermind',
    name: 'Mastermind',
    icon: '🔴',
    color: 'from-pink-600 to-pink-800',
    difficulty: 'Intermediate',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '4 hours',
    description: 'Develop logical deduction and pattern analysis',
    category: 'Logic',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Mastermind',
        description: 'Learn the basic rules and objectives of Mastermind',
        video: { title: 'Mastermind Basics', url: 'https://www.youtube.com/embed/0v5U6aY2r5Y', description: 'Overview of Mastermind rules and objectives' },
        theory: ['Mastermind is played with pegs and holes', 'The goal is to guess the code'],
        interactive: { title: 'Mastermind Practice', description: 'Play a simple Mastermind game', type: 'mastermind-board' },
        quiz: [{ question: 'How many pegs are in a Mastermind code?', options: ['4', '5', '6', '7'], correct: 1, explanation: 'A Mastermind code typically has 4 pegs.' }],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Mastermind Logic',
        description: 'Learn how to use logic to solve Mastermind puzzles',
        video: { title: 'Mastermind Logic', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Techniques for using logic in Mastermind' },
        theory: ['Logic can be used to find the correct pegs', 'Logic can be used to find possible codes'],
        interactive: { title: 'Mastermind Logic Practice', description: 'Use logic to solve Mastermind puzzles', type: 'mastermind-board' },
        quiz: [{ question: 'What is a possible code in Mastermind?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of peg'], correct: 1, explanation: 'A possible code is a type of peg.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Mastermind Arithmetic',
        description: 'Learn how to use arithmetic to solve Mastermind puzzles',
        video: { title: 'Mastermind Arithmetic', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Techniques for using arithmetic in Mastermind' },
        theory: ['Arithmetic can be used to find the correct pegs', 'Arithmetic can be used to find possible codes'],
        interactive: { title: 'Mastermind Arithmetic Practice', description: 'Use arithmetic to solve Mastermind puzzles', type: 'mastermind-board' },
        quiz: [{ question: 'What is a possible code in Mastermind?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of peg'], correct: 1, explanation: 'A possible code is a type of peg.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Mastermind Strategy',
        description: 'Learn key strategies and tactics in Mastermind',
        video: { title: 'Mastermind Strategy and Tactics', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Key strategies and tactics in Mastermind' },
        theory: ['Positioning pegs', 'Blocking opponent\'s pegs', 'Using the board'],
        interactive: { title: 'Mastermind Strategy Practice', description: 'Practice applying strategies in Mastermind', type: 'mastermind-board' },
        quiz: [{ question: 'What is the main objective in Mastermind?', options: ['Finding the correct code', 'Blocking the opponent', 'Building a large board', 'Playing beautiful moves'], correct: 0, explanation: 'The main objective is to find the correct code.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Mastermind Tactics',
        description: 'Learn essential Mastermind tactics: pins, forks, and skewers',
        video: { title: 'Mastermind Tactics Explained', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Common tactics in Mastermind' },
        theory: ['Pin: attacking a peg that cannot be used without exposing a more valuable peg', 'Fork: attacking two or more pegs simultaneously', 'Skewer: forcing a valuable peg to be used and capturing the peg behind it'],
        interactive: { title: 'Mastermind Tactics Practice', description: 'Solve basic tactics puzzles in Mastermind', type: 'mastermind-board' },
        quiz: [{ question: 'What is a fork in Mastermind?', options: ['A type of endgame', 'Attacking two pegs at once', 'A possible code', 'A defensive tactic'], correct: 1, explanation: 'A fork is when one peg attacks two or more enemy pegs simultaneously.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Mastermind Challenge',
        description: 'Put everything together in a complete Mastermind puzzle',
        video: { title: 'Complete Mastermind Puzzle', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Solve a complete Mastermind puzzle' },
        theory: ['Combining all skills', 'Applying all learned techniques'],
        interactive: { title: 'Complete Mastermind Practice', description: 'Solve a complete Mastermind puzzle', type: 'mastermind-board' },
        quiz: [{ question: 'What is the main skill in Mastermind?', options: ['Mastermind logic', 'Mastermind arithmetic', 'Mastermind strategy', 'Mastermind tactics'], correct: 0, explanation: 'Mastermind logic is the main skill in Mastermind.' }],
        xp: 400, duration: '120 min', difficulty: 'Expert'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick mastermind puzzle solving' },
      { name: 'Mastermind Logic', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Use logic to solve mastermind puzzles' },
      { name: 'Mastermind Arithmetic', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Use arithmetic to solve mastermind puzzles' },
      { name: 'Mastermind Strategy', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Practice mastermind strategy' },
      { name: 'Mastermind Tactics', difficulty: 'Advanced', time: '30 min', xp: '300', description: 'Solve mastermind tactics puzzles' }
    ]
  },
  {
    id: 'set',
    name: 'Set',
    icon: '🔺',
    color: 'from-teal-600 to-teal-800',
    difficulty: 'Advanced',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '6 hours',
    description: 'Master visual pattern recognition and set theory',
    category: 'Logic',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Set',
        description: 'Learn the basic rules and structure of Set',
        video: { title: 'Set Basics', url: 'https://www.youtube.com/embed/0v5U6aY2r5Y', description: 'Overview of Set rules and structure' },
        theory: ['Set is played with cards', 'The goal is to find sets'],
        interactive: { title: 'Set Practice', description: 'Play a simple Set game', type: 'set-cards' },
        quiz: [{ question: 'How many cards are in a Set game?', options: ['81', '100', '120', '144'], correct: 0, explanation: 'A Set game typically has 81 cards.' }],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Set Logic',
        description: 'Learn how to use logic to solve Set puzzles',
        video: { title: 'Set Logic', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Techniques for using logic in Set' },
        theory: ['Logic can be used to find sets', 'Logic can be used to find possible cards'],
        interactive: { title: 'Set Logic Practice', description: 'Use logic to solve Set puzzles', type: 'set-cards' },
        quiz: [{ question: 'What is a possible card in Set?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of card'], correct: 1, explanation: 'A possible card is a type of card.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Set Arithmetic',
        description: 'Learn how to use arithmetic to solve Set puzzles',
        video: { title: 'Set Arithmetic', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Techniques for using arithmetic in Set' },
        theory: ['Arithmetic can be used to find sets', 'Arithmetic can be used to find possible cards'],
        interactive: { title: 'Set Arithmetic Practice', description: 'Use arithmetic to solve Set puzzles', type: 'set-cards' },
        quiz: [{ question: 'What is a possible card in Set?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of card'], correct: 1, explanation: 'A possible card is a type of card.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Set Strategy',
        description: 'Learn key strategies and tactics in Set',
        video: { title: 'Set Strategy and Tactics', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Key strategies and tactics in Set' },
        theory: ['Positioning cards', 'Blocking opponent\'s cards', 'Using the board'],
        interactive: { title: 'Set Strategy Practice', description: 'Practice applying strategies in Set', type: 'set-cards' },
        quiz: [{ question: 'What is the main objective in Set?', options: ['Finding sets', 'Blocking opponent', 'Building a large board', 'Playing beautiful moves'], correct: 0, explanation: 'The main objective is to find sets.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Set Tactics',
        description: 'Learn essential Set tactics: pins, forks, and skewers',
        video: { title: 'Set Tactics Explained', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Common tactics in Set' },
        theory: ['Pin: attacking a card that cannot be used without exposing a more valuable card', 'Fork: attacking two or more cards simultaneously', 'Skewer: forcing a valuable card to be used and capturing the card behind it'],
        interactive: { title: 'Set Tactics Practice', description: 'Solve basic tactics puzzles in Set', type: 'set-cards' },
        quiz: [{ question: 'What is a fork in Set?', options: ['A type of endgame', 'Attacking two cards at once', 'A possible set', 'A defensive tactic'], correct: 1, explanation: 'A fork is when one card attacks two or more enemy cards simultaneously.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Set Challenge',
        description: 'Put everything together in a complete Set puzzle',
        video: { title: 'Complete Set Puzzle', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Solve a complete Set puzzle' },
        theory: ['Combining all skills', 'Applying all learned techniques'],
        interactive: { title: 'Complete Set Practice', description: 'Solve a complete Set puzzle', type: 'set-cards' },
        quiz: [{ question: 'What is the main skill in Set?', options: ['Set logic', 'Set arithmetic', 'Set strategy', 'Set tactics'], correct: 0, explanation: 'Set logic is the main skill in Set.' }],
        xp: 400, duration: '120 min', difficulty: 'Expert'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick set puzzle solving' },
      { name: 'Set Logic', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Use logic to solve set puzzles' },
      { name: 'Set Arithmetic', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Use arithmetic to solve set puzzles' },
      { name: 'Set Strategy', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Practice set strategy' },
      { name: 'Set Tactics', difficulty: 'Advanced', time: '30 min', xp: '300', description: 'Solve set tactics puzzles' }
    ]
  },
  {
    id: 'nim',
    name: 'Nim',
    icon: '🎯',
    color: 'from-cyan-600 to-cyan-800',
    difficulty: 'Intermediate',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '3 hours',
    description: 'Learn mathematical strategy and optimal play',
    category: 'Logic',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Nim',
        description: 'Learn the basic rules and objectives of Nim',
        video: { title: 'Nim Basics', url: 'https://www.youtube.com/embed/0v5U6aY2r5Y', description: 'Overview of Nim rules and objectives' },
        theory: ['Nim is played with piles of stones', 'The goal is to remove the last stone'],
        interactive: { title: 'Nim Practice', description: 'Play a simple Nim game', type: 'nim-board' },
        quiz: [{ question: 'How many piles are in a Nim game?', options: ['2', '3', '4', '5'], correct: 1, explanation: 'A Nim game typically has 3 piles.' }],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Nim Logic',
        description: 'Learn how to use logic to solve Nim puzzles',
        video: { title: 'Nim Logic', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Techniques for using logic in Nim' },
        theory: ['Logic can be used to find the optimal move', 'Logic can be used to find possible piles'],
        interactive: { title: 'Nim Logic Practice', description: 'Use logic to solve Nim puzzles', type: 'nim-board' },
        quiz: [{ question: 'What is a possible pile in Nim?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of pile'], correct: 1, explanation: 'A possible pile is a type of pile.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Nim Arithmetic',
        description: 'Learn how to use arithmetic to solve Nim puzzles',
        video: { title: 'Nim Arithmetic', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Techniques for using arithmetic in Nim' },
        theory: ['Arithmetic can be used to find the optimal move', 'Arithmetic can be used to find possible piles'],
        interactive: { title: 'Nim Arithmetic Practice', description: 'Use arithmetic to solve Nim puzzles', type: 'nim-board' },
        quiz: [{ question: 'What is a possible pile in Nim?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of pile'], correct: 1, explanation: 'A possible pile is a type of pile.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Nim Strategy',
        description: 'Learn key strategies and tactics in Nim',
        video: { title: 'Nim Strategy and Tactics', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Key strategies and tactics in Nim' },
        theory: ['Positioning piles', 'Blocking opponent\'s piles', 'Using the piles'],
        interactive: { title: 'Nim Strategy Practice', description: 'Practice applying strategies in Nim', type: 'nim-board' },
        quiz: [{ question: 'What is the main objective in Nim?', options: ['Removing the last stone', 'Blocking the opponent', 'Building a large pile', 'Playing beautiful moves'], correct: 0, explanation: 'The main objective is to remove the last stone.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Nim Tactics',
        description: 'Learn essential Nim tactics: pins, forks, and skewers',
        video: { title: 'Nim Tactics Explained', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Common tactics in Nim' },
        theory: ['Pin: attacking a pile that cannot be used without exposing a more valuable pile', 'Fork: attacking two or more piles simultaneously', 'Skewer: forcing a valuable pile to be used and capturing the pile behind it'],
        interactive: { title: 'Nim Tactics Practice', description: 'Solve basic tactics puzzles in Nim', type: 'nim-board' },
        quiz: [{ question: 'What is a fork in Nim?', options: ['A type of endgame', 'Attacking two piles at once', 'A possible pile', 'A defensive tactic'], correct: 1, explanation: 'A fork is when one pile attacks two or more enemy piles simultaneously.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Nim Challenge',
        description: 'Put everything together in a complete Nim puzzle',
        video: { title: 'Complete Nim Puzzle', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Solve a complete Nim puzzle' },
        theory: ['Combining all skills', 'Applying all learned techniques'],
        interactive: { title: 'Complete Nim Practice', description: 'Solve a complete Nim puzzle', type: 'nim-board' },
        quiz: [{ question: 'What is the main skill in Nim?', options: ['Nim logic', 'Nim arithmetic', 'Nim strategy', 'Nim tactics'], correct: 0, explanation: 'Nim logic is the main skill in Nim.' }],
        xp: 400, duration: '120 min', difficulty: 'Expert'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick nim puzzle solving' },
      { name: 'Nim Logic', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Use logic to solve nim puzzles' },
      { name: 'Nim Arithmetic', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Use arithmetic to solve nim puzzles' },
      { name: 'Nim Strategy', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Practice nim strategy' },
      { name: 'Nim Tactics', difficulty: 'Advanced', time: '30 min', xp: '300', description: 'Solve nim tactics puzzles' }
    ]
  },
  {
    id: 'tetris',
    name: 'Tetris',
    icon: '🟦',
    color: 'from-blue-500 to-blue-700',
    difficulty: 'Intermediate',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '5 hours',
    description: 'Perfect your block stacking and line clearing skills',
    category: 'Puzzle',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Tetris',
        description: 'Learn the basic rules and objectives of Tetris',
        video: { title: 'Tetris Basics', url: 'https://www.youtube.com/embed/0v5U6aY2r5Y', description: 'Overview of Tetris rules and objectives' },
        theory: ['Tetris is played with blocks', 'The goal is to clear lines'],
        interactive: { title: 'Tetris Practice', description: 'Play a simple Tetris game', type: 'tetris-board' },
        quiz: [{ question: 'How many blocks are in a Tetris game?', options: ['10', '20', '100', '1000'], correct: 0, explanation: 'A Tetris game typically has 10 blocks.' }],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Tetris Logic',
        description: 'Learn how to use logic to solve Tetris puzzles',
        video: { title: 'Tetris Logic', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Techniques for using logic in Tetris' },
        theory: ['Logic can be used to find the optimal move', 'Logic can be used to find possible blocks'],
        interactive: { title: 'Tetris Logic Practice', description: 'Use logic to solve Tetris puzzles', type: 'tetris-board' },
        quiz: [{ question: 'What is a possible block in Tetris?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of block'], correct: 1, explanation: 'A possible block is a type of block.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Tetris Arithmetic',
        description: 'Learn how to use arithmetic to solve Tetris puzzles',
        video: { title: 'Tetris Arithmetic', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Techniques for using arithmetic in Tetris' },
        theory: ['Arithmetic can be used to find the optimal move', 'Arithmetic can be used to find possible blocks'],
        interactive: { title: 'Tetris Arithmetic Practice', description: 'Use arithmetic to solve Tetris puzzles', type: 'tetris-board' },
        quiz: [{ question: 'What is a possible block in Tetris?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of block'], correct: 1, explanation: 'A possible block is a type of block.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Tetris Strategy',
        description: 'Learn key strategies and tactics in Tetris',
        video: { title: 'Tetris Strategy and Tactics', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Key strategies and tactics in Tetris' },
        theory: ['Positioning blocks', 'Blocking opponent\'s blocks', 'Using the board'],
        interactive: { title: 'Tetris Strategy Practice', description: 'Practice applying strategies in Tetris', type: 'tetris-board' },
        quiz: [{ question: 'What is the main objective in Tetris?', options: ['Clearing lines', 'Building a large board', 'Playing beautiful moves', 'Blocking the opponent'], correct: 0, explanation: 'The main objective is to clear lines.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Tetris Tactics',
        description: 'Learn essential Tetris tactics: pins, forks, and skewers',
        video: { title: 'Tetris Tactics Explained', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Common tactics in Tetris' },
        theory: ['Pin: attacking a block that cannot be used without exposing a more valuable block', 'Fork: attacking two or more blocks simultaneously', 'Skewer: forcing a valuable block to be used and capturing the block behind it'],
        interactive: { title: 'Tetris Tactics Practice', description: 'Solve basic tactics puzzles in Tetris', type: 'tetris-board' },
        quiz: [{ question: 'What is a fork in Tetris?', options: ['A type of endgame', 'Attacking two blocks at once', 'A possible line', 'A defensive tactic'], correct: 1, explanation: 'A fork is when one block attacks two or more enemy blocks simultaneously.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Tetris Challenge',
        description: 'Put everything together in a complete Tetris puzzle',
        video: { title: 'Complete Tetris Puzzle', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Solve a complete Tetris puzzle' },
        theory: ['Combining all skills', 'Applying all learned techniques'],
        interactive: { title: 'Complete Tetris Practice', description: 'Solve a complete Tetris puzzle', type: 'tetris-board' },
        quiz: [{ question: 'What is the main skill in Tetris?', options: ['Tetris logic', 'Tetris arithmetic', 'Tetris strategy', 'Tetris tactics'], correct: 0, explanation: 'Tetris logic is the main skill in Tetris.' }],
        xp: 400, duration: '120 min', difficulty: 'Expert'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick tetris puzzle solving' },
      { name: 'Tetris Logic', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Use logic to solve tetris puzzles' },
      { name: 'Tetris Arithmetic', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Use arithmetic to solve tetris puzzles' },
      { name: 'Tetris Strategy', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Practice tetris strategy' },
      { name: 'Tetris Tactics', difficulty: 'Advanced', time: '30 min', xp: '300', description: 'Solve tetris tactics puzzles' }
    ]
  },
  {
    id: 'mahjong',
    name: 'Mahjong',
    icon: '🀄',
    color: 'from-emerald-600 to-emerald-800',
    difficulty: 'Advanced',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '12 hours',
    description: 'Learn tile matching and strategic hand building',
    category: 'Puzzle',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Mahjong',
        description: 'Learn the basic rules and objectives of Mahjong',
        video: { title: 'Mahjong Basics', url: 'https://www.youtube.com/embed/0v5U6aY2r5Y', description: 'Overview of Mahjong rules and objectives' },
        theory: ['Mahjong is played with tiles', 'The goal is to form a winning hand'],
        interactive: { title: 'Mahjong Practice', description: 'Play a simple Mahjong game', type: 'mahjong-table' },
        quiz: [{ question: 'How many tiles are in a Mahjong game?', options: ['100', '136', '144', '148'], correct: 0, explanation: 'A Mahjong game typically has 136 tiles.' }],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Mahjong Logic',
        description: 'Learn how to use logic to solve Mahjong puzzles',
        video: { title: 'Mahjong Logic', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Techniques for using logic in Mahjong' },
        theory: ['Logic can be used to find winning hands', 'Logic can be used to find possible tiles'],
        interactive: { title: 'Mahjong Logic Practice', description: 'Use logic to solve Mahjong puzzles', type: 'mahjong-table' },
        quiz: [{ question: 'What is a possible tile in Mahjong?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of tile'], correct: 1, explanation: 'A possible tile is a type of tile.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Mahjong Arithmetic',
        description: 'Learn how to use arithmetic to solve Mahjong puzzles',
        video: { title: 'Mahjong Arithmetic', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Techniques for using arithmetic in Mahjong' },
        theory: ['Arithmetic can be used to find winning hands', 'Arithmetic can be used to find possible tiles'],
        interactive: { title: 'Mahjong Arithmetic Practice', description: 'Use arithmetic to solve Mahjong puzzles', type: 'mahjong-table' },
        quiz: [{ question: 'What is a possible tile in Mahjong?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of tile'], correct: 1, explanation: 'A possible tile is a type of tile.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Mahjong Strategy',
        description: 'Learn key strategies and tactics in Mahjong',
        video: { title: 'Mahjong Strategy and Tactics', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Key strategies and tactics in Mahjong' },
        theory: ['Positioning tiles', 'Blocking opponent\'s tiles', 'Using the board'],
        interactive: { title: 'Mahjong Strategy Practice', description: 'Practice applying strategies in Mahjong', type: 'mahjong-table' },
        quiz: [{ question: 'What is the main objective in Mahjong?', options: ['Forming a winning hand', 'Blocking the opponent', 'Building a large board', 'Playing beautiful moves'], correct: 0, explanation: 'The main objective is to form a winning hand.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Mahjong Tactics',
        description: 'Learn essential Mahjong tactics: pins, forks, and skewers',
        video: { title: 'Mahjong Tactics Explained', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Common tactics in Mahjong' },
        theory: ['Pin: attacking a tile that cannot be used without exposing a more valuable tile', 'Fork: attacking two or more tiles simultaneously', 'Skewer: forcing a valuable tile to be used and capturing the tile behind it'],
        interactive: { title: 'Mahjong Tactics Practice', description: 'Solve basic tactics puzzles in Mahjong', type: 'mahjong-table' },
        quiz: [{ question: 'What is a fork in Mahjong?', options: ['A type of endgame', 'Attacking two tiles at once', 'A possible hand', 'A defensive tactic'], correct: 1, explanation: 'A fork is when one tile attacks two or more enemy tiles simultaneously.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Mahjong Challenge',
        description: 'Put everything together in a complete Mahjong puzzle',
        video: { title: 'Complete Mahjong Puzzle', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Solve a complete Mahjong puzzle' },
        theory: ['Combining all skills', 'Applying all learned techniques'],
        interactive: { title: 'Complete Mahjong Practice', description: 'Solve a complete Mahjong puzzle', type: 'mahjong-table' },
        quiz: [{ question: 'What is the main skill in Mahjong?', options: ['Mahjong logic', 'Mahjong arithmetic', 'Mahjong strategy', 'Mahjong tactics'], correct: 0, explanation: 'Mahjong logic is the main skill in Mahjong.' }],
        xp: 400, duration: '120 min', difficulty: 'Expert'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick mahjong puzzle solving' },
      { name: 'Mahjong Logic', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Use logic to solve mahjong puzzles' },
      { name: 'Mahjong Arithmetic', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Use arithmetic to solve mahjong puzzles' },
      { name: 'Mahjong Strategy', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Practice mahjong strategy' },
      { name: 'Mahjong Tactics', difficulty: 'Advanced', time: '30 min', xp: '300', description: 'Solve mahjong tactics puzzles' }
    ]
  },
  {
    id: 'jigsaw',
    name: 'Jigsaw Puzzles',
    icon: '🧩',
    color: 'from-violet-600 to-violet-800',
    difficulty: 'Beginner',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '5 hours',
    description: 'Enhance visual pattern matching and patience',
    category: 'Puzzle',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Jigsaw Puzzles',
        description: 'Learn the basics of jigsaw puzzles',
        video: { title: 'Jigsaw Basics', url: 'https://www.youtube.com/embed/0v5U6aY2r5Y', description: 'Overview of jigsaw puzzles' },
        theory: ['Jigsaw puzzles consist of pieces', 'The goal is to assemble the puzzle'],
        interactive: { title: 'Jigsaw Practice', description: 'Play a simple jigsaw puzzle', type: 'jigsaw-board' },
        quiz: [{ question: 'How many pieces are in a jigsaw puzzle?', options: ['10', '20', '100', '1000'], correct: 0, explanation: 'A jigsaw puzzle typically has 100 pieces.' }],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Jigsaw Logic',
        description: 'Learn how to use logic to solve jigsaw puzzles',
        video: { title: 'Jigsaw Logic', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Techniques for using logic in jigsaw puzzles' },
        theory: ['Logic can be used to find the correct pieces', 'Logic can be used to find possible arrangements'],
        interactive: { title: 'Jigsaw Logic Practice', description: 'Use logic to solve jigsaw puzzles', type: 'jigsaw-board' },
        quiz: [{ question: 'What is a possible arrangement in a jigsaw puzzle?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of arrangement'], correct: 1, explanation: 'A possible arrangement is a type of arrangement.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Jigsaw Strategy',
        description: 'Learn key strategies and tactics in jigsaw puzzles',
        video: { title: 'Jigsaw Strategy and Tactics', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Key strategies and tactics in jigsaw puzzles' },
        theory: ['Positioning pieces', 'Blocking opponent\'s pieces', 'Using the board'],
        interactive: { title: 'Jigsaw Strategy Practice', description: 'Practice applying strategies in jigsaw puzzles', type: 'jigsaw-board' },
        quiz: [{ question: 'What is the main objective in jigsaw puzzles?', options: ['Assembling the puzzle', 'Blocking the opponent', 'Building a large board', 'Playing beautiful moves'], correct: 0, explanation: 'The main objective is to assemble the puzzle.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Jigsaw Tactics',
        description: 'Learn essential jigsaw tactics: pins, forks, and skewers',
        video: { title: 'Jigsaw Tactics Explained', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Common tactics in jigsaw puzzles' },
        theory: ['Pin: attacking a piece that cannot be used without exposing a more valuable piece', 'Fork: attacking two or more pieces simultaneously', 'Skewer: forcing a valuable piece to be used and capturing the piece behind it'],
        interactive: { title: 'Jigsaw Tactics Practice', description: 'Solve basic tactics puzzles in jigsaw puzzles', type: 'jigsaw-board' },
        quiz: [{ question: 'What is a fork in jigsaw puzzles?', options: ['A type of endgame', 'Attacking two pieces at once', 'A possible arrangement', 'A defensive tactic'], correct: 1, explanation: 'A fork is when one piece attacks two or more enemy pieces simultaneously.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Jigsaw Endgame Strategies',
        description: 'Master strategies for the final stages of a jigsaw puzzle',
        video: { title: 'Jigsaw Endgame Strategies', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Strategies for the final stages of a jigsaw puzzle' },
        theory: ['Territorial consolidation', 'Threat and retreat', 'Eye-catching moves'],
        interactive: { title: 'Jigsaw Endgame Practice', description: 'Practice applying endgame strategies in jigsaw puzzles', type: 'jigsaw-board' },
        quiz: [{ question: 'What is the best way to consolidate territory in the endgame?', options: ['Expanding', 'Consolidating', 'Attacking', 'Defending'], correct: 1, explanation: 'Consolidating territory is the best way to end the game.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Jigsaw Challenge',
        description: 'Put everything together in a complete jigsaw puzzle',
        video: { title: 'Complete Jigsaw Puzzle', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Solve a complete jigsaw puzzle' },
        theory: ['Combining all skills', 'Applying all learned techniques'],
        interactive: { title: 'Complete Jigsaw Practice', description: 'Solve a complete jigsaw puzzle', type: 'jigsaw-board' },
        quiz: [{ question: 'What is the main skill in jigsaw puzzles?', options: ['Jigsaw logic', 'Jigsaw arithmetic', 'Jigsaw strategy', 'Jigsaw tactics'], correct: 0, explanation: 'Jigsaw logic is the main skill in jigsaw puzzles.' }],
        xp: 400, duration: '120 min', difficulty: 'Expert'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick jigsaw puzzle solving' },
      { name: 'Jigsaw Logic', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Use logic to solve jigsaw puzzles' },
      { name: 'Jigsaw Strategy', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Practice jigsaw strategy' },
      { name: 'Jigsaw Tactics', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Solve jigsaw tactics puzzles' },
      { name: 'Jigsaw Endgame Strategies', difficulty: 'Advanced', time: '30 min', xp: '300', description: 'Practice jigsaw endgame strategies' }
    ]
  },
  {
    id: 'poker',
    name: 'Poker',
    icon: '🃏',
    color: 'from-red-700 to-red-900',
    difficulty: 'Advanced',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '10 hours',
    description: 'Master the art of betting, bluffing, and reading opponents',
    category: 'Card',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Poker',
        description: 'Learn the basic rules and objectives of Poker',
        video: { title: 'Poker Basics', url: 'https://www.youtube.com/embed/0v5U6aY2r5Y', description: 'Overview of Poker rules and objectives' },
        theory: ['Poker is played with cards', 'The goal is to win the pot'],
        interactive: { title: 'Poker Practice', description: 'Play a simple Poker game', type: 'poker-table' },
        quiz: [{ question: 'How many cards are in a Poker hand?', options: ['5', '7', '10', '13'], correct: 1, explanation: 'A Poker hand typically has 5 cards.' }],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Poker Logic',
        description: 'Learn how to use logic to solve Poker puzzles',
        video: { title: 'Poker Logic', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Techniques for using logic in Poker' },
        theory: ['Logic can be used to find the best hand', 'Logic can be used to find possible hands'],
        interactive: { title: 'Poker Logic Practice', description: 'Use logic to solve Poker puzzles', type: 'poker-table' },
        quiz: [{ question: 'What is a possible hand in Poker?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of hand'], correct: 1, explanation: 'A possible hand is a type of hand.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Poker Arithmetic',
        description: 'Learn how to use arithmetic to solve Poker puzzles',
        video: { title: 'Poker Arithmetic', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Techniques for using arithmetic in Poker' },
        theory: ['Arithmetic can be used to find the best hand', 'Arithmetic can be used to find possible hands'],
        interactive: { title: 'Poker Arithmetic Practice', description: 'Use arithmetic to solve Poker puzzles', type: 'poker-table' },
        quiz: [{ question: 'What is a possible hand in Poker?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of hand'], correct: 1, explanation: 'A possible hand is a type of hand.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Poker Strategy',
        description: 'Learn key strategies and tactics in Poker',
        video: { title: 'Poker Strategy and Tactics', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Key strategies and tactics in Poker' },
        theory: ['Positioning hands', 'Blocking opponent\'s hands', 'Using the board'],
        interactive: { title: 'Poker Strategy Practice', description: 'Practice applying strategies in Poker', type: 'poker-table' },
        quiz: [{ question: 'What is the main objective in Poker?', options: ['Winning the pot', 'Blocking the opponent', 'Building a large board', 'Playing beautiful moves'], correct: 0, explanation: 'The main objective is to win the pot.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Poker Tactics',
        description: 'Learn essential Poker tactics: pins, forks, and skewers',
        video: { title: 'Poker Tactics Explained', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Common tactics in Poker' },
        theory: ['Pin: attacking a hand that cannot be used without exposing a more valuable hand', 'Fork: attacking two or more hands simultaneously', 'Skewer: forcing a valuable hand to be used and capturing the hand behind it'],
        interactive: { title: 'Poker Tactics Practice', description: 'Solve basic tactics puzzles in Poker', type: 'poker-table' },
        quiz: [{ question: 'What is a fork in Poker?', options: ['A type of endgame', 'Attacking two hands at once', 'A possible hand', 'A defensive tactic'], correct: 1, explanation: 'A fork is when one hand attacks two or more enemy hands simultaneously.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Poker Challenge',
        description: 'Put everything together in a complete Poker puzzle',
        video: { title: 'Complete Poker Puzzle', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Solve a complete Poker puzzle' },
        theory: ['Combining all skills', 'Applying all learned techniques'],
        interactive: { title: 'Complete Poker Practice', description: 'Solve a complete Poker puzzle', type: 'poker-table' },
        quiz: [{ question: 'What is the main skill in Poker?', options: ['Poker logic', 'Poker arithmetic', 'Poker strategy', 'Poker tactics'], correct: 0, explanation: 'Poker logic is the main skill in Poker.' }],
        xp: 400, duration: '120 min', difficulty: 'Expert'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick poker puzzle solving' },
      { name: 'Poker Logic', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Use logic to solve poker puzzles' },
      { name: 'Poker Arithmetic', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Use arithmetic to solve poker puzzles' },
      { name: 'Poker Strategy', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Practice poker strategy' },
      { name: 'Poker Tactics', difficulty: 'Advanced', time: '30 min', xp: '300', description: 'Solve poker tactics puzzles' }
    ]
  },
  {
    id: 'bridge',
    name: 'Bridge',
    icon: '♠️',
    color: 'from-slate-700 to-slate-900',
    difficulty: 'Expert',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '25 hours',
    description: 'Learn partnership strategy and bidding systems',
    category: 'Card',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Bridge',
        description: 'Learn the basic rules and objectives of Bridge',
        video: { title: 'Bridge Basics', url: 'https://www.youtube.com/embed/0v5U6aY2r5Y', description: 'Overview of Bridge rules and objectives' },
        theory: ['Bridge is played with cards', 'The goal is to win the game'],
        interactive: { title: 'Bridge Practice', description: 'Play a simple Bridge game', type: 'bridge-table' },
        quiz: [{ question: 'How many cards are in a Bridge hand?', options: ['13', '14', '15', '17'], correct: 1, explanation: 'A Bridge hand typically has 13 cards.' }],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Bridge Logic',
        description: 'Learn how to use logic to solve Bridge puzzles',
        video: { title: 'Bridge Logic', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Techniques for using logic in Bridge' },
        theory: ['Logic can be used to find the best hand', 'Logic can be used to find possible hands'],
        interactive: { title: 'Bridge Logic Practice', description: 'Use logic to solve Bridge puzzles', type: 'bridge-table' },
        quiz: [{ question: 'What is a possible hand in Bridge?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of hand'], correct: 1, explanation: 'A possible hand is a type of hand.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Bridge Arithmetic',
        description: 'Learn how to use arithmetic to solve Bridge puzzles',
        video: { title: 'Bridge Arithmetic', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Techniques for using arithmetic in Bridge' },
        theory: ['Arithmetic can be used to find the best hand', 'Arithmetic can be used to find possible hands'],
        interactive: { title: 'Bridge Arithmetic Practice', description: 'Use arithmetic to solve Bridge puzzles', type: 'bridge-table' },
        quiz: [{ question: 'What is a possible hand in Bridge?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of hand'], correct: 1, explanation: 'A possible hand is a type of hand.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Bridge Strategy',
        description: 'Learn key strategies and tactics in Bridge',
        video: { title: 'Bridge Strategy and Tactics', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Key strategies and tactics in Bridge' },
        theory: ['Positioning hands', 'Blocking opponent\'s hands', 'Using the board'],
        interactive: { title: 'Bridge Strategy Practice', description: 'Practice applying strategies in Bridge', type: 'bridge-table' },
        quiz: [{ question: 'What is the main objective in Bridge?', options: ['Winning the game', 'Blocking the opponent', 'Building a large board', 'Playing beautiful moves'], correct: 0, explanation: 'The main objective is to win the game.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Bridge Tactics',
        description: 'Learn essential Bridge tactics: pins, forks, and skewers',
        video: { title: 'Bridge Tactics Explained', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Common tactics in Bridge' },
        theory: ['Pin: attacking a hand that cannot be used without exposing a more valuable hand', 'Fork: attacking two or more hands simultaneously', 'Skewer: forcing a valuable hand to be used and capturing the hand behind it'],
        interactive: { title: 'Bridge Tactics Practice', description: 'Solve basic tactics puzzles in Bridge', type: 'bridge-table' },
        quiz: [{ question: 'What is a fork in Bridge?', options: ['A type of endgame', 'Attacking two hands at once', 'A possible hand', 'A defensive tactic'], correct: 1, explanation: 'A fork is when one hand attacks two or more enemy hands simultaneously.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Bridge Challenge',
        description: 'Put everything together in a complete Bridge puzzle',
        video: { title: 'Complete Bridge Puzzle', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Solve a complete Bridge puzzle' },
        theory: ['Combining all skills', 'Applying all learned techniques'],
        interactive: { title: 'Complete Bridge Practice', description: 'Solve a complete Bridge puzzle', type: 'bridge-table' },
        quiz: [{ question: 'What is the main skill in Bridge?', options: ['Bridge logic', 'Bridge arithmetic', 'Bridge strategy', 'Bridge tactics'], correct: 0, explanation: 'Bridge logic is the main skill in Bridge.' }],
        xp: 400, duration: '120 min', difficulty: 'Expert'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick bridge puzzle solving' },
      { name: 'Bridge Logic', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Use logic to solve bridge puzzles' },
      { name: 'Bridge Arithmetic', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Use arithmetic to solve bridge puzzles' },
      { name: 'Bridge Strategy', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Practice bridge strategy' },
      { name: 'Bridge Tactics', difficulty: 'Advanced', time: '30 min', xp: '300', description: 'Solve bridge tactics puzzles' }
    ]
  },
  {
    id: 'scrabble',
    name: 'Scrabble',
    icon: '🔤',
    color: 'from-brown-600 to-brown-800',
    difficulty: 'Intermediate',
    totalLessons: 6,
    completedLessons: 0,
    progress: 0,
    estimatedTime: '7 hours',
    description: 'Build vocabulary and strategic word placement',
    category: 'Card',
    lessons: [
      {
        id: '1',
        title: 'Introduction to Scrabble',
        description: 'Learn the basic rules and objectives of Scrabble',
        video: { title: 'Scrabble Basics', url: 'https://www.youtube.com/embed/0v5U6aY2r5Y', description: 'Overview of Scrabble rules and objectives' },
        theory: ['Scrabble is played with letters', 'The goal is to score the most points'],
        interactive: { title: 'Scrabble Practice', description: 'Play a simple Scrabble game', type: 'scrabble-board' },
        quiz: [{ question: 'How many letters are in a Scrabble word?', options: ['4', '5', '6', '7'], correct: 1, explanation: 'A Scrabble word typically has 5 letters.' }],
        xp: 100, duration: '30 min', difficulty: 'Beginner'
      },
      {
        id: '2',
        title: 'Scrabble Logic',
        description: 'Learn how to use logic to solve Scrabble puzzles',
        video: { title: 'Scrabble Logic', url: 'https://www.youtube.com/embed/NAIQyoPcjNM', description: 'Techniques for using logic in Scrabble' },
        theory: ['Logic can be used to find the best word', 'Logic can be used to find possible words'],
        interactive: { title: 'Scrabble Logic Practice', description: 'Use logic to solve Scrabble puzzles', type: 'scrabble-board' },
        quiz: [{ question: 'What is a possible word in Scrabble?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of word'], correct: 1, explanation: 'A possible word is a type of word.' }],
        xp: 150, duration: '45 min', difficulty: 'Beginner'
      },
      {
        id: '3',
        title: 'Scrabble Arithmetic',
        description: 'Learn how to use arithmetic to solve Scrabble puzzles',
        video: { title: 'Scrabble Arithmetic', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Techniques for using arithmetic in Scrabble' },
        theory: ['Arithmetic can be used to find the best word', 'Arithmetic can be used to find possible words'],
        interactive: { title: 'Scrabble Arithmetic Practice', description: 'Use arithmetic to solve Scrabble puzzles', type: 'scrabble-board' },
        quiz: [{ question: 'What is a possible word in Scrabble?', options: ['A type of clue', 'A type of answer', 'A type of puzzle', 'A type of word'], correct: 1, explanation: 'A possible word is a type of word.' }],
        xp: 200, duration: '60 min', difficulty: 'Intermediate'
      },
      {
        id: '4',
        title: 'Scrabble Strategy',
        description: 'Learn key strategies and tactics in Scrabble',
        video: { title: 'Scrabble Strategy and Tactics', url: 'https://www.youtube.com/embed/NEzyT_ZyB-A', description: 'Key strategies and tactics in Scrabble' },
        theory: ['Positioning letters', 'Blocking opponent\'s letters', 'Using the board'],
        interactive: { title: 'Scrabble Strategy Practice', description: 'Practice applying strategies in Scrabble', type: 'scrabble-board' },
        quiz: [{ question: 'What is the main objective in Scrabble?', options: ['Scoring the most points', 'Blocking the opponent', 'Building a large board', 'Playing beautiful moves'], correct: 0, explanation: 'The main objective is to score the most points.' }],
        xp: 250, duration: '75 min', difficulty: 'Intermediate'
      },
      {
        id: '5',
        title: 'Scrabble Tactics',
        description: 'Learn essential Scrabble tactics: pins, forks, and skewers',
        video: { title: 'Scrabble Tactics Explained', url: 'https://www.youtube.com/embed/Ao9iOeK_jvU', description: 'Common tactics in Scrabble' },
        theory: ['Pin: attacking a letter that cannot be used without exposing a more valuable letter', 'Fork: attacking two or more letters simultaneously', 'Skewer: forcing a valuable letter to be used and capturing the letter behind it'],
        interactive: { title: 'Scrabble Tactics Practice', description: 'Solve basic tactics puzzles in Scrabble', type: 'scrabble-board' },
        quiz: [{ question: 'What is a fork in Scrabble?', options: ['A type of endgame', 'Attacking two letters at once', 'A possible word', 'A defensive tactic'], correct: 1, explanation: 'A fork is when one letter attacks two or more enemy letters simultaneously.' }],
        xp: 300, duration: '90 min', difficulty: 'Advanced'
      },
      {
        id: '6',
        title: 'Final Scrabble Challenge',
        description: 'Put everything together in a complete Scrabble puzzle',
        video: { title: 'Complete Scrabble Puzzle', url: 'https://www.youtube.com/embed/U2huVf1l4UE', description: 'Solve a complete Scrabble puzzle' },
        theory: ['Combining all skills', 'Applying all learned techniques'],
        interactive: { title: 'Complete Scrabble Practice', description: 'Solve a complete Scrabble puzzle', type: 'scrabble-board' },
        quiz: [{ question: 'What is the main skill in Scrabble?', options: ['Scrabble logic', 'Scrabble arithmetic', 'Scrabble strategy', 'Scrabble tactics'], correct: 0, explanation: 'Scrabble logic is the main skill in Scrabble.' }],
        xp: 400, duration: '120 min', difficulty: 'Expert'
      }
    ],
    practiceModules: [
      { name: 'Quick Start', difficulty: 'Beginner', time: '5 min', xp: '50', description: 'Quick scrabble puzzle solving' },
      { name: 'Scrabble Logic', difficulty: 'Intermediate', time: '15 min', xp: '150', description: 'Use logic to solve scrabble puzzles' },
      { name: 'Scrabble Arithmetic', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Use arithmetic to solve scrabble puzzles' },
      { name: 'Scrabble Strategy', difficulty: 'Intermediate', time: '20 min', xp: '200', description: 'Practice scrabble strategy' },
      { name: 'Scrabble Tactics', difficulty: 'Advanced', time: '30 min', xp: '300', description: 'Solve scrabble tactics puzzles' }
    ]
  }
];

export const getGameById = (id: string): GameData | undefined => {
  return allGames.find(game => game.id === id);
};

export const getGamesByCategory = (category: string): GameData[] => {
  if (category === 'All') return allGames;
  
  const categoryMap: { [key: string]: string[] } = {
    'Strategy': ['chess', 'go', 'checkers', 'backgammon', 'shogi'],
    'Logic': ['sudoku', 'rubiks-cube', 'crossword', 'wordle', 'kakuro', 'minesweeper', 'mastermind', 'set', 'nim'],
    'Puzzle': ['tetris', 'mahjong', 'jigsaw'],
    'Card': ['poker', 'bridge', 'scrabble']
  };
  
  const gameIds = categoryMap[category] || [];
  return allGames.filter(game => gameIds.includes(game.id));
};

// Returns a daily quiz from any lesson in any game, deterministic by date
export const getDailyPuzzle = () => {
  // Gather all quizzes with their game and lesson context
  const allQuizzes = [];
  for (const game of allGames) {
    for (const lesson of game.lessons) {
      if (lesson.quiz && lesson.quiz.length > 0) {
        lesson.quiz.forEach((quiz, idx) => {
          allQuizzes.push({
            gameId: game.id,
            lessonId: lesson.id,
            quizIndex: idx,
            quiz
          });
        });
      }
    }
  }
  if (allQuizzes.length === 0) return null;
  // Deterministic index based on date (YYYY-MM-DD)
  const today = new Date();
  const dateStr = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
    hash |= 0;
  }
  const idx = Math.abs(hash) % allQuizzes.length;
  return allQuizzes[idx];
};