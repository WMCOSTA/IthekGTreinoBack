import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { openAPI } from "better-auth/plugins";

import { prisma } from "./db.js";
import { env } from "./env.js";

export const auth = betterAuth({
  baseURL: env.API_BASE_URL,
  trustedOrigins: [env.WEB_APP_BASE_URL],
  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [openAPI()],
  advanced: {
    // minha inclusão
    cookiePrefix: "gtreino-auth",
    // Isso permite que o cookie seja compartilhado entre api e www
    // Removido o ponto em ".gtreino.online"
    crossSubDomainCookies: {
      enabled: true,
      domain:
        env.NODE_ENV === "production" ? "gtreino.online" : undefined,
    },
  },
});
