"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequest = void 0;
const path_1 = __importDefault(require("path"));
function getRequest(req, res) {
    try {
        console.log({ getRequest: "get request to home route" });
        res.status(200).sendFile(path_1.default.join(__dirname, "..", "public", "index.html"));
        // res.status(200).send(["get request to home route"]);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
}
exports.getRequest = getRequest;
