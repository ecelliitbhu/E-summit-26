"use client";
import React, { FunctionComponent } from "react";
import { startupEvents } from "@/app/events/eventsData";
import EventsSection from "@/app/events/EventsSection";
import InteractiveBackground from "@/components/InteractiveBackground";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
interface OwnProps {}
type Props = OwnProps;
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const page: FunctionComponent<Props> = () => {
  const millionDollarPitchEvents = startupEvents.filter(
    (event) => event.title === "Million Dollar Pitch"
  );
  return (
    <>
      <InteractiveBackground />
      <section className={`pt-24 min-h-screen ${poppins.className}`}>
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#487AFA]">
            Join Million Dollar Pitch
          </h1>
          <div className="mt-8 space-y-3 text-lg md:text-xl text-white/80">
            <p>• Network with VCs, Angels & Founders</p>
            <p>• Featuring Shark Tank Founders</p>
            <p>• Exclusive Networking Dinner at Ganga Ghats</p>
          </div>
          <p className="mt-6 text-lg font-semibold text-[#F1E821]">
            31st Jan – 1st Feb | IIT BHU (Varanasi)
          </p>
        </div>
        <div className="mt-20 max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="h-36 rounded-xl border border-white/15 bg-black/40 flex items-center justify-center text-white/40">
              
            </div>
            <div className="h-36 rounded-xl border border-white/15 bg-black/40 flex items-center justify-center text-white/40">
            
            </div>
          </div>
        </div>
        <div className="mt-24 mb-20 flex justify-center">
          <Button
            asChild
            className="px-10 py-3 text-lg font-semibold text-black
            bg-gradient-to-r from-[#F1E821] via-[#23C0AD] to-[#487AFA]
            hover:opacity-90 transition-all duration-200"
          >
            <Link href="/payment?type=esummit">
              Register Now
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};
export default page;
