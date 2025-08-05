import React from "react";

const BIRD_SIZE = 32;

const Bird: React.FC<{ y: number }> = ({ y }) => (
  <div
    style={{
      position: "absolute",
      left: 60,
      top: y,
      width: BIRD_SIZE,
      height: BIRD_SIZE,
      background: "yellow",
      borderRadius: "50%",
      border: "4px solid #fbc02d",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      zIndex: 2,
    }}
  >
    <div
      style={{
        position: "absolute",
        right: -8,
        top: 8,
        width: 12,
        height: 12,
        background: "#fff",
        borderRadius: "50%",
        border: "2px solid #333",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: -8,
        top: 16,
        width: 16,
        height: 8,
        background: "#ff9800",
        borderRadius: "0 0 8px 8px",
        transform: "rotate(-20deg)",
      }}
    />
  </div>
);

export default Bird;
