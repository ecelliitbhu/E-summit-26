"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

type EventProps = {
  title: string;
  description: string;
  imageUrl: string;
  eventPage: string;
};

const EventsCard = (props: EventProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shortDescription = `${props.description.substring(0, 100)}...`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 12,
          duration: 0.6,
        }}
        viewport={{ once: true }}
        className="flex justify-center m-4"
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: 0.5,
            boxShadow: "0px 0px 25px rgba(255, 215, 0, 0.2)",
          }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="
            sm:w-72 py-6 px-3 rounded-2xl
            bg-gradient-to-b from-[#1a1a1a] via-[#0d0d0d] to-[#000000]
            border border-yellow-500/30 shadow-lg
            hover:border-yellow-400 transition-all duration-300
          "
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Image
              unoptimized
              src={props.imageUrl}
              alt={props.title}
              width={250}
              height={200}
              className="rounded-md object-cover border border-yellow-400/20 transition-transform duration-500"
            />
          </motion.div>

          <h1 className="text-center font-bold text-xl text-yellow-400 mt-4 tracking-wide">
            {props.title}
          </h1>

          <p className="text-sm text-gray-300 p-4 leading-relaxed overflow-hidden">
            {shortDescription}
          </p>

          <div className="flex justify-center">
            <span
              onClick={() => setIsModalOpen(true)}
              className="text-yellow-400 font-semibold cursor-pointer hover:text-yellow-300 transition-colors duration-300"
            >
              Read more
            </span>
          </div>

          <div className="flex justify-center mt-4">
            <motion.a
              href={props.eventPage}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -3,
                boxShadow: "0px 0px 15px rgba(255,215,0,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="secondary"
                className="
                  bg-yellow-500 text-black font-semibold 
                  hover:bg-yellow-400 shadow-md transition-all duration-300
                  rounded-full px-6 py-2
                "
              >
                Register
              </Button>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* ---------------- MODAL ---------------- */}
      {/* ---------------- MODAL ---------------- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)} // click anywhere on backdrop closes modal
          >
            <motion.div
              className="bg-transparent border border-white backdrop-blur-md rounded-xl shadow-2xl max-w-lg w-11/12 p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // content click won't close modal
            >
              <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center">
                {props.title}
              </h2>

              <p className="text-white text-sm leading-relaxed">
                {props.description}
              </p>

              <div className="flex justify-center mt-6">
                <motion.a
                  href={props.eventPage}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -3,
                    boxShadow: "0px 0px 15px rgba(255,215,0,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="secondary"
                    className="
                bg-yellow-500 text-black font-semibold 
                hover:bg-yellow-400 shadow-md transition-all duration-300
                rounded-full px-6 py-2
              "
                  >
                    Register
                  </Button>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default EventsCard;
