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
    <section className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-12">
        
        {/* Title Partners Section */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 sm:mb-10">
          Title Partners
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
          {titleSponsor.map((partner: any, index: number) => (
            <div key={index} className="w-full sm:w-[calc(50%-1rem)] max-w-md">
              <PartnerCard {...partner} size="large" />
            </div>
          ))}
        </div>

        {/* Co-Title Partner Section */}
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 sm:mb-10">
          Co-Title Partner
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
          {cotitleSponsor.map((partner: any, index: number) => (
            <div key={index} className="w-full sm:w-[calc(50%-1rem)] max-w-sm">
              <PartnerCard {...partner} size="medium" />
            </div>
          ))}
        </div>

        {/* Regular Partners Sections */}
        {platinumPartner && platinumPartner.length > 0 && (
          <PartnerSection title="Platinum Partner" partners={platinumPartner} size="medium" />
        )}

        {associateSponsor && associateSponsor.length > 0 && (
          <PartnerSection title="Startup Partner" partners={associateSponsor} />
        )}

        {LearningPartner && LearningPartner.length > 0 && (
          <PartnerSection title="Learning Partners" partners={LearningPartner} />
        )}

        {techPartner && techPartner.length > 0 && (
          <PartnerSection title="Tech Partner" partners={techPartner} />
        )}

        {ecosystemPartner && ecosystemPartner.length > 0 && (
          <PartnerSection title="Ecosystem Partner" partners={ecosystemPartner} />
        )}

        {startupServicesPartner && startupServicesPartner.length > 0 && (
          <PartnerSection title="Startup Services Partners" partners={startupServicesPartner} />
        )}

        {investmentPartners && investmentPartners.length > 0 && (
          <PartnerSection title="Investment Partners" partners={investmentPartners} />
        )}

        {travelPartner && travelPartner.length > 0 && (
          <PartnerSection title="Travel Partners" partners={travelPartner} />
        )}

        {logisticsPartner && logisticsPartner.length > 0 && (
          <PartnerSection title="Logistics Partner" partners={logisticsPartner} />
        )}

        {instituePartner && instituePartner.length > 0 && (
          <PartnerSection title="Institute Partner" partners={instituePartner} />
        )}

        {eventPartner && eventPartner.length > 0 && (
          <PartnerSection title="Event Partner" partners={eventPartner} />
        )}

        {martechPartner && martechPartner.length > 0 && (
          <PartnerSection title="Martech Partner" partners={martechPartner} />
        )}

        {incubationPartner && incubationPartner.length > 0 && (
          <PartnerSection title="Incubation Partner" partners={incubationPartner} />
        )}

        {saasPartner && saasPartner.length > 0 && (
          <PartnerSection title="SaaS Partner" partners={saasPartner} />
        )}

        {educationPartner && educationPartner.length > 0 && (
          <PartnerSection title="Education Partner" partners={educationPartner} />
        )}

        {munchingPartner && munchingPartner.length > 0 && (
          <PartnerSection title="Munching Partner" partners={munchingPartner} />
        )}

        {gamingPartner && gamingPartner.length > 0 && (
          <PartnerSection title="Gaming Partner" partners={gamingPartner} />
        )}

        {poweredBy && poweredBy.length > 0 && (
          <PartnerSection title="Powered By" partners={poweredBy} />
        )}

        {startupShowcasePartner && startupShowcasePartner.length > 0 && (
          <PartnerSection title="Startup Showcase Partner" partners={startupShowcasePartner} />
        )}
      </div>
    </section>
  );
};

export default page;

// Partner Section Component
const PartnerSection = ({
  title,
  partners,
  size = "small",
}: {
  title: string;
  partners: any[];
  size?: "small" | "medium" | "large";
}) => {
  return (
    <div className="mb-16 sm:mb-20">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 sm:mb-10">
        {title}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
        {partners.map((partner: any, index: number) => (
          <PartnerCard key={index} {...partner} size={size} />
        ))}
      </div>
    </div>
  );
};
