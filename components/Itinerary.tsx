import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { badgeVariants } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Itinerary: () => JSX.Element = () => {
  const second = [
    {
      track_A: [
        {
          name: "Finale of Competions Xpanse, Design Rush, Entrivia, Stratify,Venture Verse, CaseX",
          venue: "Lecture Theatre-3 (LT-3)",
          time: "6:00 PM- 8:00 PM",
          speaker: false,
        },
      ],
    },

    {
      track_B: [
        {
          name: "Inauguration Ceremony, E-Summit '24",
          venue: "ABLT-4",
          time: "5:00 PM- 6:00 PM",
        },
        {
          name: "Siddharth Maheshwari - Newton School Fireside Chat",
          venue: "ABLT-4",
          speaker: true,
          speaker_name: "Siddharth Maheshwari",
          speaker_img:
            "https://media.licdn.com/dms/image/C5603AQEIIz56-pDbdA/profile-displayphoto-shrink_400_400/0/1650354281331?e=1712188800&v=beta&t=kGCN_VS3jdNXcs0xLKzmLPs3RaLXVVCEdVF5DqkMvy4",
          time: "6:30 PM- 7:30 PM",
        },
      ],
    },
  ];
  const third = [
    {
      track_A: [
        {
          name: "Finale of Competions Million Dollar Pitch, Xpanse, Design Rush,Venture Verse, CaseX, Tesseract",
          venue: "Lecture Theatre-3 (LT-3)",
          time: "9:00 AM- 1:30 PM",
          speaker: false,
        },
        {
          name: "Tesseract",
          venue: "",
          time: "2:00 PM- 5 PM",
          speaker: false,
        },
      ],
    },

    {
      track_B: [
        {
          name: "Sanjeev Bhikchandani - Infoedge Fireside Chat",
          venue: "ABLT-4",
          time: "10:00 AM- 11:00 AM",
          speaker: true,
          speaker_name: "Sanjeev Bhikchandani",
          speaker_img:
            "https://media.licdn.com/dms/image/C5103AQEvdOsk-5Xchg/profile-displayphoto-shrink_800_800/0/1574759254204?e=1712188800&v=beta&t=y3tN1vHPHlEDE9KyAioTxdZWPndsiurH3Ta45co-Jzc",
        },
        {
          name: "Panel Discussion: Beyond Metro Mania",
          venue: "ABLT-4",
          speaker: false,

          time: "3:00 PM- 4:30 PM",
        },
        {
          name: "Panel Discussion: The AI Surge in Startup Symphony",
          venue: "ABLT-4",
          speaker: false,

          time: "5:30 PM- 7:00 PM",
        },
      ],
    },
    {
      track_C: [
        {
          name: "Startup Expo - Day 2",
          venue: "Rajputana Ground",
          time: "10:00 PM- 1:30 PM",
        },
        {
          name: "Startup Expo - Day 2",
          venue: "Rajputana Ground",
          time: "2:00 PM- 5:00 PM",
        },
        {
          name: "Startup Expo - Day 2",
          venue: "Rajputana Ground",
          time: "5:30 PM -7:00 PM",
        },
        {
          name: "Networking Dinner",
          venue: "By The Ghats",
          time: "7:00 Pm Onwards",
        },
      ],
    },
  ];

  const fourth = [
    {
      track_A: [
        {
          name: "Finale of Competions Bid Bonanza, Stratify, Million Dollar Pitch,Entrivia",
          venue: "Lecture Theatre-3 (LT-3)",
          time: "9:00 AM- 1:30 PM",
        },
        {
          name: "Finale of Competions Bid Bonanza, Stratify, Million Dollar Pitch,Entrivia",
          venue: "Lecture Theatre-3 (LT-3)",
          time: "2:00 PM- 3:00 PM",
        },
      ],
    },
    {
      track_B: [
        {
          name: "Nitin Sharma - Gowaterless",
          venue: "ABLT-1",
          speaker: true,
          speaker_name: "Nitin Sharma",
          speaker_img:
            "https://media.licdn.com/dms/image/C4D03AQEvzw3ECM7P6w/profile-displayphoto-shrink_400_400/0/1661743340968?e=1712188800&v=beta&t=U2YKviDyqLl44Aq_xfi9p_g9AvObJ0cXn0dDhKYI5lY",
          time: "11:00 AM- 12:00 PM",
        },
        {
          name: "Rajeev Samant - Sula Vineyards Fireside Chat",
          venue: "ABLT-4",
          speaker: true,
          speaker_name: "Rajeev Samant",
          speaker_img:
            "https://media.licdn.com/dms/image/C4D03AQELvx5LDCeTpg/profile-displayphoto-shrink_400_400/0/1626258971648?e=1712188800&v=beta&t=uvKFiXC4dR4ouKSaMZq854hd4dAt6He-2RPFFq65Gdg",

          time: "2:00 PM- 3:00 PM",
        },
        {
          name: "Panel Discussion: Intersection of trust",
          venue: "ABLT-4",
          time: "4:00 PM - 5:30 PM",
        },
        {
          name: "Vijender Singh Chouhan - Leadership Talk",
          venue: "ABLT-4",
          speaker: true,
          speaker_name: "Vijender Singh Chouhan",
          speaker_img:
            "https://media.licdn.com/dms/image/C4D03AQGnWiJj98yWmA/profile-displayphoto-shrink_800_800/0/1598290098447?e=2147483647&v=beta&t=I6LR_AtrnZ8-TtaV6L819KC7X8jPMYUnV-MlCHvpSvI",
          time: "6:00 PM - 7:00 PM ",
        },
        {
          name: "Closing Ceremony, E-Summit '24",
          venue: "ABLT-4",
          time: "7:00 PM - 8:00 PM",
        },
      ],
    },
    {
      track_C: [
        {
          name: "Startup Expo - Day 2",
          venue: "Rajputana Ground",
          time: "10:00 AM- 1:30 PM",
        },

        {
          name: "Startup Expo - Day 2",
          venue: "Rajputana Ground",
          time: "2:00 PM- 5:30 PM",
        },

        {
          name: "Startup Expo - Day 2",
          venue: "Rajputana Ground",
          time: "6:00 PM - 7:00 PM ",
        },
      ],
    },
  ];
  return (
    <>
      <h2 className="text-center font-bold text-2xl"> The Schedule </h2>
      <p className="text-center text-base font-semibold mt-2">
        January 29th, 30th, & 31st 2027
      </p>
      <p className="text-center mt-2">
        <Badge variant="outline">Central Standard Time (GMT-6)</Badge>
      </p>
      <div className="flex justify-center my-4 mx-14">
        <Tabs defaultValue="second" className="">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="second">29 Jan 2027</TabsTrigger>
            <TabsTrigger value="third">30 Jan 2027</TabsTrigger>
            <TabsTrigger value="fourth">31 Jan 2027</TabsTrigger>
          </TabsList>
          <TabsContent value="second">
            <div className="grid  grid-cols-3 gap-2">
              <div
                style={{ textAlign: "center" }}
                className="hidden md:inline-block "
              >
                Track A <br /> Events & Competition
              </div>
              <div
                style={{ textAlign: "center" }}
                className="hidden md:inline-block "
              >
                Track B <br /> Talks & Panel
              </div>
              <div
                style={{ textAlign: "center" }}
                className="hidden md:inline-block "
              >
                Track C <br /> Showcase & Networking
              </div>
              {second.map((element, index) => {
                return (
                  <div key={index}>
                    {element.track_A &&
                      element.track_A.map((event: any, eventIndex) => {
                        return (
                          <Card className="p-3" key={index}>
                            <div className="flex justify-start">
                              {" "}
                              <Badge variant="outline">{event.time}</Badge>
                            </div>
                            <div>
                              <p className="text-xs my-2 ">{event.name}</p>
                              {event.speaker && (
                                <div className="flex">
                                  <div className="my-1">
                                    <Avatar>
                                      <AvatarImage src={event.speaker_img} />
                                      <AvatarFallback>
                                        {event.speaker_img[0]}
                                      </AvatarFallback>
                                    </Avatar>
                                  </div>
                                  <p className="flex items-center ml-2 text-xs font-medium">
                                    {event.speaker_name}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div>
                              {event.venue && (
                                <p className="text-sm">
                                  {" "}
                                  Venue :{" "}
                                  <span className="font-semibold text-sm">
                                    {event.venue}
                                  </span>
                                </p>
                              )}
                            </div>
                          </Card>
                        );
                      })}
                    {element.track_B &&
                      element.track_B.map((event, eventIndex) => {
                        return (
                          <Card className="p-3" key={index}>
                            <div className="flex justify-start">
                              {" "}
                              <Badge variant="outline">{event.time}</Badge>
                            </div>
                            <div>
                              <p className="text-xs my-2 ">{event.name}</p>
                              {event.speaker && (
                                <div className="flex">
                                  <div className="my-1">
                                    <Avatar>
                                      <AvatarImage src={event.speaker_img} />
                                      <AvatarFallback>
                                        {event.speaker_img[0]}
                                      </AvatarFallback>
                                    </Avatar>
                                  </div>
                                  <p className="flex items-center ml-2 text-xs font-medium">
                                    {event.speaker_name}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div>
                              {event.venue && (
                                <p className="text-sm">
                                  {" "}
                                  Venue :{" "}
                                  <span className="font-semibold text-sm">
                                    {event.venue}
                                  </span>
                                </p>
                              )}
                            </div>
                          </Card>
                        );
                      })}
                  </div>
                );
              })}
            </div>
            <Badge className="flex justify-center items-center m-8 text-base font-medium">
              Dinner 8:00 PM Onward
            </Badge>
          </TabsContent>
          <TabsContent value="third">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
              <div
                style={{ textAlign: "center" }}
                className="hidden md:inline-block "
              >
                Track A <br /> Events & Competition
              </div>
              <div
                style={{ textAlign: "center" }}
                className="hidden md:inline-block "
              >
                Track B <br /> Talks & Panel
              </div>
              <div
                style={{ textAlign: "center" }}
                className="hidden md:inline-block "
              >
                Track C <br /> Showcase & Networking
              </div>
              {third.map((element: any, index) => {
                return (
                  <div key={index}>
                    {element.track_A &&
                      element.track_A.map((event: any, eventIndex: number) => {
                        return (
                          <Card className="p-3 my-2" key={index}>
                            <div className="flex justify-start">
                              {" "}
                              <Badge variant="outline">{event.time}</Badge>
                            </div>
                            <div>
                              <p className="text-xs my-2 ">{event.name}</p>
                              {event.speaker && (
                                <div className="flex">
                                  <div className="my-1">
                                    <Avatar>
                                      <AvatarImage src={event.speaker_img} />
                                      <AvatarFallback>
                                        {event.speaker_img[0]}
                                      </AvatarFallback>
                                    </Avatar>
                                  </div>
                                  <p className="flex items-center ml-2 text-xs font-medium">
                                    {event.speaker_name}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div>
                              <p>
                                {" "}
                                Venue :{" "}
                                <span className="font-semibold text-sm">
                                  {event.venue}
                                </span>
                              </p>
                            </div>
                          </Card>
                        );
                      })}
                    {element.track_B &&
                      element.track_B.map((event: any, eventIndex: number) => {
                        return (
                          <Card className="p-3 my-2" key={index}>
                            <div className="flex justify-start">
                              {" "}
                              <Badge variant="outline">{event.time}</Badge>
                            </div>
                            <div>
                              <p className="text-xs my-2 ">{event.name}</p>
                              {event.speaker && (
                                <div className="flex">
                                  <div className="my-1">
                                    <Avatar>
                                      <AvatarImage src={event.speaker_img} />
                                      <AvatarFallback>
                                        {event.speaker_img[0]}
                                      </AvatarFallback>
                                    </Avatar>
                                  </div>
                                  <p className="flex items-center ml-2 text-xs font-medium">
                                    {event.speaker_name}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div>
                              <p>
                                {" "}
                                Venue :{" "}
                                <span className="font-semibold text-sm">
                                  {event.venue}
                                </span>
                              </p>
                            </div>
                          </Card>
                        );
                      })}
                    {element.track_C &&
                      element.track_C.map((event: any, eventIndex: number) => {
                        return (
                          <Card className="p-3 my-2" key={index}>
                            <div className="flex justify-start">
                              {" "}
                              <Badge variant="outline">{event.time}</Badge>
                            </div>
                            <div>
                              <p className="text-xs my-2 ">{event.name}</p>
                              {event.speaker && (
                                <div className="flex">
                                  <div className="my-1">
                                    <Avatar>
                                      <AvatarImage src={event.speaker_img} />
                                      <AvatarFallback>
                                        {event.speaker_img[0]}
                                      </AvatarFallback>
                                    </Avatar>
                                  </div>
                                  <p className="flex items-center ml-2 text-xs font-medium">
                                    {event.speaker_name}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div>
                              <p>
                                {" "}
                                Venue :{" "}
                                <span className="font-semibold text-sm">
                                  {event.venue}
                                </span>
                              </p>
                            </div>
                          </Card>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="fourth">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
              <div
                style={{ textAlign: "center" }}
                className="hidden md:inline-block "
              >
                Track A <br /> Events & Competition
              </div>
              <div
                style={{ textAlign: "center" }}
                className="hidden md:inline-block "
              >
                Track B <br /> Talks & Panel
              </div>
              <div
                style={{ textAlign: "center" }}
                className="hidden md:inline-block "
              >
                Track C <br /> Showcase & Networking
              </div>
              {fourth.map((element, index) => {
                return (
                  <div key={index}>
                    {element.track_A &&
                      element.track_A.map((event: any, eventIndex) => {
                        return (
                          <Card className="p-3 my-2" key={index}>
                            <div className="flex justify-start">
                              {" "}
                              <Badge variant="outline">{event.time}</Badge>
                            </div>
                            <div>
                              <p className="text-xs my-2 ">{event.name}</p>
                              {event.speaker && (
                                <div className="flex">
                                  <div className="my-1">
                                    <Avatar>
                                      <AvatarImage src={event.speaker_img} />
                                      <AvatarFallback>
                                        {event.speaker_img[0]}
                                      </AvatarFallback>
                                    </Avatar>
                                  </div>
                                  <p className="flex items-center ml-2 text-xs font-medium">
                                    {event.speaker_name}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div>
                              <p>
                                {" "}
                                Venue :{" "}
                                <span className="font-semibold text-sm">
                                  {event.venue}
                                </span>
                              </p>
                            </div>
                          </Card>
                        );
                      })}
                    {element.track_B &&
                      element.track_B.map((event, eventIndex) => {
                        return (
                          <Card className="p-3 my-2" key={index}>
                            <div className="flex justify-start">
                              {" "}
                              <Badge variant="outline">{event.time}</Badge>
                            </div>
                            <div>
                              <p className="text-xs my-2 ">{event.name}</p>
                              {event.speaker && (
                                <div className="flex">
                                  <div className="my-1">
                                    <Avatar>
                                      <AvatarImage src={event.speaker_img} />
                                      <AvatarFallback>
                                        {event.speaker_img[0]}
                                      </AvatarFallback>
                                    </Avatar>
                                  </div>
                                  <p className="flex items-center ml-2 text-xs font-medium">
                                    {event.speaker_name}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div>
                              <p>
                                {" "}
                                Venue :{" "}
                                <span className="font-semibold text-sm">
                                  {event.venue}
                                </span>
                              </p>
                            </div>
                          </Card>
                        );
                      })}
                    {element.track_C &&
                      element.track_C.map((event: any, eventIndex) => {
                        return (
                          <Card className="p-3 my-2" key={index}>
                            <div className="flex justify-start">
                              {" "}
                              <Badge variant="outline">{event.time}</Badge>
                            </div>
                            <div>
                              <p className="text-xs my-2 ">{event.name}</p>
                              {event.speaker && (
                                <div className="flex">
                                  <div className="my-1">
                                    <Avatar>
                                      <AvatarImage src={event.speaker_img} />
                                      <AvatarFallback>
                                        {event.speaker_img[0]}
                                      </AvatarFallback>
                                    </Avatar>
                                  </div>
                                  <p className="flex items-center ml-2 text-xs font-medium">
                                    {event.speaker_name}
                                  </p>
                                </div>
                              )}
                            </div>
                            <div>
                              <p>
                                {" "}
                                Venue :{" "}
                                <span className="font-semibold text-sm">
                                  {event.venue}
                                </span>
                              </p>
                            </div>
                          </Card>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Itinerary;
