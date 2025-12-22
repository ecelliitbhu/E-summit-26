"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NAVBAR_HEIGHT = 64; // Adjust this if your navbar is taller

const About = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 90%", "end 40%"],
  });

  const heroText =
    "E-Summit is a high-energy celebration where innovation, entrepreneurship, and bold ideas converge to shape the future, brought to you by the Entrepreneurship Cell, IIT (BHU).";

  const words = heroText.split(" ");

  return (
    <section
      id="about"
      className="relative w-full flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden"
      style={{
        minHeight: `calc(100svh - ${NAVBAR_HEIGHT}px)`, // fits viewport minus navbar
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[280px] h-[180px] sm:w-[420px] sm:h-[300px] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[95vw] md:max-w-6xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.45)] overflow-hidden"
        style={{
          maxHeight: `calc(100svh - ${NAVBAR_HEIGHT + 32}px)`, // prevents overflow on small screens
        }}
      >
        {/* Card Content */}
        <div className="flex flex-col items-center justify-center text-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-12">
          {/* Heading */}
          <h3
            className="font-extrabold tracking-tight text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3rem]"
            style={{
              background: "linear-gradient(90deg,#487AFA,#23C0AD,#F1E821)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ABOUT E-SUMMIT&apos;26
          </h3>

          {/* Animated Paragraph */}
          <motion.p
            ref={textRef}
            className="flex flex-wrap justify-center font-medium leading-snug text-[0.95rem] sm:text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem]"
          >
            {words.map((word, index) => {
              const start = index / words.length;
              const end = start + 1 / words.length;

              const color = useTransform(
                scrollYProgress,
                [start, end],
                ["#9CA3AF", "#FFFFFF"]
              );

              return (
                <React.Fragment key={index}>
                  <motion.span style={{ color }}>{word}</motion.span>
                  <span>&nbsp;</span>
                </React.Fragment>
              );
            })}
          </motion.p>

          {/* Quote */}
          <p className="opacity-80 text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.1rem]">
            <span className="text-yellow-400">
              &quot;The drive to create, innovate and transform the future.&quot;
            </span>
          </p>

          {/* Footer Paragraph */}
          <p className="opacity-80 text-[0.75rem] sm:text-[0.85rem] md:text-[1rem] lg:text-[1.05rem] max-w-xl">
            E-Summit is where ideas are nurtured, ambitions take form, and the
            next generation of entrepreneurs begins its journey.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
