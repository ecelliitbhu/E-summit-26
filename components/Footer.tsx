import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const linksData = [
    {
      href: "https://www.ecelliitbhu.com/sw/",
      text: "Startup Weekend Varanasi",
    },
    {
      href: "https://www.ecelliitbhu.com/cd/",
      text: "Campus Ambassador",
    },
  ];

  return (
    <footer className="bg-transparent py-10 w-full px-4 sm:px-6">
      <div className="flex flex-col items-center space-y-10 max-w-7xl mx-auto">
        
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <Link
            className="hover:scale-110 transition-transform duration-300"
            href="https://x.com/ecelliitbhu"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter className="text-gray-700 dark:text-gray-300 text-2xl hover:text-black dark:hover:text-white" />
          </Link>

          <Link
            className="hover:scale-110 transition-transform duration-300"
            href="https://www.instagram.com/ecelliitbhu/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-pink-600 text-2xl hover:text-pink-700" />
          </Link>

          <Link
            className="hover:scale-110 transition-transform duration-300"
            href="https://www.linkedin.com/company/ecelliitbhu/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-700" />
          </Link>

          <Link
            className="hover:scale-110 transition-transform duration-300"
            href="https://www.youtube.com/c/ecelliitbhu"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="text-red-600 text-2xl hover:text-red-700" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="rounded-full border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-6 sm:px-8 py-3 shadow-sm">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            {linksData.map((link, index) => (
              <li key={index}>
                <Link
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  href={link.href}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Map and QR Code Section */}
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Interactive Map Card - RESPONSIVE with hidden bottom bar */}
            <Link
              href="https://naksha.tech/"
              target="_blank"
              rel="noreferrer"
              className="lg:col-span-2 block relative h-[280px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 group"
            >
              {/* Iframe container with extra height to hide bottom bar */}
              <div className="absolute inset-0 -bottom-16">
                <iframe
                  src="https://naksha.tech/" 
                  width="100%"
                  height="calc(100% + 64px)"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="E-Cell IIT BHU Location"
                  className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
                />
              </div>
              
              {/* Clickable Overlay */}
              <div 
                className="absolute inset-0 cursor-pointer z-10" 
                style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
              />
              
              {/* Floating 'Search Directions' Bar - RESPONSIVE */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:right-auto md:w-64 z-20">
                <div className="flex items-center gap-2 sm:gap-3 bg-blue-500 group-hover:bg-blue-600 text-white p-2.5 sm:p-3 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg">
                    <FaMapMarkerAlt className="text-white text-sm sm:text-base" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold">Search directions</span>
                    <span className="text-[9px] sm:text-[10px] opacity-90">Click to view route</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* QR Code Card - RESPONSIVE */}
            <div className="flex flex-col justify-center items-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 h-[320px] sm:h-[350px] lg:h-[400px]">
              <Link
                href="https://naksha.tech/"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center"
              >
                {/* Bigger Container for QR - RESPONSIVE */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-64 lg:h-64 mb-4 sm:mb-6 p-2 sm:p-3 border-2 border-dashed border-gray-300 rounded-2xl group-hover:border-blue-500 transition-colors duration-300 bg-white">
                  <Image
                    src="/images/NakSha.png"
                    alt="Scan QR Code"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 256px"
                  />
                </div>
                
                {/* Clean Text - RESPONSIVE */}
                <div className="text-center space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
                    Scan to Navigate
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Open location in maps
                  </p>
                </div>
              </Link>
            </div>

          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center space-y-2 max-w-2xl text-gray-500 dark:text-gray-400">
        <p className="mx-auto max-w-lg text-xs text-center">
          E-Cell, IIT BHU Varanasi is a non-profit organization established
          to nurture the entrepreneurial culture in our college and open
          doors for the next generation of startup founders, entrepreneurs,
          and change makers to leave behind a legacy!
        </p>
          <p className="text-xs font-semibold pt-4">
            &copy; {new Date().getFullYear()} E-Cell IIT BHU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
