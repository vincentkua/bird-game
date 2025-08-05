import React from "react";

const PIPE_WIDTH = 60;
const PIPE_GAP = 140;
const GAME_HEIGHT = 600;

const Pipe: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <>
    {/* Top pipe */}
    <div
      style={{
        position: "absolute",
        left: x,
        top: 0,
        width: PIPE_WIDTH,
        height: y,
        background: "linear-gradient(to bottom, #388e3c, #81c784)",
        borderRadius: "0 0 32px 32px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        zIndex: 1,
      }}
    />
    {/* Bottom pipe */}
    <div
      style={{
        position: "absolute",
        left: x,
        top: y + PIPE_GAP,
        width: PIPE_WIDTH,
        height: GAME_HEIGHT - (y + PIPE_GAP),
        background: "linear-gradient(to top, #388e3c, #81c784)",
        borderRadius: "32px 32px 0 0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        zIndex: 1,
      }}
    />
  </>
);

export default Pipe;
