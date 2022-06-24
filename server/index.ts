import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
<<<<<<< HEAD
dotenv.config({ path: "./config/.env" });

=======
dotenv.config({ path: "./config/.env"});
>>>>>>> 4f2f2b5b4fa18d45adaee49418c60a5df4789f15
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(process.env.PORT, () => {
  console.log(`⚡️[server]: Listening on port ${process.env.PORT}`);
});
