"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
    try {
        console.log("get request");
        res.status(200).send("hello, world");
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
});
app.listen(PORT, () => {
    console.log(`Server is attentively listening for requests @ port ${PORT}`);
});
