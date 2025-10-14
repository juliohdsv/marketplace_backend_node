import z from "zod";
import "dotenv/config";

const schema = z.object({
  NODE_PORT: z.coerce.number(),
  NODE_ENV: z.enum(["test", "development", "production"]),
})

const _env = schema.safeParse(process.env)

if(!_env.success) {
  console.error("Invalid environment variables:", _env.error.format())
  throw new Error("Invalid environment variables")
}

export const env = _env.data

