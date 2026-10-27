import { getSession } from "next-auth/react";

const BACKEND_URL = (process.env.NEXT_PUBLIC_BACKEND_URL || "https://ecell-backend-nypd.onrender.com").replace(/\/+$/, "");

export async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const session = await getSession();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (session?.jwtToken) {
    headers["Authorization"] = `Bearer ${session.jwtToken}`;
  }

  const url = `${BACKEND_URL}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;
  return fetch(url, {
    ...options,
    headers,
  });
}

export const studentsAPI = {
  getProfile: async (userId: string, email?: string) => {
    // 1. Try with auth token
    try {
      const res = await fetchWithAuth(`/students/getinfo/${userId}`);
      if (res.ok) {
        const data = await res.json();
        if (data && (data.id || data.rollNo)) {
          return data;
        }
      }
    } catch (e) {
      console.warn("students/getinfo failed, falling back:", e);
    }

    // 2. Fallback via /users/create with email (returns full user record with student)
    if (email) {
      try {
        const userRes = await fetch(`${BACKEND_URL}/users/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        if (userRes.ok) {
          const userData = await userRes.json();
          if (userData?.student && (userData.student.id || userData.student.rollNo)) {
            return userData.student;
          }
        }
      } catch (e) {
        console.warn("users/create fallback failed:", e);
      }
    }

    return null;
  },

  registerProfile: async (studentData: any) => {
    // 1. Try with auth
    try {
      const res = await fetchWithAuth("/students/register", {
        method: "POST",
        body: JSON.stringify(studentData),
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      console.warn("register with auth failed:", e);
    }

    // 2. Unauthenticated direct call fallback
    const rawRes = await fetch(`${BACKEND_URL}/students/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });
    if (!rawRes.ok) {
      throw new Error(`Failed to save profile: ${rawRes.statusText}`);
    }
    return await rawRes.json();
  },

  updateProfile: async (userId: string, studentData: any) => {
    try {
      const res = await fetchWithAuth(`/students/update/${userId}`, {
        method: "PUT",
        body: JSON.stringify(studentData),
      });
      if (res.ok) {
        return await res.json();
      }
    } catch (e) {
      console.warn("update failed, falling back to register:", e);
    }
    return await studentsAPI.registerProfile({ ...studentData, userId });
  },
};

export async function trackRegistrationIntent(data: {
  userId?: string | null;
  userEmail: string;
  userName?: string | null;
  eventSlug?: string;
  eventName?: string;
  platform?: string;
  status?: string;
}) {
  const payload = {
    eventSlug: "esummit-27",
    eventName: "E-Summit '27 Pass",
    platform: "konfhub",
    status: "clicked",
    ...data,
  };

  // 1. Try local Next.js API route
  try {
    const res = await fetch("/api/track-registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn("Local track-registration failed, attempting direct backend call:", err);
  }

  // 2. Direct backend call via fetchWithAuth
  try {
    const res = await fetchWithAuth("/registration-intents", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn("Direct backend track-intent call failed:", err);
  }

  // 3. Direct unauthenticated fallback
  try {
    const backend = (
      process.env.NEXT_PUBLIC_BACKEND_URL || "https://ecell-backend-nypd.onrender.com"
    ).replace(/\/+$/, "");
    const res = await fetch(`${backend}/registration-intents`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    console.warn("Unauthenticated track-intent fallback failed:", err);
  }
}

