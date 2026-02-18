import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import cors from "cors";
import proxyRouter from "./routes/proxy.js";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/request", proxyRouter);

app.get("/", (_req: Request, res: Response) => {
  res.send("API Tester backend running.");
});

app.listen(PORT, "0.0.0.0" , () => {
  console.log(`Server is running.`);
});
