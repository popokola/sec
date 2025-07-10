// lib/auth.ts or wherever your auth is configured
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { magicLink } from "better-auth/plugins/magic-link";
import { db } from "@/db"; // your Drizzle DB client
import {
  user,
  session,
  account,
  verification
} from "@/db/schema"; 
import { resend } from "./resend";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: {
      user,          
      session,       
      account,       
      verification   
    }
    // usePlural: true // optional if your table names differ from default
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      await resend.emails.send({
        to: user.email,
        from: "charles258@hotmail.fr",
        subject: "Reset your password",
        text: `Click the link to reset your password: ${url}`,
      });
    },
    //requireEmailVerification: true,
  },
  appName: "orcish-dashboard",
  plugins: [
    magicLink({
      sendMagicLink: async ({ email, url }) => {
        await resend.emails.send({
          to: email,
          from: "charles258@hotmail.fr",
          subject: "Magic Link",
          text: `Hello, click here : ${url}`,
        });
      },
    }),
    nextCookies()
  ],
});
