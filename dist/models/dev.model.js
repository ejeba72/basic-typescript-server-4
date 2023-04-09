"use strict";
// NOTE: This model is for development purpose only
Object.defineProperty(exports, "__esModule", { value: true });
exports.devModel = void 0;
const mongoose_1 = require("mongoose");
const devSchema = new mongoose_1.Schema({
    name: String,
    message: String
});
const modelling = (0, mongoose_1.model)("devDocument", devSchema);
exports.devModel = modelling;
