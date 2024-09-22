"use client";
import { useState } from "react";

import StopWatch from "./components/StopWatch/stopWatch";
import SwitchButton from "./components/SwitchButton/switchButton";
import Timer from "./components/Timer/timer";

export default function Home() {
  const [isStopWatch, setIsStopWatch] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <SwitchButton isStopWatch={isStopWatch} setIsStopWatch={setIsStopWatch} />
      {isStopWatch ? <StopWatch /> : <Timer />}
    </div>
  );
}
