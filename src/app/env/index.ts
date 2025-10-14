import z from "zod";
import "dotenv/config";

const schema = z.object({
  NODE_PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(["test", "development", "production"]).default("development"),
  EXTERNAL_API_URL: z.url().default("https://fakestoreapi.com")
})

const _env = schema.safeParse(process.env)

if(!_env.success) {
  console.error("Invalid environment variables:", _env.error.format())
  throw new Error("Invalid environment variables")
}

export const env = _env.data

