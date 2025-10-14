import { env } from "@/app/env/index.js";
import axios from "axios";

export const fakeStoreApi = axios.create({
  baseURL: env.EXTERNAL_API_URL,
  timeout: 5000
})

