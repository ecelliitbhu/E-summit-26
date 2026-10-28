"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";
import { useESummitAuth } from "@/context/ESummitAuthContext";
import { trackRegistrationIntent } from "@/lib/api";

interface KonfHubButtonProps {
  buttonId?: string;
  className?: string;
}

export default function KonfHubButton({
  buttonId = "btn_0873c479a20e",
  className = "",
}: KonfHubButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { user, student } = useESummitAuth();

  const handleRegisterClick = () => {
    setIsOpenModal(true);

    if (user?.email) {
      trackRegistrationIntent({
        userId: user.id || null,
        userEmail: user.email,
        userName: student?.name || user.name || null,
        eventSlug: "esummit-27",
        eventName: "E-Summit '27 Pass",
        platform: "konfhub",
        status: "clicked",
      }).catch((err) => {
        console.warn("Registration intent tracking error:", err);
      });
    }
  };


  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://widget.konfhub.com/widget.js";
    script.setAttribute("button_id", buttonId);
    script.async = true;

    // Polyfill document.currentScript in case React useEffect in widget.js reads it
    try {
      Object.defineProperty(document, "currentScript", {
        get: () => script,
        configurable: true,
      });
    } catch (e) {}

    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [buttonId]);

  // Handle escape key and body overflow when dialog is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpenModal(false);
      }
    };

    if (isOpenModal) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpenModal]);

  return (
    <div className={`flex flex-col items-center justify-center w-full ${className}`}>
      {/* Hidden slot so KonfHub raw script can mount silently without rendering duplicate button */}
      <div ref={containerRef} className="hidden" />

      {/* Our single custom styled Register Button */}
      <Button
        type="button"
        onClick={handleRegisterClick}
        className="
          bg-gradient-to-r from-[#F86531] via-[#C42F35] to-[#13324F]
          text-white font-bold px-8 py-6 rounded-xl text-base
          shadow-[0_0_25px_rgba(248,101,49,0.45)]
          hover:shadow-[0_0_35px_rgba(196,47,53,0.65)]
          hover:scale-[1.02] active:scale-[0.98]
          transition-all duration-300 flex items-center gap-2 cursor-pointer
        "
      >
        <Sparkles className="w-4 h-4 text-yellow-300" />
        REGISTER ON KONFHUB
      </Button>

      {/* KonfHub Dialog Modal - Positioned with safe top spacing so close button is always visible & clickable */}
      {isOpenModal && (
        <div
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 pt-28 sm:pt-32 pb-8 overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpenModal(false);
          }}
        >

          <div className="relative w-full max-w-2xl bg-zinc-950 border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[82vh] max-h-[680px] my-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-900/90 z-20 shrink-0">
              <h3 className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
                <span className="text-[#F86531]">E-Summit &apos;27</span> Pass Registration
              </h3>
              <button
                type="button"
                onClick={() => setIsOpenModal(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20 z-30 shadow-md"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* KonfHub Registration Iframe */}
            <div className="flex-1 w-full relative bg-zinc-950">
              <iframe
                src="https://konfhub.com/widget/test-1-8bf34264?desc=true&tickets=125201"
                title="KonfHub Registration"
                allow="payment"
                className="w-full h-full border-0 bg-transparent"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
