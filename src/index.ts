import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import path from "path";
import devRoute from "./route/dev.route";

config();

const app: Express = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/dev", devRoute)

app.listen(PORT, () => {
  console.log(`Server is attentively listening for requests @ 127.0.0.1:${PORT}`);
});