import React, { FunctionComponent } from "react";
import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { past_speakers_data } from "@/app/speakers/speaker_data";
import { present_speakers_data } from "@/app/speakers/speaker_data";
import SpeakerCard from "@/components/SpeakerCard";

export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  title: {
    default: "Speakers | E-Summit'25 IIT BHU",
    template: "%s | Speakers | E-Summit'25 IIT BHU",
  },
};
interface OwnProps {}
interface speaker {
  name: string;
  des: string;
  instaURL: string;
  linkedinURL: string;
  twitterURL?: string;
  imgURL: string;
}
type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <div className="pt-24 w-full min-h-screen flex flex-col items-center">
        <div>
          <h1
             className={"text-6xl m-4 flex justify-center font-semibold sm:py-6"}
             style={{
               background: "linear-gradient(90deg, #6A23A6, #E91045)",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
               display: "inline-block", 
               
             }}
          >
            Speakers
          </h1>
        </div>
        <div className={"flex justify-center"}>
          <Tabs
            defaultValue="presentSpeaker"
            className="sm:w-[400px] md:w-[1200px] text-center"
          >
            <TabsList>
              <TabsTrigger value="presentSpeaker">Present Speakers</TabsTrigger>
              <TabsTrigger value="pastSpeaker">Past Speakers</TabsTrigger>
            </TabsList>
            <TabsContent value="presentSpeaker">
              {/* <div className={"md:flex flex-wrap justify-center items-center p-10"}>
                {present_speakers_data.map((speaker: any, index) => (
                    <SpeakerCard
                      name={speaker.name}
                      des={speaker.des}
                      instaURL={speaker.instaURL}
                      linkedinURL={speaker.linkedinURL}
                      // twitterURL={speaker.twitterURL}
                      imgURL={speaker.imgURL}
                      key={index}
                    />
                  ))}
              </div> */}
               
              <div className={"flex justify-center mt-44"}>
          <h1
            className={
              " text-6xl m-4 flex justify-center font-semibold sm:py-6 "
            }
            
          >
            COMING  SOON...
          </h1>
        </div>
           {/* <div
           <div
                className={"md:flex flex-wrap  justify-center items-start p-10"}
              >
                {present_speakers_data.map((speaker: any, index) => (
                  <SpeakerCard
                    name={speaker.name}
                    des={speaker.des}
                    instaURL={speaker.instaURL}
                    linkedinURL={speaker.linkedinURL}
                    // twitterURL={speaker.twitterURL}
                    imgURL={speaker.imgURL}
                    key={index}
                  />
                ))}
              </div> */}
   
            </TabsContent>
            <TabsContent value="pastSpeaker">
              <div
                className={"md:flex flex-wrap  justify-center items-start p-10"}
              >
                {past_speakers_data.map((speaker: any, index) => (
                  <SpeakerCard
                    name={speaker.name}
                    des={speaker.des}
                    instaURL={speaker.instaURL}
                    linkedinURL={speaker.linkedinURL}
                    // twitterURL={speaker.twitterURL}
                    imgURL={speaker.imgURL}
                    key={index}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        {/*<Contact />*/}
      </div>
    </section>
  );
};

export default page;
