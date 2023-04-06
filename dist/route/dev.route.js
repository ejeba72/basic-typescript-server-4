"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dev_controller_1 = require("../controller/dev.controller");
const devRoute = (0, express_1.Router)();
devRoute.route("/").get(dev_controller_1.getRequest).post(dev_controller_1.postRequest);
// export router as devRoute;
exports.default = devRoute;
