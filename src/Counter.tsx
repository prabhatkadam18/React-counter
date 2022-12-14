import "./styles.css";
import { useEffect, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    const interval: NodeJS.Timer = setInterval(() => {
      if (isRunning) {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCounter(0);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleStartPause}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
