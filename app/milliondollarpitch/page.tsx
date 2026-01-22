"use client";
import React, { FunctionComponent } from "react";
import { startupEvents } from "@/app/events/eventsData";
import EventsSection from "@/app/events/EventsSection";
import InteractiveBackground from "@/components/InteractiveBackground";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MarqueeComponent from "@/components/sponsorCard/sponsor_card";
interface OwnProps {}
type Props = OwnProps;
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const page: FunctionComponent<Props> = () => {
    const millionDollarPitchEvents = startupEvents.filter((event) => event.title === "Million Dollar Pitch");
    return (
        <>
            <InteractiveBackground />
            <section className={`pt-28 min-h-screen ${poppins.className}`}>
                {/* ================= HERO ================= */}
                <div className="max-w-6xl mx-auto text-center px-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                        <span className="bg-gradient-to-r from-[#487AFA] via-[#23C0AD] to-[#F1E821] bg-clip-text text-transparent">Join Million Dollar Pitch</span>
                    </h1>
                    <div className="mt-10 space-y-4 text-lg md:text-xl font-medium text-white/80">
                        <p>• Network with VCs, Angels & Founders</p>
                        <p>• Featuring Shark Tank Founders</p>
                        <p>• Exclusive Networking Dinner at Ganga Ghats</p>
                    </div>
                    <p className="mt-8 text-base md:text-lg font-semibold uppercase tracking-wide text-[#F1E821]">31st Jan – 1st Feb · IIT BHU, Varanasi</p>
                </div>
                <div className="mt-28 mb-24 flex justify-center">
                    <Button
                        asChild
                        className="
                            px-12 py-4 text-lg font-bold text-black
                            bg-gradient-to-r from-[#F1E821] via-[#23C0AD] to-[#487AFA]
                            hover:scale-[1.05]
                            transition-all duration-200
                            shadow-[0_0_30px_rgba(35,192,173,0.6)]
                        "
                    >
                        <Link target="_blank" href="https://unstop.com/competitions/million-dollar-pitch-e-summit26-iit-bhu-varanasi-iit-bhu-1603797">
                            Register Now
                        </Link>
                    </Button>
                </div>
            </section>
            <div className="mt-24 bg-black/40 py-16 backdrop-blur-sm">
                <MarqueeComponent />
            </div>
        </>
    );
};
export default page;
