import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import proxyRouter from "./routes/proxy.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/request", proxyRouter);

// Health check
app.get("/", (_req: Request, res: Response) => {
  res.send("API Tester backend running.");
});

// Server
app.listen(PORT, () => {
  console.log(`Server is running.`);
});
