import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import path from "path";
// import bodyParser from "body-parser";

config();

const app: Express = express();
const PORT = process.env.PORT;

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
// app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  try {
    console.log({ getRequest: "get request" });
    res.status(200).sendFile(path.join(__dirname, './public/index.html'));
  //   res.status(200).send(`
  //   <form action="/" method="POST">
  //   <label for="name">Name:</label>
  //   <input type="text" id="name" name="name">
  //   <button type="submit">Submit</button>
  // </form>
  
  //   `)
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
      // heads: req.headers
    });
    // console.log("post request");
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