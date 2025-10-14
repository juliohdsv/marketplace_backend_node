import { app } from "./index.ts";
import { env } from "@/app/env/index.ts";

const PORT = env.NODE_PORT;
const ENV = env.NODE_ENV;

app.listen(
  PORT, ()=>
  console.log(`Server running in mode ${ENV} on port ${PORT}`)
);