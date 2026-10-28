"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { studentsAPI } from "@/lib/api";
import { isStudentProfileComplete } from "@/lib/auth";

interface ESummitAuthContextType {
  user: any;
  student: any;
  status: "loading" | "authenticated" | "unauthenticated";
  isAuthenticated: boolean;
  hasProfile: boolean;
  login: (redirect?: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<any>;
}

const ESummitAuthContext = createContext<ESummitAuthContextType>({
  user: null,
  student: null,
  status: "loading",
  isAuthenticated: false,
  hasProfile: false,
  login: async () => {},
  logout: async () => {},
  refreshProfile: async () => null,
});

export function ESummitAuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [student, setStudent] = useState<any>(null);
  const [isCheckingProfile, setIsCheckingProfile] = useState<boolean>(true);
  const router = useRouter();

  const fetchProfile = useCallback(async (userId: string, email?: string) => {
    try {
      const data = await studentsAPI.getProfile(userId, email);
      setStudent(data);
      return data;
    } catch (e) {
      console.warn("Error fetching student profile:", e);
      return null;
    } finally {
      setIsCheckingProfile(false);
    }
  }, []);

  useEffect(() => {
    if (status === "loading") {
      setIsCheckingProfile(true);
      return;
    }

    if (status === "authenticated" && session?.user?.id) {
      // Check roleData first if present
      if (session.user.roleData?.student && isStudentProfileComplete(session.user.roleData.student)) {
        setStudent(session.user.roleData.student);
        setIsCheckingProfile(false);
      } else {
        fetchProfile(session.user.id, session.user.email || undefined);
      }
    } else {
      setStudent(null);
      setIsCheckingProfile(false);
    }
  }, [session, status, fetchProfile]);

  const login = async (redirectTarget = "/events") => {
    await signIn("google", {
      callbackUrl: `/post-login?redirect=${encodeURIComponent(redirectTarget)}`,
    });
  };

  const logout = async () => {
    setStudent(null);
    await signOut({ callbackUrl: "/events" });
  };

  const refreshProfile = async () => {
    if (session?.user?.id) {
      return await fetchProfile(session.user.id, session.user.email || undefined);
    }
    return null;
  };

  const isAuthenticated = status === "authenticated" && !!session?.user;
  const hasProfile = isStudentProfileComplete(student);

  return (
    <ESummitAuthContext.Provider
      value={{
        user: session?.user || null,
        student,
        status: isCheckingProfile && status === "authenticated" ? "loading" : status,
        isAuthenticated,
        hasProfile,
        login,
        logout,
        refreshProfile,
      }}
    >
      {children}
    </ESummitAuthContext.Provider>
  );
}

export const useESummitAuth = () => useContext(ESummitAuthContext);
