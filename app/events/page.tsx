"use client";

import React, { FunctionComponent } from "react";
import {
  funEvents,
  startupEvents,
  stategyEvents,
} from "@/app/events/eventsData";
import EventsSection from "@/app/events/EventsSection";
import InteractiveBackground from "@/components/InteractiveBackground";
import { Poppins } from "next/font/google";

interface OwnProps {}
type Props = OwnProps;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const page: FunctionComponent<Props> = () => {
  return (
    <>
      <InteractiveBackground />
      {/* Increased padding-top from pt-16 to pt-32 (8rem) or pt-40 (10rem).
          Added overflow-x-hidden to prevent layout shifts.
      */}
      <section 
        className={`
          pt-32 md:pt-40 pb-20 
          flex flex-col items-center 
          w-full min-h-screen 
          overflow-x-hidden
          ${poppins.className}
        `}
      >
        <div className="w-full max-w-7xl px-4">
          <EventsSection
            sectionTitle="Startup Events"
            events={startupEvents}
          />
          
          {/* Added a margin-top here for space between sections as well */}
          <div className="mt-16">
            <EventsSection
              sectionTitle="Strategy Events"
              events={stategyEvents}
            />
          </div>

          <div className="mt-16">
            <EventsSection
              sectionTitle="Fun Events"
              events={funEvents}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;