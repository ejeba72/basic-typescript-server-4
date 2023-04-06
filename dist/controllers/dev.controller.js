"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRequest = exports.getRequest = void 0;
const path_1 = __importDefault(require("path"));
// export default {
function getRequest(req, res) {
    try {
        console.log({ getRequest: "get request" });
        res.status(200).sendFile(path_1.default.join(__dirname, "public", "index.html"));
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
}
exports.getRequest = getRequest;
function postRequest(req, res) {
    try {
        console.log({
            postRequest: "post request",
            reqBody: req.body,
        });
        res.status(201).send({
            feedbackToClient: "your form has been sent",
            whatWasSent: req.body
        });
    }
    catch (err) {
        console.log(err.message);
        res.send(err);
    }
}
exports.postRequest = postRequest;
// }
