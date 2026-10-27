"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { studentsAPI } from "@/lib/api";
import { isStudentProfileComplete } from "@/lib/auth";

function PostLoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated" || !session?.user) {
      router.push("/events");
      return;
    }

    const checkProfileAndRedirect = async () => {
      const redirectTarget = searchParams?.get("redirect") || "/events";

      try {
        const student = await studentsAPI.getProfile(
          session.user.id || "",
          session.user.email || ""
        );

        if (isStudentProfileComplete(student)) {
          router.push(redirectTarget);
        } else {
          router.push(`/profile?redirect=${encodeURIComponent(redirectTarget)}`);
        }
      } catch (err) {
        console.error("Error checking student profile:", err);
        router.push(`/profile?redirect=${encodeURIComponent(redirectTarget)}`);
      }
    };

    checkProfileAndRedirect();
  }, [session, status, router, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/80 text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-[#F86531] border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-300 font-medium">Verifying your account details...</p>
      </div>
    </div>
  );
}

export default function PostLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-black/80 text-white">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-[#F86531] border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-300 font-medium">Loading...</p>
          </div>
        </div>
      }
    >
      <PostLoginContent />
    </Suspense>
  );
}
