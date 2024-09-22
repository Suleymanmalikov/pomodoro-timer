"use client";
import { IoMdTimer } from "react-icons/io";
import { FaStopwatch20 } from "react-icons/fa";

type SwitchButtonProps = {
  isStopWatch: boolean;
  setIsStopWatch: (isStopWatch: boolean) => void;
};

const switchButton = ({ isStopWatch, setIsStopWatch }: SwitchButtonProps) => {
  return (
    <div>
      {isStopWatch ? (
        <div>
          <button
            onClick={() => {
              setIsStopWatch(!isStopWatch);
            }}
            className="bg-slate-300 text-2xl mt-2 text-black px-6 py-2   transition duration-300"
          >
            <FaStopwatch20 />
          </button>
          <button className="bg-slate-600 text-2xl mt-2 text-white px-6 py-2   transition duration-300">
            <IoMdTimer />
          </button>
        </div>
      ) : (
        <div>
          <button className="bg-slate-600 text-2xl mt-2 text-white px-6 py-2   transition duration-300">
            <FaStopwatch20 />
          </button>
          <button
            onClick={() => {
              setIsStopWatch(!isStopWatch);
            }}
            className="bg-slate-300 mt-2 text-2xl text-black px-6 py-2   transition duration-300"
          >
            <IoMdTimer />
          </button>
        </div>
      )}
    </div>
  );
};

export default switchButton;
