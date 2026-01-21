import React, { FunctionComponent } from "react";
import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { past_speakers_data } from "@/app/speakers/speaker_data";
import { present_speakers_data } from "@/app/speakers/speaker_data";
import SpeakerCard from "@/components/SpeakerCard";
import InteractiveBackground from "@/components/InteractiveBackground";
export const metadata: Metadata = {
  referrer: "origin-when-cross-origin",
  title: {
    default: "Speakers | E-Summit'26 IIT BHU",
    template: "%s | Speakers | E-Summit'26 IIT BHU",
  },
};
const SpeakerSection = ({
  title,
  speakers,
}: {
  title: string;
  speakers: any[];
}) => {
  if (!speakers || speakers.length === 0) return null;

  return (
    <div className="w-full mb-20">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10">
        {title}
      </h2>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        {speakers.map((speaker, index) => (
          <SpeakerCard
            key={index}
            name={speaker.name}
            des={speaker.des}
            instaURL={speaker.instaURL}
            linkedinURL={speaker.linkedinURL}
            imgURL={speaker.imgURL}
          />
        ))}
      </div>
    </div>
  );
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
const page: FunctionComponent<Props> = () => {
  return (
    <>
      {/* Interactive Background */}
      <InteractiveBackground />

      <section>
        <div className="pt-24 w-full min-h-screen flex flex-col items-center">
          <div>
            <h1
            className="font-bold text-5xl sm:text-5xl md:text-5xl inline-block pt-20 pb-14"
            style={{
              background: "linear-gradient(180deg, #F1E821, #23C0AD,#487AFA )",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Speakers
          </h1>
          </div>

          <div className="flex justify-center">
            <Tabs
              defaultValue="presentSpeaker"
              className="sm:w-[400px] md:w-[1200px] text-center"
            >
              <TabsList>
                <TabsTrigger value="presentSpeaker" className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                  Present Speakers
                </TabsTrigger>
                <TabsTrigger value="pastSpeaker" className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                  Past Speakers
                </TabsTrigger>
              </TabsList>
              <TabsContent value="presentSpeaker">
  <div className="pt-16">

    <SpeakerSection
      title="Keynote Speakers"
      speakers={present_speakers_data.keynote}
    />

    <SpeakerSection
      title="Shark Tank Panel"
      speakers={present_speakers_data.sharktank}
    />

    <SpeakerSection
      title="VC Panel"
      speakers={present_speakers_data.vcpanel}
    />

    <SpeakerSection
      title="AI Panel"
      speakers={present_speakers_data.aipanel}
    />

    <SpeakerSection
      title="Gaming Panel"
      speakers={present_speakers_data.gamingpanel}
    />

  </div>
</TabsContent>

              <TabsContent value="pastSpeaker">
                <div className="md:flex flex-wrap justify-center items-start p-10">
                  {past_speakers_data.map((speaker: any, index) => (
                    <SpeakerCard
                      name={speaker.name}
                      des={speaker.des}
                      instaURL={speaker.instaURL}
                      linkedinURL={speaker.linkedinURL}
                      imgURL={speaker.imgURL}
                      key={index}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          {/* <Contact /> */}
        </div>
      </section>
    </>
  );
};

export default page;
