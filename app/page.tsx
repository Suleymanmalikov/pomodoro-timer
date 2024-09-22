"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1>Timer App</h1>
      <div>
        <span>{time}</span>
      </div>
      <div>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
      <div>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
}
