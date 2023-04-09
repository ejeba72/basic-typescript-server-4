import { Router } from "express";
import { getRequest, postRequest } from "../controllers/dev.controller";

const router = Router();

router.route("/").get(getRequest).post(postRequest);

// export router as devRoute;
// export default devRoute;

export { router as devRoute }