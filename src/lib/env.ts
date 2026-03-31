import "dotenv/config";

import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(8080),
  DATABASE_URL: z.string().startsWith("postgresql://"),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string().url().default("https://api.gtreino.online/"),
  API_BASE_URL: z.string().url().default("https://api.gtreino.online/"),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  //GOOGLE_GENERATIVE_AI_API_KEY: z.string(),
  OPENAI_API_KEY: z.string().optional(),
  WEB_APP_BASE_URL: z.string().url().default("https://gtreino.online/"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export const env = envSchema.parse(process.env);export const env = envSchema.parse(process.env);