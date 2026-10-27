"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";

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
  const [scriptLoaded, setScriptLoaded] = useState(false);

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

    script.onload = () => {
      setScriptLoaded(true);
    };

    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [buttonId]);

  return (
    <div className={`flex flex-col items-center justify-center w-full gap-3 ${className}`}>
      {/* Container for KonfHub widget script button */}
      <div ref={containerRef} className="konfhub-widget-slot min-h-[44px] flex justify-center items-center" />

      {/* Styled KonfHub Register Button */}
      <Button
        onClick={() => setIsOpenModal(true)}
        className="
          bg-gradient-to-r from-[#F86531] via-[#C42F35] to-[#13324F]
          text-white font-bold px-8 py-6 rounded-xl text-base
          shadow-[0_0_25px_rgba(248,101,49,0.45)]
          hover:shadow-[0_0_35px_rgba(196,47,53,0.65)]
          hover:scale-[1.02] active:scale-[0.98]
          transition-all duration-300 flex items-center gap-2
        "
      >
        <Sparkles className="w-4 h-4 text-yellow-300" />
        REGISTER ON KONFHUB
      </Button>

      {/* Seamless KonfHub Modal */}
      {isOpenModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-2xl bg-zinc-950 border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[90vh] max-h-[720px]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-900/50">
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                <span className="text-[#F86531]">E-Summit &apos;27</span> Registration
              </h3>
              <button
                onClick={() => setIsOpenModal(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <iframe
              src="https://konfhub.com/widget/test-1-8bf34264?desc=true&tickets=125201"
              title="KonfHub Registration"
              allow="payment"
              className="w-full flex-1 border-0 bg-transparent"
            />
          </div>
        </div>
      )}
    </div>
  );
}
