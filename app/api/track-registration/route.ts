import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth-options";

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const body = await request.json().catch(() => ({}));

    const userEmail = (body.userEmail || session?.user?.email || "").trim();
    if (!userEmail) {
      return NextResponse.json(
        { error: "userEmail is required" },
        { status: 400 }
      );
    }

    const payload = {
      userId: body.userId || session?.user?.id || null,
      userEmail,
      userName: body.userName || session?.user?.name || null,
      eventSlug: body.eventSlug || "esummit-27",
      eventName: body.eventName || "E-Summit '27 Pass",
      platform: body.platform || "konfhub",
      status: body.status || "clicked",
    };

    const backendUrl = (
      process.env.NEXT_PUBLIC_BACKEND_URL || "https://ecell-backend-nypd.onrender.com"
    ).replace(/\/+$/, "");

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (session?.jwtToken) {
      headers["Authorization"] = `Bearer ${session.jwtToken}`;
    }

    const res = await fetch(`${backendUrl}/registration-intents`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      console.warn("[track-registration] Backend returned error:", res.status, errData);
      return NextResponse.json(
        { success: false, error: errData.error || "Backend error" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("[track-registration] Unexpected route error:", err);
    return NextResponse.json(
      { error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
