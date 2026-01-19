import React, { FunctionComponent } from "react";
import {startupEvents} from "@/app/events/eventsData";
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
    const millionDollarPitchEvents = startupEvents.filter(
    (event) => event.title === "Million Dollar Pitch"
  );
  return (
    <>
      <InteractiveBackground />
         <section className={`pt-24 min-h-screen ${poppins.className}`}>
        {/* HERO */}
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-blue">
            { /* koi title dalna hai to yaha likh dena   */  }
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue/70 max-w-3xl mx-auto">
          </p>
        </div>
        {/* space for event details */}
        <div className="mt-24 max-w-7xl mx-auto px-6">
          <EventsSection
            sectionTitle="Startup Pitch Event"
            events={millionDollarPitchEvents}
          />
        </div>
      </section>
    </>
  );
};

export default page;
