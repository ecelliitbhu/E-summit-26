import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import jwt from "jsonwebtoken";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || "DBSJKBFHDBHJCDIBCIUBEIUBHJEBHJSCD",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "select_account",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const backend = (process.env.NEXT_PUBLIC_BACKEND_URL || "https://ecell-backend-nypd.onrender.com").replace(/\/+$/, "");
      try {
        const res = await fetch(`${backend}/users/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.email }),
        });

        if (!res.ok) {
          console.error("Failed to sync user with backend:", res.status);
          return false;
        }

        const foundUser = await res.json();
        const roles: string[] = [];
        if (foundUser.student) roles.push("STUDENT");
        if (foundUser.recruiter) roles.push("RECRUITER");
        if (foundUser.ambassador) roles.push("AMBASSADOR");

        user.id = foundUser.id;
        user.roles = roles;
        user.roleData = {
          student: foundUser.student || null,
          recruiter: foundUser.recruiter || null,
          ambassador: foundUser.ambassador || null,
        };

        return true;
      } catch (err) {
        console.error("signIn callback error:", err);
        return false;
      }
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.roles = user.roles;
        token.roleData = user.roleData;
      }
      if (trigger === "update" && session?.user) {
        if (session.user.roles) token.roles = session.user.roles;
        if (session.user.roleData) token.roleData = session.user.roleData;
      }

      token.backendToken = jwt.sign(
        { id: token.id, roles: token.roles, roleData: token.roleData },
        process.env.NEXTAUTH_SECRET || "DBSJKBFHDBHJCDIBCIUBEIUBHJEBHJSCD",
        { expiresIn: "30d" }
      );
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.roles = (token.roles as string[]) || [];
        session.user.roleData = token.roleData;
      }
      session.jwtToken = token.backendToken as string;
      return session;
    },
  },
  pages: {
    error: "/events",
  },
};
