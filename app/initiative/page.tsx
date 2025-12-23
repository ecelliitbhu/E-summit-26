"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
export default function InitiativePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-32 lg:pt-40">
      <div className="mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16 max-w-6xl w-full px-4">
        <Link
          href="https://www.ecelliitbhu.com/"
          className="block w-[90%] sm:w-[70%] lg:w-[38%] max-w-[420px]"
        >
          <Card className="w-full bg-transparent border border-white/20 rounded-xl transition-transform duration-300 hover:scale-105">
            <CardContent className="p-6 flex items-center justify-center">
              <Image
                unoptimized
                src="/logos/E-Cell-White[1].png"
                alt="E-Cell IIT BHU"
                width={600}
                height={400}
                className="w-full object-contain"
              />
            </CardContent>
          </Card>
        </Link>
        <div className="bg-white/70 w-40 h-[1px] lg:w-[1px] lg:h-72 shrink-0" />
        <Link
          href="https://www.ecelliitbhu.com/"
          className="block w-[90%] sm:w-[70%] lg:w-[38%] max-w-[420px]"
        >
          <Card className="w-full bg-transparent border border-white/20 rounded-xl transition-transform duration-300 hover:scale-105">
            <CardContent className="p-6 flex items-center justify-center">
              <Image
                unoptimized
                src="/logos/SJwhite.png"
                alt="Startup Junction"
                width={600}
                height={400}
                className="w-full object-contain"
              />
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
