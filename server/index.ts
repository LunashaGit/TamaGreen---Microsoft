import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(process.env.PORT, () => {
  console.log(`⚡️[server]: Listening on port ${process.env.PORT}`);
});
