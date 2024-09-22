import { SetStateAction, useEffect, useState } from "react";

import { formatTime } from "../../utils/formatTime";
import { time } from "console";

const timer = () => {
  const [inputValue, setInputValue] = useState(0);
  const [inputSecond, setInputSecond] = useState(0);
  const [inputMinute, setInputMinute] = useState(0);
  const [inputHour, setInputHour] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const totalSeconds = inputSecond + inputMinute * 60 + inputHour * 3600;

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const startTimer = (time: any) => {
    setTimeLeft(time);
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimerStarted(false);
    setTimeLeft(0);
    setInputValue(0);
  };

  const handleMouseWheel = (
    e: React.WheelEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<number>>,
    max: number
  ) => {
    const change = e.deltaY < 0 ? 1 : -1;
    setter((prev) => Math.min(Math.max(0, prev + change), max));
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-blue-500 mt-8">
        Timer
      </h1>
      {timerStarted ? (
        <div className="flex justify-center items-center mt-10 mb-10">
          <span className="text-4xl font-mono text-gray-700">
            {formatTime(timeLeft)}
          </span>
        </div>
      ) : (
        <div className="mt-10 mb-10">
          <input
            type="number"
            value={inputHour}
            onWheel={(e) => handleMouseWheel(e, setInputHour, 59)}
            placeholder="Enter time in seconds"
            className="text-4xl  border text-center  focus:outline-none "
            min={0}
            max={59}
          />
          <input
            type="number"
            value={inputMinute}
            onWheel={(e) => handleMouseWheel(e, setInputMinute, 59)}
            placeholder="Enter time in seconds"
            className="text-4xl  border text-center  focus:outline-none "
            min={0}
            max={59}
          />
          <input
            type="number"
            value={inputSecond}
            onWheel={(e) => handleMouseWheel(e, setInputSecond, 59)}
            placeholder="Enter time in seconds"
            className="text-4xl  border text-center  focus:outline-none "
            min={0}
            max={59}
          />
        </div>
      )}

      <div className="flex justify-center mt-4 ">
        <button
          onClick={() => {
            setIsActive(!isActive);
            if (inputHour > 0 || inputMinute > 0 || inputSecond > 0) {
              startTimer(totalSeconds);
              setTimerStarted(true);
              setInputHour(0);
              setInputMinute(0);
              setInputSecond(0);
            } else if (!isActive) {
              startTimer(timeLeft);
            }
          }}
          className="bg-blue-600 mt-2 text-white px-8 py-2 rounded-md hover:bg-blue-800 transition duration-300"
        >
          {isActive ? "Pause" : "Start"}
        </button>
      </div>
      <div>
        <button
          onClick={resetTimer}
          className="bg-red-600 mt-2 text-white px-8 py-2 rounded-md hover:bg-red-800 transition duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default timer;
