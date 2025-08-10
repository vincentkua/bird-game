import React from "react";

const PIPE_WIDTH = 60;
const PIPE_GAP = 140;
const GAME_HEIGHT = 600;
const PIPE_LIP_HEIGHT = 20;
const PIPE_LIP_WIDTH = PIPE_WIDTH + 16;

const Pipe: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <>
    {/* Top pipe body */}
    <div
      style={{
        position: "absolute",
        left: x,
        top: 0,
        width: PIPE_WIDTH,
        height: y - PIPE_LIP_HEIGHT,
        background: "linear-gradient(to right, #2d7d32, #388e3c, #2d7d32)",
        border: "2px solid #1b5e20",
        borderBottom: "none",
        zIndex: 1,
        backgroundImage: `repeating-linear-gradient(90deg, rgba(45, 125, 50, 0.9), rgba(45, 125, 50, 0.9) 8px, rgba(29, 94, 32, 0.7) 8px, rgba(29, 94, 32, 0.7) 10px)`,
      }}
    />
    {/* Top pipe lip */}
    <div
      style={{
        position: "absolute",
        left: x - 8,
        top: y - PIPE_LIP_HEIGHT,
        width: PIPE_LIP_WIDTH,
        height: PIPE_LIP_HEIGHT,
        background: "linear-gradient(to bottom, #4caf50, #388e3c, #2d7d32)",
        border: "2px solid #1b5e20",
        borderRadius: "8px 8px 4px 4px",
        boxShadow: "0 3px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
        zIndex: 2,
      }}
    />
    
    {/* Bottom pipe body */}
    <div
      style={{
        position: "absolute",
        left: x,
        top: y + PIPE_GAP + PIPE_LIP_HEIGHT,
        width: PIPE_WIDTH,
        height: GAME_HEIGHT - (y + PIPE_GAP + PIPE_LIP_HEIGHT),
        background: "linear-gradient(to right, #2d7d32, #388e3c, #2d7d32)",
        border: "2px solid #1b5e20",
        borderTop: "none",
        zIndex: 1,
        backgroundImage: `repeating-linear-gradient(90deg, rgba(45, 125, 50, 0.9), rgba(45, 125, 50, 0.9) 8px, rgba(29, 94, 32, 0.7) 8px, rgba(29, 94, 32, 0.7) 10px)`,
      }}
    />
    {/* Bottom pipe lip */}
    <div
      style={{
        position: "absolute",
        left: x - 8,
        top: y + PIPE_GAP,
        width: PIPE_LIP_WIDTH,
        height: PIPE_LIP_HEIGHT,
        background: "linear-gradient(to bottom, #4caf50, #388e3c, #2d7d32)",
        border: "2px solid #1b5e20",
        borderRadius: "4px 4px 8px 8px",
        boxShadow: "0 3px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
        zIndex: 2,
      }}
    />
  </>
);

export default Pipe;
