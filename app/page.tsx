"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-center text-blue-500 mt-8">
        Timer App
      </h1>
      <div className="flex justify-center items-center mt-4">
        <span className="text-2xl font-mono text-gray-700">
          {formatTime(time)}
        </span>
      </div>
      <div className="flex justify-center mt-4 ">
        <button
          className="bg-blue-600 mt-2 text-white px-8 py-2 rounded-md hover:bg-blue-800 transition duration-300"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
      <div>
        <button
          className="bg-red-600 mt-2 text-white px-8 py-2 rounded-md hover:bg-red-800 transition duration-300"
          onClick={() => setTime(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

const formatTime = (time: number) => {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${Number(minutes) % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  return `${getHours}:${getMinutes}:${getSeconds}`;
};
