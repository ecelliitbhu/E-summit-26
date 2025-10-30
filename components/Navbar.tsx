"use client";
import React, { useState, useEffect, FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logo from "@/public/logos/E-Cell-White[1].png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

declare global {
  interface Window {
    popup?: (eventId: string) => void;
  }
}

const navItems = [
  { name: "ITINERARY", link: "/itinerary" },
  { name: "EVENTS", link: "/events" },
  { name: "SPEAKERS", link: "/speakers" },
  { name: "PARTNERS", link: "/partners" },
  { name: "CONTACT US", link: "/contact" },
  { name: "MERCH", link: "/merch" },
  { name: "INITIATIVE", link: "/initiative" },
  { name: "SJ", link: "/SJ" },
];

const Navbar: FunctionComponent = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => setIsPortrait(window.innerHeight > window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full min-h-fit sticky top-8 z-30 max-w-[76.5rem] mx-auto">
      <nav className={`w-full rounded-full z-10 bg-background opacity-95 mt-1 fixed md:absolute`}>
        <div className="relative block px-8">
          <div className="flex items-center justify-between w-full p-3 gap-1 capitalize">
            {/* Logo */}
            <Link
              href="/"
              aria-label="logo"
              className="block w-10 -m-4 items-center"
            >
              <Image
                unoptimized
                src={logo}
                alt="E-Summit'24 logo"
                width={50}
                height={20}
                className="scale-150 md:ml-2 sm:w-32"
              />
            </Link>

            {/* Navigation */}
            {isPortrait ? (
              // Portrait: Always Dropdown
              <div className="relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      variant="outline"
                    >
                      <Menu />
                    </Button>
                  </DropdownMenuTrigger>

                  {isDropdownOpen && (
                    <DropdownMenuContent align="start" className="w-56 mr-2">
                      <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        {navItems.map((item, index) => (
                          <DropdownMenuItem key={index}>
                            <Link href={item.link} className="no-underline">
                              {item.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  )}
                </DropdownMenu>
              </div>
            ) : (
              // Landscape: normal desktop navigation
              <div className="hidden lg:flex">
                <ul className="tracking-wide font-light text-2xl flex lg:flex-row flex-wrap justify-end items-center gap-6">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <Link href={item.link} className="no-underline">
                        <Button className="text-primary-foreground" variant="link">
                          {item.name.toUpperCase()}
                        </Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Register Button */}
            {!isPortrait && (
              <div className="hidden lg:block">
                <Link href="/payment?type=esummit" className="no-underline">
                  <Button
                    variant="default"
                    style={{
                      background: "linear-gradient(90deg, #F1E821, #23C0AD, #487AFA)",
                      color: "white",
                      border: "none",
                      padding: "0.5rem 1.5rem",
                      fontWeight: "bold",
                      borderRadius: "0.375rem",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "linear-gradient(90deg, #487AFA, #23C0AD, #F1E821)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "linear-gradient(90deg, #F1E821, #23C0AD, #487AFA)")
                    }
                  >
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      <ToastContainer />

      {/* Townscript Widget */}
      <Script
        src="https://www.townscript.com/static/Bookingflow/js/townscript-widget.nocache.js"
        strategy="afterInteractive"
      />
    </header>
  );
};

export default Navbar;
