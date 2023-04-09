// NOTE: This controller is for development purpose only

import path from "path";
import { devModel } from "../models/dev.model";

// export default {
  export function getRequest(req: any, res: any) {
    try {
      console.log({ getRequest: "get request to dev route" });
      res.status(200).sendFile(path.join(__dirname, "..", "public", "pages", "dev.page.html"));
      // res.status(200).send(["get request to dev route"]);
    } catch (err: any) {
     console.log(err.message);
     res.status(500).send(err); 
    }
  }
  
  export async function postRequest(req: any, res: any) {
    try {
      const { name, message } = req.body;
      const newDoc = await new devModel({
        name,
        message
      }).save()
      console.log({
        postRequest: "post request to dev route",
        reqBody: req.body,
        newDoc
      });
      res.status(201).send({
        feedbackToClient: "your form has been sent",
        whatWasSent: req.body,
        newDoc
      });
    } catch (err: any) {
      console.log(err.message);
      res.send(err);
    }
  }
// }