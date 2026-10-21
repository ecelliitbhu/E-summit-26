import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface OwnProps {
  name: string;
  des: string;
  instaURL: string;
  linkedinURL: string;
  twitterURL?: string;
  imgURL: string;
}

type Props = OwnProps;

const SpeakerCard: FunctionComponent<Props> = (props: OwnProps) => {
  return (
    <div
      className="
        relative flex flex-col w-64 h-[430px] m-4 md:m-2 rounded-2xl
        bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#151515]
        border border-[#F86531]/30 shadow-[0_0_20px_rgba(248,101,49,0.15)]
        hover:shadow-[0_0_30px_rgba(196,47,53,0.25)]
        transition-all duration-300 hover:scale-[1.04] hover:border-[#F86531]/40
      "
    >
      {/* Image Section */}
      <div
        className="
          relative mx-4 mt-4 h-[230px] overflow-hidden rounded-xl
          border border-[#C42F35]/30 shadow-inner
        "
      >
        <Image
          unoptimized
          width={500}
          height={800}
          src={props.imgURL}
          alt={props.name}
          className="
            w-full h-full object-cover rounded-xl
            hover:scale-105 transition-transform duration-500
          "
        />
      </div>

      {/* Text Section */}
      <div className="p-6 text-center flex-1 flex flex-col justify-center">
        <h4
          className="
            mb-2 font-semibold text-2xl
            bg-gradient-to-r from-[#F86531] via-[#C42F35] to-[#13324F]
            bg-clip-text text-transparent tracking-wide
            drop-shadow-[0_0_6px_rgba(248,101,49,0.3)]
          "
        >
          {props.name}
        </h4>
        <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
          {props.des}
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center p-6 pt-2 gap-7">
        {props.instaURL && (
          <Link
            className="hover:scale-125 transition-transform duration-300"
            href={props.instaURL}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-[#F86531] text-2xl hover:text-[#C42F35] transition-colors duration-300" />
          </Link>
        )}

        {props.linkedinURL && (
          <Link
            className="hover:scale-125 transition-transform duration-300"
            href={props.linkedinURL}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-[#C42F35] text-2xl hover:text-[#13324F] transition-colors duration-300" />
          </Link>
        )}

        {props.twitterURL && (
          <Link
            className="hover:scale-125 transition-transform duration-300"
            href={props.twitterURL}
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="text-[#13324F] text-2xl hover:text-[#C42F35] transition-colors duration-300" />
          </Link>
        )}
      </div>

      {/* Glow Background */}
      <div className="absolute inset-0 -z-10 opacity-40 blur-[90px] bg-gradient-to-br from-[#F86531]/10 via-[#C42F35]/10 to-[#13324F]/10" />
    </div>
  );
};

export default SpeakerCard;
