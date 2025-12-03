"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/logos/esummit26.png";
import Res from "@/public/reg.png";
import Particle from "@/components/particle";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero: FunctionComponent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1.3, 0.3]);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // animation variants for buttons
  const buttonVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: i * 0.25 + 0.6, // staggered entry
      },
    }),
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center bg-transparent text-white p-10 py-36">
      {/* Background Particles */}
      <div className="absolute inset-0 -z-10">
        <Particle />
      </div>

      <motion.div
        style={{ scale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="text-center flex flex-col items-center gap-4"
      >
        {/* Gradient Heading */}
        <h2
          style={{
            background: "linear-gradient(90deg, #487AFA, #23C0AD, #F1E821)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="text-xl font-mono"
        >
          presents
        </h2>

        {/* Logo */}
        <Image
          unoptimized
          src={Logo}
          width={isSmallScreen ? 240 : 320}
          height={isSmallScreen ? 240 : 320}
          alt="E-Summit'26 Logo"
          className="mx-auto drop-shadow-[0_0_15px_#487AFA]"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-6 text-gray-300 max-w-sm sm:max-w-md md:max-w-xl text-sm sm:text-base md:text-lg font-extralight leading-relaxed hidden md:block"
        >
          Are you one of those people working day and night on that one startup
          idea? Are you the one who wants to explore the world of entrepreneurship?
          You&apos;ve arrived at the proper location. You are wanted by us!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col gap-6 items-center w-full"
          initial="hidden"
          animate="visible"
        >
          {/* E-Summit Button */}
          <motion.div custom={0} variants={buttonVariants} className="w-full sm:w-[280px] md:w-[310px] relative mx-3">
            <Link href="/payment?type=esummit">
              <button
                className="w-full bg-gradient-to-r from-[#487AFA] via-[#23C0AD] to-[#F1E821]
                  text-white px-6 py-3.5 rounded-full flex gap-2 font-extrabold
                  transition-transform hover:scale-105 shadow-[0_0_15px_#487AFA]
                  hover:shadow-[0_0_25px_#F1E821] text-[0.7rem] sm:text-[0.6rem]
                  md:text-[0.9rem] relative"
              >
                <span className="pointer-events-none">
                  Register for E-Summit Passes
                </span>

                <Image
                  src={Res}
                  alt="Arrow Icon"
                  width={50}
                  height={50}
                  unoptimized
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                />
              </button>
            </Link>
          </motion.div>

          {/* Startup Expo Button */}
          <motion.div custom={1} variants={buttonVariants} className="w-full sm:w-[280px] md:w-[310px] relative mx-3">
            <Link href="/payment?type=StartupExpo">
              <button
                className="w-full bg-gradient-to-r from-[#487AFA] via-[#23C0AD] to-[#F1E821]
                  text-white px-6 py-3.5 rounded-full flex gap-2 font-extrabold
                  transition-transform hover:scale-105 shadow-[0_0_15px_#487AFA]
                  hover:shadow-[0_0_25px_#F1E821] text-[0.7rem] sm:text-[0.5rem]
                  md:text-[0.9rem] relative"
              >
                <span className="pointer-events-none">
                  Register for Startup Expo
                </span>

                <Image
                  src={Res}
                  alt="Arrow Icon"
                  width={50}
                  height={50}
                  unoptimized
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <ToastContainer />
    </section>
  );
};

export default Hero;
