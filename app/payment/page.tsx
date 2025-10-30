"use client";
import React, { FunctionComponent, useState } from "react";
import { useSearchParams } from "next/navigation";

interface OwnProps {}

type Props = OwnProps;

const Page: FunctionComponent<Props> = (props) => {
  const searchParams = useSearchParams();
  const initialType = searchParams?.get("type") || "esummit";
  const [type, setType] = useState(initialType);

  const handleToggle = () => {
    setType(type === "esummit" ? "startup_junction" : "esummit");
  };

  return (
    <section className={"w-screen md:mt-14 p-4"}>
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <div className="flex justify-center items-center mb-4">
          <label className="flex items-center cursor-pointer">
            <span
              className={`mr-3 ${
                type === "esummit" ? "text-blue-500" : "text-white"
              }`}
            >
              E-summit
            </span>
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={type === "startup_junction"}
                onChange={handleToggle}
              />
              <div className="block bg-gray-700 w-14 h-8 rounded-full shadow-inner"></div>
              <div
                className={`dot absolute top-1 w-6 h-6 rounded-full transition-transform ${
                  type === "esummit"
                    ? "transform translate-x-0 bg-white"
                    : "transform translate-x-6 bg-blue-500"
                } shadow`}
              ></div>
            </div>
            <span
              className={`ml-3 ${
                type === "startup_junction" ? "text-blue-500" : "text-white"
              }`}
            >
              Startup Junction
            </span>
          </label>
        </div>
        {type === "esummit" ? (
          <iframe
            id="ts-iframe"
            src="https://www.townscript.com/v2/widget/esummit-2025-iit-bhu-434033/booking"
            height="600"
            width="80%"
            className={"border rounded-2xl"}
          />
        ) : (
          // <iframe
          //   id="ts-iframe"
          //   src="https://www.townscript.com/v2/widget/startup-expo-2025/booking"
          //   height="600"
          //   width="80%"
          //   className={"border rounded-2xl"}
          // />

          <iframe
            id="ts-iframe"
            src="https://www.townscript.com/v2/widget/startup-junction-010323/booking"
            height="600"
            width="80%"
            className={"border rounded-2xl"}
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default Page;
