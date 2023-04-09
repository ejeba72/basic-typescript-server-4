"use strict";
// NOTE: This controller is for development purpose only
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRequest = exports.getRequest = void 0;
const path_1 = __importDefault(require("path"));
const dev_model_1 = require("../models/dev.model");
// export default {
function getRequest(req, res) {
    try {
        console.log({ getRequest: "get request to dev route" });
        res.status(200).sendFile(path_1.default.join(__dirname, "..", "public", "pages", "dev.page.html"));
        // res.status(200).send(["get request to dev route"]);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
}
exports.getRequest = getRequest;
function postRequest(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, message } = req.body;
            const newDoc = yield new dev_model_1.devModel({
                name,
                message
            }).save();
            console.log({
                postRequest: "post request to dev route",
                reqBody: req.body,
                newDoc
            });
            // res.status(201).send({
            //     feedbackToClient: "your form has been sent",
            //     whatWasSent: req.body,
            //     newDoc
            //   });
            function sendToClient() {
                const signupResult = document.getElementById("signup");
                const payload = newDoc;
                signupResult.innerText = JSON.stringify(payload);
            }
            sendToClient();
            res.status(201).sendFile(path_1.default.join(__dirname, "..", "public", "pages", "dev-signup-successful.page.html"));
        }
        catch (err) {
            console.log(err.message);
            res.send(err);
        }
    });
}
exports.postRequest = postRequest;
// }
// console.log(newDoc);
