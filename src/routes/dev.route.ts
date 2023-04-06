import { Router } from "express";
import { getRequest, postRequest } from "../controllers/dev.controller";

const devRoute = Router();

devRoute.route("/").get(getRequest).post(postRequest);

// export router as devRoute;
export default devRoute;