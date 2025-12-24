import React, { FunctionComponent } from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface OwnProps {
  name: string;
  imgURL: string;
  siteURL: string;
  size?: "small" | "medium" | "large";
}

type Props = OwnProps;

const PartnerCard: FunctionComponent<Props> = ({
  name,
  imgURL,
  siteURL,
  size = "small",
}) => {
  // Define size classes based on card size
  const sizeClasses = {
    small: {
      imageHeight: "h-20 sm:h-24",
      padding: "p-3 sm:p-4",
    },
    medium: {
      imageHeight: "h-24 sm:h-28 md:h-32",
      padding: "p-4 sm:p-5",
    },
    large: {
      imageHeight: "h-32 sm:h-36 md:h-40",
      padding: "p-5 sm:p-6",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={siteURL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <div className="group relative flex flex-col items-center justify-center cursor-pointer bg-gray-900/40 hover:bg-gray-800/60 rounded-lg sm:rounded-xl transition-all duration-300 border border-gray-700/50 hover:border-gray-600 hover:scale-105 h-full">
              <div className={`relative ${currentSize.imageHeight} w-full flex items-center justify-center ${currentSize.padding}`}>
                <div className="relative w-full h-full">
                  <Image
                    unoptimized
                    fill
                    src={imgURL}
                    alt={name}
                    className="object-contain"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
              </div>
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm font-medium">{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default PartnerCard;
