import React from "react";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About/about";
import WSYA from "@/components/WSYA/WSYA";
import SlidersComponent from "@/components/SliderComponent";
import MarqueeComponent from "@/components/sponsorCard/sponsor_card";
import FAQ from "@/components/FAQ";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden">
      {/* ANIMATED BACKGROUND FOR ENTIRE PAGE */}
      <InteractiveBackground size={45} />
      <div className="fixed inset-0 -z-20">
        <AnimatedBackground />
      </div>

      {/* Optional: Add a subtle ambient light glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] -z-10" />

      <main className="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          <Hero />
          <Stats />
          <About />
          <WSYA />
          <SlidersComponent />
          <MarqueeComponent />
          <FAQ />
        </div>
      </main>
    </section>
  );
}
