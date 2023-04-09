import path from "path";

export function getRequest(req: any, res: any) {
  try {
    console.log({ getRequest: "get request to home route" });
    res.status(200).sendFile(path.join(__dirname, "..", "public", "index.html"));
    // res.status(200).send(["get request to home route"]);
  } catch (err: any) {
   console.log(err.message);
   res.status(500).send(err); 
  }
}