import React, { useState, Suspense, useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw, CheckCircle, AlertCircle } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

interface InteractiveBoardProps {
  gameId: string;
  type: 'chess-board' | 'sudoku-grid' | 'rubiks-cube' | 'crossword-grid' | 'go-board' | 'poker-table' | 'tetris-board' | 'wordle-grid' | 'mahjong-table' | 'backgammon-board' | 'scrabble-board' | 'bridge-table' | 'checkers-board' | 'kakuro-grid' | 'minesweeper-grid' | 'jigsaw-board' | 'shogi-board' | 'mastermind-board' | 'set-cards' | 'nim-board';
  title: string;
  description: string;
}

function RubiksCubeModel() {
  const gltf = useGLTF('/rubix_cube.glb');
  return <primitive object={gltf.scene} scale={2.2} />;
}

// --- Custom Interactive Rubik's Cube ---
import * as THREE from 'three';

const CUBE_SIZE = 3;
const CUBIE_SIZE = 0.9;
const GAP = 0.05;

// Rubik's Cube face colors (standard):
const FACE_COLORS = {
  U: '#ffffff', // white (Up)
  D: '#ffd600', // yellow (Down)
  F: '#43a047', // green (Front)
  B: '#1976d2', // blue (Back)
  L: '#ff9800', // orange (Left)
  R: '#e53935', // red (Right)
};

// Helper: get initial cubie face colors for solved state
function getInitialCubieColors(x: number, y: number, z: number) {
  return {
    U: y === 1 ? FACE_COLORS.U : '#222',
    D: y === -1 ? FACE_COLORS.D : '#222',
    F: z === 1 ? FACE_COLORS.F : '#222',
    B: z === -1 ? FACE_COLORS.B : '#222',
    L: x === -1 ? FACE_COLORS.L : '#222',
    R: x === 1 ? FACE_COLORS.R : '#222',
  };
}

// Helper: orientation rotation for each axis
const rotateOrientation = {
  x: (ori, cw) => {
    // U->B->D->F->U (cycle)
    return {
      U: cw ? ori.B : ori.F,
      B: cw ? ori.D : ori.U,
      D: cw ? ori.F : ori.B,
      F: cw ? ori.U : ori.D,
      L: ori.L,
      R: ori.R,
    };
  },
  y: (ori, cw) => {
    // F->R->B->L->F (cycle)
    return {
      F: cw ? ori.L : ori.R,
      R: cw ? ori.B : ori.F,
      B: cw ? ori.R : ori.L,
      L: cw ? ori.F : ori.B,
      U: ori.U,
      D: ori.D,
    };
  },
  z: (ori, cw) => {
    // U->L->D->R->U (cycle)
    return {
      U: cw ? ori.L : ori.R,
      L: cw ? ori.D : ori.U,
      D: cw ? ori.R : ori.L,
      R: cw ? ori.U : ori.D,
      F: ori.F,
      B: ori.B,
    };
  },
};

function createSolvedCubeState() {
  // 3x3x3 array of cubies, each with position, orientation, and stickers
  const cubies = [];
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        // Each cubie has a fixed sticker color for each face in solved state
        const stickers = getInitialCubieColors(x, y, z);
        // Initial orientation: local faces map to global faces
        const orientation = { U: 'U', D: 'D', F: 'F', B: 'B', L: 'L', R: 'R' };
        cubies.push({
          pos: [x, y, z],
          orientation,
          stickers,
          key: `${x},${y},${z}`,
        });
      }
    }
  }
  return cubies;
}

function Cubie({ x, y, z, orientation, stickers }) {
  // For each face, get the sticker color based on orientation
  // meshStandardMaterial order: R, L, F, B, U, D
  const faceOrder = ['R', 'L', 'F', 'B', 'U', 'D'];
  const colors = faceOrder.map(face => {
    // Which global face is this local face currently pointing to?
    const globalFace = orientation[face];
    return stickers[globalFace] || '#222';
  });
  return (
    <mesh position={[x, y, z]} castShadow receiveShadow>
      <boxGeometry args={[CUBIE_SIZE, CUBIE_SIZE, CUBIE_SIZE]} />
      {colors.map((color, i) => (
        <meshStandardMaterial key={i} attach={`material-${i}`} color={color} />
      ))}
    </mesh>
  );
}

