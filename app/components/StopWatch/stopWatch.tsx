import React, { useEffect, useState } from "react";

import { formatTime } from "../../utils/formatTime";

const StopWatch = () => {
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
    <div>
      <h1 className="text-4xl font-bold text-center text-blue-500 mt-8">
        Stopwatch
      </h1>
      <div className="flex justify-center items-center mt-10 mb-10">
        <span className="text-4xl font-mono text-gray-700">
          {formatTime(time)}
        </span>
      </div>
      <div className="flex flex-row justify-center mt-4 ">
        <button
          className="bg-blue-600 mt-2 mr-6 text-white px-8 py-2 rounded-md hover:bg-blue-800 transition duration-300"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          className="bg-red-600 mt-2 text-white px-8 py-2 rounded-md hover:bg-red-800 transition duration-300"
          onClick={() => setTime(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
