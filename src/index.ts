import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import path from "path";

config();

const app: Express = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req: Request, res: Response) => {
  try {
    console.log({ getRequest: "get request" });
    res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
  } catch (err: any) {
   console.log(err.message);
   res.status(500).send(err); 
  }
})

app.post("/", (req: Request, res: Response) => {
  try {
    console.log({
      postRequest: "post request",
      reqBody: req.body,
    });
    res.status(201).send({
      feedbackToClient: "your form has been sent",
      whatWasSent: req.body
    });
  } catch (err: any) {
    console.log(err.message);
    res.send(err);
  }
})

app.listen(PORT, () => {
  console.log(`Server is attentively listening for requests @ 127.0.0.1:${PORT}`);
});