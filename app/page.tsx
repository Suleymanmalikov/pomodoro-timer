"use client";
import { useState } from "react";

import StopWatch from "./components/StopWatch/StopWatch";
import SwitchButton from "./components/SwitchButton/SwitchButton";
import Timer from "./components/Timer/Timer";

export default function Home() {
  const [isStopWatch, setIsStopWatch] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <SwitchButton isStopWatch={isStopWatch} setIsStopWatch={setIsStopWatch} />
      {isStopWatch ? <Timer /> : <StopWatch />}
    </div>
  );
}
