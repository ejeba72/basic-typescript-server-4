import path from "path";
import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import { devRoute } from "./routes/dev.route";
import { mongoDB } from "./db/connection";
import { homeRoute } from "./routes/home.route";

config();
mongoDB();

const app: Express = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
app.use("/", homeRoute);
app.use("/dev", devRoute);

app.listen(PORT, () => {
  console.log(`Server is attentively listening for requests @ 127.0.0.1:${PORT}`);
});