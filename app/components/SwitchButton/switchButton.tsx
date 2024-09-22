"use client";
import { useState } from "react";

type SwitchButtonProps = {
  isStopWatch: boolean;
  setIsStopWatch: (isStopWatch: boolean) => void;
};

const switchButton = ({ isStopWatch, setIsStopWatch }: SwitchButtonProps) => {
  return (
    <div>
      <button
        onClick={() => setIsStopWatch(!isStopWatch)}
        className="bg-slate-600 mt-2 text-white px-8 py-2 rounded-md hover:bg-slate-800 transition duration-300"
      >
        {isStopWatch ? "Timer" : "Stopwatch"}
      </button>
    </div>
  );
};

export default switchButton;
