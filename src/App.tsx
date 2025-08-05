import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#1976d2",
          margin: "2rem 0 1rem 0",
          fontWeight: "bold",
          letterSpacing: "2px",
          textShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        Flappy Bird
      </h1>
      <Game />
    </div>
  );
}

export default App;
