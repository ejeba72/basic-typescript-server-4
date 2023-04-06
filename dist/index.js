"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.get("/", (req, res) => {
    try {
        console.log({ getRequest: "get request" });
        res.status(200).sendFile(path_1.default.join(__dirname, "public", "index.html"));
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
});
app.post("/", (req, res) => {
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
});
app.listen(PORT, () => {
    console.log(`Server is attentively listening for requests @ 127.0.0.1:${PORT}`);
});
