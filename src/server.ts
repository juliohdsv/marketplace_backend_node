import { app } from "./app";

const PORT: number = Number(process.env.NODE_PORT) || 3000; 
const ENV: string = process.env.NODE_ENV || "development"; 

app.listen(
  PORT, ()=>
  console.log(`Server running in mode ${ENV} on port ${PORT}`)
);