function rotateLayer(cubies, axis, value, clockwise = true) {
  // axis: 0=x, 1=y, 2=z
  // value: -1, 0, 1 (which slice)
  // clockwise: true=90deg, false=-90deg
  // Returns a new cubies array with updated positions and orientation
  const axisName = ['x', 'y', 'z'][axis];
  return cubies.map(cubie => {
    const [x, y, z] = cubie.pos;
    if ((axis === 0 && x === value) || (axis === 1 && y === value) || (axis === 2 && z === value)) {
      // Rotate position
      let newPos = [...cubie.pos];
      if (axis === 0) newPos = [x, clockwise ? -z : z, clockwise ? y : -y];
      if (axis === 1) newPos = [clockwise ? z : -z, y, clockwise ? -x : x];
      if (axis === 2) newPos = [clockwise ? -y : y, clockwise ? x : -x, z];
      // Rotate orientation
      const newOrientation = rotateOrientation[axisName](cubie.orientation, clockwise);
      return { ...cubie, pos: newPos, orientation: newOrientation };
    }
    return { ...cubie };
  });
}

function InteractiveRubiksCube() {
  const [cubies, setCubies] = useState(createSolvedCubeState());

  // Rotation handlers
  const rotate = useCallback((layer, clockwise = true) => {
    if (layer === 'U') setCubies(c => rotateLayer(c, 1, 1, clockwise));
    if (layer === 'D') setCubies(c => rotateLayer(c, 1, -1, clockwise));
    if (layer === 'F') setCubies(c => rotateLayer(c, 2, 1, clockwise));
    if (layer === 'B') setCubies(c => rotateLayer(c, 2, -1, clockwise));
    if (layer === 'L') setCubies(c => rotateLayer(c, 0, -1, clockwise));
    if (layer === 'R') setCubies(c => rotateLayer(c, 0, 1, clockwise));
  }, []);

  // Scramble: random sequence of 20 moves
  const scramble = () => {
    const moves = ['U', 'D', 'F', 'B', 'L', 'R'];
    let tempCubies = cubies;
    for (let i = 0; i < 20; i++) {
      const move = moves[Math.floor(Math.random() * moves.length)];
      const clockwise = Math.random() > 0.5;
      tempCubies = rotateLayer(tempCubies, 'UDFBLR'.indexOf(move) % 3, [1, -1, 1, -1, -1, 1]['UDFBLR'.indexOf(move)], clockwise);
    }
    setCubies(tempCubies);
  };

  // Reset: solved state
  const reset = () => setCubies(createSolvedCubeState());

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }} style={{ width: '100%', height: '100%' }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} castShadow />
        <group>
          {cubies.map((cubie) => (
            <Cubie key={cubie.key} x={cubie.pos[0]} y={cubie.pos[1]} z={cubie.pos[2]} orientation={cubie.orientation} stickers={cubie.stickers} />
          ))}
        </group>
        <OrbitControls enablePan={false} />
      </Canvas>
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        <button onClick={() => rotate('U', true)} className="px-2 py-1 bg-gray-700 text-white rounded">U</button>
        <button onClick={() => rotate('D', true)} className="px-2 py-1 bg-gray-700 text-white rounded">D</button>
        <button onClick={() => rotate('F', true)} className="px-2 py-1 bg-gray-700 text-white rounded">F</button>
        <button onClick={() => rotate('B', true)} className="px-2 py-1 bg-gray-700 text-white rounded">B</button>
        <button onClick={() => rotate('L', true)} className="px-2 py-1 bg-gray-700 text-white rounded">L</button>
        <button onClick={() => rotate('R', true)} className="px-2 py-1 bg-gray-700 text-white rounded">R</button>
        <button onClick={scramble} className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded shadow">Scramble</button>
        <button onClick={reset} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded shadow">Reset</button>
      </div>
    </div>
  );
}
// --- End Custom Rubik's Cube ---

