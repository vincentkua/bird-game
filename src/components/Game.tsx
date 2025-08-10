import Bird from "./Bird";
import Pipe from "./Pipe";
import Score from "./Score";
import React, { useState, useEffect, useRef, useCallback } from "react";

const PIPE_WIDTH = 60;
const PIPE_GAP = 140;
const BIRD_SIZE = 32;
const GAME_WIDTH = 400;
const GAME_HEIGHT = 600;

function getRandomPipeY() {
  return Math.floor(Math.random() * (GAME_HEIGHT - PIPE_GAP - 100)) + 50;
}

const getGravity = () => (window.innerWidth < 500 ? 0.35 : 0.6);
const getFlap = () => (window.innerWidth < 500 ? -5 : -8);

const Game: React.FC = () => {
  const [birdY, setBirdY] = useState(GAME_HEIGHT / 2);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [pipes, setPipes] = useState([{ x: GAME_WIDTH, y: getRandomPipeY() }]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setBirdY((y) => Math.max(0, y + birdVelocity));
      setBirdVelocity((v) => v + getGravity());
      setPipes((prev) => {
        const newPipes = prev.map((pipe) => ({ ...pipe, x: pipe.x - 2 }));
        if (newPipes[0].x < -PIPE_WIDTH) {
          newPipes.shift();
          newPipes.push({ x: GAME_WIDTH, y: getRandomPipeY() });
          setScore((s) => s + 1);
        }
        return newPipes;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [birdVelocity, gameOver]);

  useEffect(() => {
    // Collision detection
    if (birdY + BIRD_SIZE > GAME_HEIGHT || birdY < 0) {
      setGameOver(true);
    }
    pipes.forEach((pipe) => {
      if (
        pipe.x < 60 + BIRD_SIZE &&
        pipe.x + PIPE_WIDTH > 60 &&
        (birdY < pipe.y || birdY + BIRD_SIZE > pipe.y + PIPE_GAP)
      ) {
        setGameOver(true);
      }
    });
  }, [birdY, pipes]);

  const handleFlap = useCallback(() => {
    if (!gameOver) {
      setBirdVelocity(getFlap());
    }
  }, [gameOver]);

  const handleRestart = () => {
    setBirdY(GAME_HEIGHT / 2);
    setBirdVelocity(0);
    setPipes([{ x: GAME_WIDTH, y: getRandomPipeY() }]);
    setScore(0);
    setGameOver(false);
  };

  useEffect(() => {
    const handleSpace = (e: KeyboardEvent) => {
      if (e.code === "Space" && !gameOver) {
        handleFlap();
      }
    };
    window.addEventListener("keydown", handleSpace);
    return () => window.removeEventListener("keydown", handleSpace);
  }, [gameOver, handleFlap]);

  return (
    <div
      ref={gameRef}
      style={{
        position: "relative",
        width: "min(400px, 100vw)",
        height: "min(600px, 100vh)",
        maxWidth: "100vw",
        maxHeight: "100vh",
        background: "linear-gradient(to bottom, #90caf9, #e3f2fd)",
        overflow: "hidden",
        borderRadius: 16,
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        margin: "2rem auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={!gameOver ? handleFlap : undefined}
      tabIndex={0}
    >
      <Bird y={birdY} />
      {pipes.map((pipe, idx) => (
        <Pipe key={idx} x={pipe.x} y={pipe.y} />
      ))}
      <Score score={score} />
      {gameOver && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(30, 30, 30, 0.65)",
            zIndex: 100,
            borderRadius: 16,
            animation: "fadeIn 0.5s",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              padding: "2rem 2.5rem 1.5rem 2.5rem",
              textAlign: "center",
              minWidth: 300,
              maxWidth: 340,
              position: "relative",
            }}
          >
            <div style={{ fontSize: 40 }}>😵</div>
            <h2
              style={{
                fontSize: "2rem",
                color: "#d32f2f",
                marginBottom: "0.5rem",
                fontWeight: "bold",
                letterSpacing: "2px",
                textShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              Game Over
            </h2>
            <div
              style={{
                fontSize: "1.3rem",
                color: "#1976d2",
                marginBottom: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Your Score: <span style={{ color: "#388e3c" }}>{score}</span>
            </div>
            <button
              style={{
                padding: "10px 28px",
                fontSize: "1.1rem",
                background: "#1976d2",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                marginTop: "0.5rem",
              }}
              onClick={handleRestart}
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
