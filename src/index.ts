import express, { Express, Request, Response } from "express";
import { config } from "dotenv";

config();

const app: Express = express();
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  try {
    console.log("get request");
    res.status(200).send("hello, world");
  } catch (err: any) {
   console.log(err.message);
   res.status(500).send(err); 
  }
})

app.listen(PORT, () => {
  console.log(`Server is attentively listening for requests @ port ${PORT}`);
});