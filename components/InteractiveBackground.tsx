"use client";
import { useEffect, useState } from "react";

const InteractiveBackground = ({size=60}) => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 transition-all duration-500 ease-out"
      style={{
        background: `
          radial-gradient(
            circle at ${pos.x}% ${pos.y}%,
            rgba(248,101,49,0.15),
            rgba(196,47,53,0.12),
            rgba(19,50,79,0.12),
            rgba(0,0,0,0.95) ${size}%,
            #000000 100%
          )
        `,
      }}
    />
  );
};

export default InteractiveBackground;