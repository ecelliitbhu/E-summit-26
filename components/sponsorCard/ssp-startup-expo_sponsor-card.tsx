"use client";

import React from "react";
import Image from "next/image";
import styles from "./sponsor_card.module.css";
import SvgDefs from "./svg_defs";

import acc from "public/startupexpo/acc.png.jpeg";
import allin from "public/startupexpo/allin.png.jpeg";
import antler from "public/startupexpo/antler.png.jpeg";
import athera from "public/startupexpo/athera.png.jpeg";
import aws from "public/startupexpo/aws.png.jpeg";
import axilar from "public/startupexpo/axilar.png.jpeg";
import earnbuddy from "public/startupexpo/earnbuddy.png.jpeg";
import faad from "public/startupexpo/faad.png.jpeg";
import fibo from "public/startupexpo/fibo.png.jpeg";
import fortytwo from "public/startupexpo/fortytwo.png.jpeg";
import freshworks from "public/startupexpo/freshworks.png.jpeg";
import ibhubs from "public/startupexpo/ibhubs.png.jpeg";
import india from "public/startupexpo/india.png.jpeg";
import indianangel from "public/startupexpo/indianangel.png.jpeg";
import infi from "public/startupexpo/infi.png.jpeg";
import inflection from "public/startupexpo/inflection.png.jpeg";
import ivy from "public/startupexpo/ivy.png.jpeg";
import micro from "public/startupexpo/micro.png.jpeg";
import netcore from "public/startupexpo/netcore.png.jpeg";
import oracle from "public/startupexpo/oracle.png.jpeg";
import peakxv from "public/startupexpo/peakxv.png.jpeg";
import westbridge from "public/startupexpo/westbridge.png.jpeg";
import yesstartup from "public/startupexpo/yesstartup.png.jpeg";
import zohoforstartup from "public/startupexpo/zohoforstartup.png.jpeg";


const SPONSORS = [
  "/startupexpo/micro.png.jpeg",
  "/startupexpo/zohoforstartup.png.jpeg",
  "/startupexpo/infi.png.jpeg",
  "/startupexpo/netcore.png.jpeg",
  "/startupexpo/ivy.png.jpeg",
  "/startupexpo/ibhubs.png.jpeg",
  "/startupexpo/oracle.png.jpeg",
  "/startupexpo/freshworks.png.jpeg",
  "/startupexpo/yesstartup.png.jpeg",
  "/startupexpo/aws.png.jpeg",
  "/startupexpo/earnbuddy.png.jpeg",
];


const MarqueeGroup = () => (
  <div className={styles.marquee__group}>
    {SPONSORS.map((img, index) => (
      <Image
        key={index}
        src={img}
        alt="Sponsor Logo"
        height={140}
        width={200}
        className={styles.cardh}
      />
    ))}
  </div>
);

const MarqueeComponentSsp = () => {
  return (
    /* isme {styles.root rahega}*/
    <div className= {styles.root}> 
      <h2 className="text-center text-4xl md:text-6xl font-bold text-white mb-10">
        <span
          style={{
            background: "linear-gradient(90deg, #487AFA, #23C0AD, #F1E821)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Startup Service Partners
        </span>
      </h2>

      <div className={styles.wrapper}>
        <SvgDefs />

        <div className={styles.marquee}>
          <MarqueeGroup />
          <MarqueeGroup aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponentSsp;
