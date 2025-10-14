import { app } from "./index.ts";
import { env } from "./app/env/index.ts";

const PORT = env.NODE_PORT;
const ENV = env.NODE_ENV;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server running on ${ENV} mode in http://${HOST}:${PORT}`);
});
