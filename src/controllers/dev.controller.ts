import path from "path";

// export default {
  export function getRequest(req: any, res: any) {
    try {
      console.log({ getRequest: "get request" });
      res.status(200).sendFile(path.join(__dirname, "public", "index.html"));
    } catch (err: any) {
     console.log(err.message);
     res.status(500).send(err); 
    }
  }
  
  export function postRequest(req: any, res: any) {
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
  }
// }