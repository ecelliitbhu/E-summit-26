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
  associateSponsors,
  legalServicesPartner,
  aiInterviewPartner
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
        {titleSponsor && titleSponsor.length > 0 && (
          <PartnerSection 
            title="Title Partners" 
            partners={titleSponsor} 
            size="large" 
          />
        )}

        {/* Co-Title Partner Section */}
        {cotitleSponsor && cotitleSponsor.length > 0 && (
          <PartnerSection 
            title="Co-Title Partner" 
            partners={cotitleSponsor} 
            size="medium" 
          />
        )}

        {/* Associate Sponsors Section */}
        {associateSponsors && associateSponsors.length > 0 && (
          <PartnerSection
            title="Associate Sponsors"
            partners={associateSponsors}
            size="medium"
          />
        )}

        {/* Legal Services Partner Section */}
{legalServicesPartner && legalServicesPartner.length > 0 && (
  <PartnerSection
    title="Legal Services Partner"
    partners={legalServicesPartner}
    size="medium"
  />
)}

{/* AI Interview Partner Section */}
{aiInterviewPartner && aiInterviewPartner.length > 0 && (
  <PartnerSection
    title="AI Interview Partner"
    partners={aiInterviewPartner}
    size="medium"
  />
)}


        {/* Platinum Partner Section */}
        {/* {platinumPartner && platinumPartner.length > 0 && (
          <PartnerSection 
            title="Platinum Partner" 
            partners={platinumPartner} 
            size="medium" 
          />
        )} */}

        {/* Regular Partners Sections */}
        {/* {associateSponsor && associateSponsor.length > 0 && (
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
        )} */}
      </div>
    </section>
  );
};

export default page;

// Updated Partner Section Component for Centralization
const PartnerSection = ({
  title,
  partners,
  size = "small",
}: {
  title: string;
  partners: any[];
  size?: "small" | "medium" | "large";
}) => {
  // Logic to handle card widths based on size for centering
  const wrapperClass = {
    large: "w-full sm:w-[calc(50%-1rem)] max-w-md",
    medium: "w-full sm:w-[calc(33.33%-1rem)] max-w-sm",
    small: "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 max-w-[200px]"
  };

  return (
    <div className="mb-16 sm:mb-20">
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 sm:mb-10">
        {title}
      </h2>
      {/* Using Flex instead of Grid for the container. 
          justify-center ensures logos are always in the middle.
      */}
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
        {partners.map((partner: any, index: number) => (
          <div key={index} className={`flex justify-center ${wrapperClass[size]}`}>
            <PartnerCard {...partner} size={size} />
          </div>
        ))}
      </div>
    </div>
  );
};