const InteractiveBoard: React.FC<InteractiveBoardProps> = ({ gameId, type, title, description }) => {
  const [isActive, setIsActive] = useState(false);
  const [moves, setMoves] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string>('');

  const handleStart = () => {
    setIsActive(true);
    setFeedback('Practice session started! Try making moves.');
  };

  const handleReset = () => {
    setIsActive(false);
    setMoves([]);
    setFeedback('');
  };

  const getChessPiece = (row: number, col: number): string => {
    if (row === 0) {
      const pieces = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];
      return pieces[col];
    }
    if (row === 1) return '♟';
    if (row === 6) return '♙';
    if (row === 7) {
      const pieces = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'];
      return pieces[col];
    }
    return '';
  };

  const handleSquareClick = (row: number, col: number) => {
    if (!isActive) return;
    const move = `${String.fromCharCode(97 + col)}${8 - row}`;
    setMoves(prev => [...prev, move]);
    setFeedback(`Clicked square ${move}`);
  };

  const handleSudokuInput = (row: number, col: number, value: string) => {
    if (!isActive) return;
    if (!/^[1-9]?$/.test(value)) return;
    setFeedback(value ? `Placed ${value} at row ${row + 1}, column ${col + 1}` : 'Cell cleared');
  };

  const renderBoard = () => {
    switch (type) {
      case 'chess-board':
        return (
          <div className="w-full max-w-md mx-auto">
            <div className="grid grid-cols-8 gap-0 border-2 border-primary/30 rounded-lg overflow-hidden">
              {Array.from({ length: 64 }).map((_, index) => {
                const row = Math.floor(index / 8);
                const col = index % 8;
                const isLight = (row + col) % 2 === 0;
                const piece = getChessPiece(row, col);
                
                return (
                  <div
                    key={index}
                    className={`w-12 h-12 flex items-center justify-center text-2xl cursor-pointer hover:bg-primary/20 transition-colors ${
                      isLight ? 'bg-amber-100' : 'bg-amber-800'
                    }`}
                    onClick={() => handleSquareClick(row, col)}
                  >
                    {piece}
                  </div>
                );
              })}
            </div>
          </div>
        );
      
      case 'sudoku-grid':
        return (
          <div className="w-full max-w-md mx-auto">
            <div className="grid grid-cols-9 gap-0 border-2 border-primary/30 rounded-lg overflow-hidden">
              {Array.from({ length: 81 }).map((_, index) => {
                const row = Math.floor(index / 9);
                const col = index % 9;
                const boxRow = Math.floor(row / 3);
                const boxCol = Math.floor(col / 3);
                const isAlternateBox = (boxRow + boxCol) % 2 === 1;
                
                return (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className={`w-8 h-8 text-center border border-border text-foreground bg-transparent focus:bg-primary/10 focus:outline-none ${
                      isAlternateBox ? 'bg-muted/20' : ''
                    } ${(col % 3 === 2 && col < 8) ? 'border-r-2 border-r-primary/50' : ''} ${
                      (row % 3 === 2 && row < 8) ? 'border-b-2 border-b-primary/50' : ''
                    }`}
                    onChange={(e) => handleSudokuInput(row, col, e.target.value)}
                  />
                );
              })}
            </div>
          </div>
        );
      
      case 'rubiks-cube':
        return (
          <div className="w-full max-w-md mx-auto h-72 bg-muted/20 rounded-lg flex items-center justify-center">
            <InteractiveRubiksCube />
            {/* TODO: Add UI buttons for rotating layers */}
          </div>
        );
      
      default:
        return (
          <div className="w-full h-64 bg-muted/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🎮</div>
              <p className="text-muted-foreground">Interactive {gameId} board coming soon!</p>
            </div>
          </div>
        );
    }
  };

  return (
    <Card className="glass-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Play className="w-5 h-5 text-primary" />
          {title}
        </CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {renderBoard()}
        
        <div className="flex gap-2 justify-center">
          <Button
            onClick={handleStart}
            disabled={isActive}
            className="bg-green-600 hover:bg-green-700"
          >
            <Play className="w-4 h-4 mr-2" />
            Start Practice
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="border-border"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>

        {feedback && (
          <div className="flex items-center gap-2 p-3 bg-muted/20 rounded-lg">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm">{feedback}</span>
          </div>
        )}

        {moves.length > 0 && (
          <div className="p-3 bg-muted/20 rounded-lg">
            <h4 className="text-sm font-semibold mb-2">Move History:</h4>
            <div className="flex flex-wrap gap-1">
              {moves.map((move, index) => (
                <span key={index} className="text-xs bg-primary/20 px-2 py-1 rounded">
                  {move}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InteractiveBoard;

