import { Router, Request, Response } from "express";
import axios from "axios";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { url, method, headers, body } = req.body as {
    url: string;
    method: string;
    headers?: Record<string, string>;
    body?: unknown;
  };

  try {
    const start = Date.now();

    const response = await axios({
      url,
      method,
      headers,
      data: body,
    });

    const time = Date.now() - start;

    res.json({
      status: response.status,
      time,
      data: response.data,
    });
  } catch (err: any) {
    res.status(500).json({
      error: err.message,
      response: err.response?.data || null,
    });
  }
});

export default router;
