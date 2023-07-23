import NextAuth, { AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import prisma from "@/prisma/prismaClient";

const providers = [
  Github({
    clientId: process.env.NEXT_APP_GITHUB_CLIENT_ID as string,
    clientSecret: process.env.NEXT_APP_GITHUB_CLIENT_SECRET as string,
  }),
  Google({
    clientId: process.env.NEXT_APP_GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.NEXT_APP_GOOGLE_CLIENT_SECRET as string,
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    },
  }),
];

export const authOptions: AuthOptions = {
  providers,
  secret: process.env.NEXT_PUBLIC_SECRET as string,
  debug: true,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session }) {
      const userId = await prisma.guest.upsert({
        where: {
          email: session.user?.email as string,
        },
        create: {
          email: session.user?.email as string,
          name: session.user?.name as string,
        },
        update: {
          email: session.user?.email as string,
          name: session.user?.name as string,
        },
        select: {
          id: true,
        },
      });

      console.log("userId >>>>>", userId);
      return { ...session, userId: userId?.id };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
