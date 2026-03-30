import "dotenv/config";

import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(8080),
  DATABASE_URL: z.string().startsWith("postgresql://"),
  BETTER_AUTH_SECRET: z.string(),
  // No Render tá configurado na porta 8080 ao inves 8081 - trecho da aula 48:31 
//  API_BASE_URL: z.string().url().default("http://localhost:8080"),
  API_BASE_URL: z.string().url().default("https://gtreino.online"),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  //GOOGLE_GENERATIVE_AI_API_KEY: z.string(),
  OPENAI_API_KEY: z.string().optional(),
  //WEB_APP_BASE_URL: z.url(),
  WEB_APP_BASE_URL: z.string().url().default("https://gtreino.online"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export const env = envSchema.parse(process.env);
