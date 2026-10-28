"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import { ESummitAuthProvider } from "@/context/ESummitAuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider refetchInterval={0} refetchOnWindowFocus={false}>
      <ESummitAuthProvider>
        {children}
      </ESummitAuthProvider>
    </SessionProvider>
  );
}

