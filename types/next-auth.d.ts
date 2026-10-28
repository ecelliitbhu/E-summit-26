import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    jwtToken?: string;
    user: {
      id?: string;
      roles?: string[];
      roleData?: any;
    } & DefaultSession["user"];
  }

  interface User {
    id?: string;
    roles?: string[];
    roleData?: any;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    roles?: string[];
    roleData?: any;
    backendToken?: string;
  }
}
