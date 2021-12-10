"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const https_1 = __importDefault(require("https"));
const fs_1 = __importDefault(require("fs"));
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const options = {
    key: fs_1.default.readFileSync("./privatekey.pem"),
    cert: fs_1.default.readFileSync("./cert.pem"),
};
https_1.default.createServer(options, app);
app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/login", (req, res) => {
    res.render("login.ejs");
});
app.listen(port, () => {
    console.log(`Start on port ${port}`);
});
