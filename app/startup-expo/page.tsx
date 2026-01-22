import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MarqueeComponentSsp from "@/components/sponsorCard/ssp-startup-expo_sponsor-card";
import MarqueeComponentPi from "@/components/sponsorCard/pi-startup-expo_sponsor-card";
import {
  funEvents,
  startupEvents,
  stategyEvents,
} 
from "@/app/events/eventsData";
import EventsSection from "@/app/events/EventsSection";
import InteractiveBackground from "@/components/InteractiveBackground";
import { Metadata } from "next";
import { Poppins } from "next/font/google"; 
export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  title: {
    default: "Startup-Expo | E-Summit'26 IIT BHU",
    template: "%s | Startup-Expo | E-Summit'26 IIT BHU",
  },
};
interface OwnProps {}
type Props = OwnProps;
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const gradientTextStyle = {
  background: "linear-gradient(90deg, #3bb7d3ff, #23C0AD, #487AFA)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};
const page: FunctionComponent<Props> = () => {
  return (
    <>
      <InteractiveBackground />
      <section className={`pt-28 min-h-screen ${poppins.className}`}>
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#3bb7d3] via-[#23C0AD] to-[#487AFA] bg-clip-text text-transparent">
              Startup Expo 2026
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl font-medium text-white/80 max-w-3xl mx-auto">
            E-Cell IIT BHU’s annual startup exhibition bringing together
            innovative startups, investors, venture capital firms and industry
            leaders from across the country.
          </p>

          <div className="mt-10 space-y-3 text-lg md:text-xl font-medium text-white/80">
            <p>• 60+ Startups Showcased</p>
            <p>• 50+ Investors & VC Firms</p>
            <p>• Product Launches & Panel Discussions</p>
            <p>• High-Impact Networking Opportunities</p>
          </div>

          <p className="mt-8 text-base md:text-lg font-semibold uppercase tracking-wide text-[#F1E821]">
            30th Jan – 1st Feb · IIT BHU, Varanasi
          </p>
        </div>

        <div className="mt-24 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              ["60+", "Startups"],
              ["11k+", "Attendees"],
              ["35+", "Speakers"],
              ["50+", "Investors"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="h-32 rounded-2xl border border-white/15 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center"
              >
                <p className="text-3xl font-bold text-white">{value}</p>
                <p className="text-sm uppercase tracking-wider text-white/50">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-28 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10 text-white">
            Opportunities at Startup Expo
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {[
              "Showcase stalls to display your product",
              "Official E-Summit networking event access",
              "Product launches before investors & audience",
              "Investment & mentorship opportunities",
              "Panel discussions with industry leaders",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/15 bg-black/50 backdrop-blur-sm p-6 text-white/80"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-white/60">
            Stall setup is free. A refundable security deposit of ₹2000 is
            required.
          </p>
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
            <Link href="/payment?type=startup-expo">
              Register Your Startup
            </Link>
          </Button>
        </div>
      </section>

      <div className="bg-black/40 py-20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-10">
            Contact Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/15 bg-black/50 backdrop-blur-sm p-6 text-white/80">
              <p className="text-lg font-semibold">Gourav Pandey</p>
              <p className="mt-2">📞 +91 89557 94001</p>
              <p className="mt-1 text-sm">
                gourav.pandey.phe23@itbhu.ac.in
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-black/50 backdrop-blur-sm p-6 text-white/80">
              <p className="text-lg font-semibold">Oppilan Iniyan</p>
              <p className="mt-2">📞 +91 63612 48752</p>
              <p className="mt-1 text-sm">
                oppilan.iniyan.bme23@itbhu.ac.in
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 py-16 backdrop-blur-sm">
        <MarqueeComponentSsp />
      </div>
      <div className="mt-2 py-16 backdrop-blur-sm">
        <MarqueeComponentPi />
      </div>
    
     
    </>
  );
};

export default page;
