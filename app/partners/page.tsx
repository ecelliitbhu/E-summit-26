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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { color } from "framer-motion";

export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  title: {
    default: "Partners | E-Summit'26 IIT BHU",
    template: "%s | Partners | E-Summit'26 IIT BHU",
  },
};
interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <div className="pt-0 justify-center mt-32 w-full min-h-1 sm:text-center sm:text-base ">
        {/* <div>
          <h1
            className={
              "text-6xl m-4 flex justify-center font-semibold sm:py-6 "
            }
            style={{
              background: "linear-gradient(90deg, #6A23A6, #E91045)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block", }}
          >
            COMING  SOON...
          </h1>
        </div> */}
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6 "
            }
          >
            Title Partners
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {titleSponsor.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                siteURL={speaker.siteURL}
                key={index}
              />
            ))}
          </div>
        </div>
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6 "
            }
          >
            Co-Title Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {cotitleSponsor.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                siteURL={speaker.siteURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6 "
            }
          >
            Co-Title Partner
          </h1>       
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {coSponsor.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div> */}
      <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6 "
            }
          >
            Startup Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {associateSponsor.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                siteURL={speaker.siteURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Ecosystem Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {ecosystemPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Startup Showcase Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {startupShowcasePartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div> */}
      <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Learning Partners
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {LearningPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                siteURL={speaker.siteURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Tech Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {techPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                siteURL={speaker.siteURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Platinum Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {platinumPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                siteURL={speaker.siteURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Ecosystem Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {ecosystemPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                siteURL={speaker.siteURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Startup Services Partners
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {startupServicesPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                siteURL={speaker.siteURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Investment Partners
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {investmentPartners.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                siteURL={speaker.siteURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Travel Partners
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {travelPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                siteURL={speaker.siteURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            New Partners
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {newpartners.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                siteURL={speaker.siteURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Investment Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {investmentPartners.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Incubation Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {incubationPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Saas Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {saasPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Martech Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {martechPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Event Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {eventPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Powered By
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {poweredBy.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Education Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {educationPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Gaming Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {gamingPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div> */}

      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Munching Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {munchingPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div> */}
      <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Logistics Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {logisticsPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                siteURL={speaker.siteURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Institute Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {instituePartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                siteURL={speaker.siteURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Travel Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {travelPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div> */}
      {/* <div className="pt-24 justify-center w-full min-h-1 sm:text-center sm:text-base">
        <div>
          <h1
            className={
              "text-white text-6xl m-4 flex justify-center font-semibold sm:py-6"
            }
          >
            Media Partner
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <div className={"md:flex flex-wrap  justify-center items-start p-10"}>
            {mediaPartner.map((speaker: any, index) => (
              <PartnerCard
                name={speaker.name}
                imgURL={speaker.imgURL}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>  */}
    </section>
    //   <section className="flex justify-center items-center w-full min-h-screen">
    //   {/* <div>
    //     <h1
    //       className="text-6xl m-4 font-semibold sm:py-6"
    //       style={{
    //         background: "linear-gradient(90deg, #6A23A6, #E91045)",
    //         WebkitBackgroundClip: "text",
    //         WebkitTextFillColor: "transparent",
    //         display: "inline-block",
    //       }}
    //     >
    //       COMING SOON...
    //     </h1>
    //   </div> */}
    // </section>
  );
};

export default page;
