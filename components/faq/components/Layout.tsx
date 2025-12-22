import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import Accordion from "./Accordion";
import down from "../../../public/down.png";

const NAVBAR_HEIGHT = 64; // Adjust to match your navbar height

type Props = {
  question: string;
  answer: string;
  idx: number;
};

interface LayoutProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  isSomeActive: boolean;
  turn: boolean[];
  setTurn: Dispatch<SetStateAction<boolean[]>>;
  data: Props[];
}

const Layout = ({ handleClick, isSomeActive, data, turn, setTurn }: LayoutProps) => {
  return (
    <section
      className="w-full flex justify-center px-2 sm:px-4 md:px-8 py-10 overflow-x-hidden"
      style={{
        minHeight: `calc(100svh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <div
        className="w-full max-w-[95vw] md:max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.45)] overflow-hidden flex flex-col"
        style={{
          maxHeight: `calc(100svh - ${NAVBAR_HEIGHT + 32}px)`,
        }}
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center gap-3 py-6 sm:py-8 md:py-10 overflow-auto">
          <h2
            className="font-extrabold tracking-tight text-[1.6rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]"
            style={{
              background: "linear-gradient(90deg,#487AFA,#23C0AD,#F1E821)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Frequently Asked Questions
          </h2>

          {/* Open/Close All Button */}
          <div className="flex items-center justify-center w-full mb-4">
            <button
              className="flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base font-bold py-2 px-4 bg-black rounded-md"
              onClick={handleClick}
            >
              <span className="text-sky-500 min-w-fit">
                {!isSomeActive ? "Open All" : "Close All"}
              </span>
              <div className={`relative transition-all ease-in-out duration-200 ${isSomeActive ? "rotate-0" : "rotate-180"}`}>
                <Image unoptimized src={down} alt="Toggle All" width={14} height={14}/>
              </div>
            </button>
          </div>

          {/* Accordions */}
          <div className="flex flex-col w-full gap-2 sm:gap-3">
            {data.map((el, i) => (
              <Accordion
                key={i}
                question={el.question}
                answer={el.answer}
                turn={turn}
                setTurn={setTurn}
                idx={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
