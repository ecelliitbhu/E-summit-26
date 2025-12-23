import React, { FunctionComponent } from "react";
import { Metadata } from "next";
import PartnerCard from "@/components/PartnerCard";
import {
  titleSponsor,
  associateSponsor,
  ecosystemPartner,
  startupShowcasePartner,
  LearningPartner,
  startupServicesPartner,
  investmentPartners,
  travelPartner,
  poweredBy,
  eventPartner,
  martechPartner,
  incubationPartner,
  saasPartner,
  educationPartner,
  munchingPartner,
  logisticsPartner,
  gamingPartner,
  instituePartner,
  techPartner,
  cotitleSponsor,
  platinumPartner,
} from "./partner_data";

export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  title: {
    default: "Partners | E-Summit'26 IIT BHU",
    template: "%s | Partners | E-Summit'26 IIT BHU",
  },
};

interface OwnProps {}
type Props = OwnProps;

const page: FunctionComponent<Props> = () => {
  return (
    <section>
      <div className="pt-0 justify-center mt-20 sm:mt-28 md:mt-32 w-full min-h-1 sm:text-center sm:text-base">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl m-4 font-semibold py-4 sm:py-6 text-center">
          Title Partners
        </h1>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center items-start px-4 py-6 sm:p-8 md:p-10 gap-6 sm:gap-8">
            {titleSponsor.map((speaker: any, index) => (
              <PartnerCard key={index} {...speaker} />
            ))}
          </div>
        </div>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl m-4 font-semibold py-4 sm:py-6 text-center">
          Co-Title Partner
        </h1>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center items-start px-4 py-6 sm:p-8 md:p-10 gap-6 sm:gap-8">
            {cotitleSponsor.map((speaker: any, index) => (
              <PartnerCard key={index} {...speaker} />
            ))}
          </div>
        </div>
        <Section title="Startup Partner">
          {associateSponsor}
        </Section>
        <Section title="Learning Partners">
          {LearningPartner}
        </Section>
        <Section title="Tech Partner">
          {techPartner}
        </Section>
        <Section title="Platinum Partner">
          {platinumPartner}
        </Section>
        <Section title="Ecosystem Partner">
          {ecosystemPartner}
        </Section>
        <Section title="Startup Services Partners">
          {startupServicesPartner}
        </Section>
        <Section title="Investment Partners">
          {investmentPartners}
        </Section>
        <Section title="Travel Partners">
          {travelPartner}
        </Section>
        <Section title="Logistics Partner">
          {logisticsPartner}
        </Section>
        <Section title="Institute Partner">
          {instituePartner}
        </Section>

      </div>
    </section>
  );
};

export default page;

const Section = ({ title, children }: any) => (
  <div className="pt-16 sm:pt-20 md:pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl m-4 font-semibold py-4 sm:py-6 text-center">
      {title}
    </h1>
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center items-start px-4 py-6 sm:p-8 md:p-10 gap-6 sm:gap-8">
        {children.map((speaker: any, index: number) => (
          <PartnerCard key={index} {...speaker} />
        ))}
      </div>
    </div>
  </div>
);
