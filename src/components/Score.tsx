import React from "react";

const Score: React.FC<{ score: number }> = ({ score }) => (
  <div
    style={{
      position: "absolute",
      top: 16,
      left: 0,
      width: "100%",
      textAlign: "center",
      fontSize: 28,
      color: "#1976d2",
      fontWeight: "bold",
      textShadow: "0 2px 8px rgba(0,0,0,0.2)",
      zIndex: 10,
    }}
  >
    Score: {score}
  </div>
);

export default Score;
