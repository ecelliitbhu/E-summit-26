// "use client";
// import MarqueeComponent from "@/components/sponsorCard/sponsor_card";
import About from "@/components/About/about";
import WSYA from "@/components/WSYA/WSYA";
import Hero from "@/components/Hero";
import IntroVideo from "@/components/IntroVideo";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";
import React from "react";
import MarqueeComponent from "@/components/sponsorCard/sponsor_card";
import SlidersComponent from "@/components/SliderComponent";


// import CTA from "@/components/CTA";
// import CustomSlider from "@/components/CustomSlider";


export default function Home() {
  
  return (

    <section className="pb-8 pt-6 md:py-10">
      <IntroVideo />
      <main className="grid items-center px-4 sm:px-6">
        <Hero />
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Stats />
        </div>
        <About />
        <WSYA />
        <SlidersComponent />
       <MarqueeComponent/>
        <FAQ />
      </main>
    </section>
  );
}
