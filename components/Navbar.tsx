"use client";

import React, { useState, useEffect, FunctionComponent, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/public/logos/esummit26.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const navItems = [
  { name: "EVENTS", link: "/events" },
  { name: "SPEAKERS", link: "/speakers" },
  { name: "PARTNERS", link: "/partners" },
  { name: "MERCH", link: "/merch" },
  { name: "INITIATIVE", link: "/initiative" },
];

const sjCities = ["delhi", "ahmedabad", "bangalore"];

const Navbar: FunctionComponent = () => {
  const pathname = usePathname();

  const [scrolling, setScrolling] = useState(false);
  const [isHoveringSJ, setIsHoveringSJ] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSJEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsHoveringSJ(true);
  };

  const handleSJLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsHoveringSJ(false);
    }, 120);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const gradientButtonStyle = {
    background: "linear-gradient(90deg,#F1E821,#23C0AD,#487AFA)",
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
          fixed left-1/2 -translate-x-1/2
          z-[9999] isolate
          w-full max-w-[76.5rem]
          px-4 md:px-0
          transition-all duration-300
          ${scrolling ? "top-2" : "top-4"}
        `}
      >
        <nav
          className={`
            relative w-full
            rounded-[999px]
            transition-all duration-300 ease-out
            ${
              scrolling
                ? "bg-black/85 border border-white/15 shadow-[0_20px_40px_rgba(0,0,0,0.75)] backdrop-blur-2xl scale-[0.98]"
                : "bg-black/75 border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
            }
          `}
        >
          {/* subtle inner ring */}
          <div className="pointer-events-none absolute inset-0 rounded-[999px] ring-1 ring-white/5" />

          <div className="relative px-4 md:px-6 py-1.5">
            <div className="flex items-center justify-between gap-4">
              {/* Left: logo */}
              <Link href="/" className="flex items-center gap-0 shrink-0 group">
                <Image
                  unoptimized
                  src={logo}
                  alt="E-Summit Logo"
                  width={150}
                  height={80}
                  className={`
                    object-contain transition-transform duration-300
                    ${scrolling ? "scale-[0.85]" : "scale-100"}
                  `}
                />
              </Link>

              {/* ========== DESKTOP NAV ========== */}
              <div className="hidden lg:flex items-center justify-between flex-1">
                <ul className="flex items-center gap-12 mx-auto text-[15px] font-semibold">
                  {navItems.map((item) => {
                    const isActive = pathname === item.link;
                    return (
                      <li key={item.link}>
                        <Link
                          href={item.link}
                          className={`
                            px-3 py-1.5 rounded-full
                            transition-all duration-200
                            ${
                              isActive
                                ? "text-white bg-white/10"
                                : "text-white/70 hover:text-white hover:bg-white/5"
                            }
                          `}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}

                  <li
                    onMouseEnter={handleSJEnter}
                    onMouseLeave={handleSJLeave}
                    className="relative"
                  >
                    <DropdownMenu open={isHoveringSJ} modal={false}>
                      <DropdownMenuTrigger asChild>
                        <button
                          className="
                            px-3 py-1.5 rounded-full
                            text-white/70 hover:text-white hover:bg-white/5
                            flex items-center gap-1 text-[13px] font-medium
                            transition-colors
                          "
                        >
                          SJ
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${
                              isHoveringSJ ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent
                        align="center"
                        className="
                          mt-2 w-56 rounded-2xl
                          bg-[#050505]/95 text-white
                          border border-white/15
                          shadow-[0_20px_45px_rgba(0,0,0,0.9)]
                          backdrop-blur-xl
                        "
                      >
                        <DropdownMenuLabel className="text-xs text-white/60">
                          Startup Junction
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-white/15" />

                        {sjCities.map((city) => (
                          <DropdownMenuItem
                            key={city}
                            className="cursor-pointer"
                          >
                            <Link
                              href={`/SJ/${city}`}
                              className="flex w-full items-center justify-between text-sm"
                            >
                              <span>
                                SJ –{" "}
                                {city.charAt(0).toUpperCase() + city.slice(1)}
                              </span>
                              <ChevronDown
                                size={13}
                                className="rotate-[-90deg] text-white/40"
                              />
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                </ul>

                <Link href="/payment?type=esummit">
                  <Button
                    className="
                      rounded-full text-[16px] font-bold text-white
                      px-4 py-1.5 h-auto
                      transition-transform duration-200
                      hover:scale-[1.04]
                      shadow-[0_0_18px_rgba(35,192,173,0.65)]
                    "
                    style={gradientButtonStyle}
                  >
                    Register
                  </Button>
                </Link>
              </div>

              {/* ========== MOBILE NAV TRIGGER ========== */}
              <div className="flex lg:hidden items-center">
                <Button
                  variant="ghost"
                  className="
                    bg-transparent text-white
                    hover:bg-white/10
                    rounded-full h-10 w-10 p-0 flex items-center justify-center
                    transition-all duration-200
                  "
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* ========== MOBILE FULLSCREEN MENU ========== */}
      <div
        className={`
          fixed inset-0 z-[9998]
          lg:hidden
          transition-all duration-300 ease-out
          ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}
        `}
      >
        <div
          className={`
            absolute inset-0 bg-black/70 backdrop-blur-xl
            transition-opacity duration-300
            ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}
          `}
          onClick={closeMobileMenu}
        />

        <div
          className={`
            absolute top-0 left-0 right-0
            bg-[#050505] text-white
            pt-28 pb-10 px-6
            rounded-b-[2.5rem]
            border-b border-white/10
            shadow-[0_40px_80px_rgba(0,0,0,0.9)]
            transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)
            ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-[110%]"}
          `}
        >
          {/* Menu Title Header inside the sheet, moved down to avoid navbar overlap */}
          <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
               Menu
            </span>
            <span className="text-[10px] uppercase tracking-[0.1em] text-white/30">
              E‑Summit 26
            </span>
          </div>

          <nav className="space-y-8">
            <ul className="space-y-2 text-[17px] font-semibold tracking-tight">
              {navItems.map((item) => {
                const isActive = pathname === item.link;
                return (
                  <li key={item.link}>
                    <Link
                      href={item.link}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between py-3 border-b border-white/5"
                    >
                      <span className={isActive ? "text-white" : "text-white/70"}>
                        {item.name}
                      </span>
                      <span className="h-[2px] w-6 rounded-full bg-gradient-to-r from-[#F1E821] to-[#487AFA] opacity-50" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">
                Startup Junction
              </p>
              <div className="grid grid-cols-1 gap-1">
                {sjCities.map((city) => (
                  <Link
                    key={city}
                    href={`/SJ/${city}`}
                    onClick={closeMobileMenu}
                    className="
                      flex items-center justify-between
                      py-3 text-[15px]
                      text-white/70 hover:text-white
                    "
                  >
                    <span>SJ – {city.charAt(0).toUpperCase() + city.slice(1)}</span>
                    <ChevronDown size={16} className="-rotate-90 text-white/20" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <Link href="/payment?type=esummit" onClick={closeMobileMenu}>
                <Button
                  className="
                    w-full rounded-full font-bold text-white
                    py-7 text-[16px]
                    transition-transform duration-200
                    active:scale-[0.98]
                    shadow-[0_10px_30px_rgba(35,192,173,0.4)]
                  "
                  style={gradientButtonStyle}
                >
                  Register
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <ToastContainer />

      <Script
        src="https://www.townscript.com/static/Bookingflow/js/townscript-widget.nocache.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default Navbar;