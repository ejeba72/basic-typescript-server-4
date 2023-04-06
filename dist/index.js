"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
const dev_route_1 = __importDefault(require("./routes/dev.route"));
const connection_1 = require("./db/connection");
(0, dotenv_1.config)();
(0, connection_1.mongoDB)();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use("/dev", dev_route_1.default);
app.listen(PORT, () => {
    console.log(`Server is attentively listening for requests @ 127.0.0.1:${PORT}`);
});
