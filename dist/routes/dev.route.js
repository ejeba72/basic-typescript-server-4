"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devRoute = void 0;
const express_1 = require("express");
const dev_controller_1 = require("../controllers/dev.controller");
const router = (0, express_1.Router)();
exports.devRoute = router;
router.route("/").get(dev_controller_1.getRequest).post(dev_controller_1.postRequest);
