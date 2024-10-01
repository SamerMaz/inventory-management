"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
/** ROUTE IMPORTS */
/**CONFIGURATIONS */
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
/** Routes*/
app.get("/hello", function (req, res) {
    res.send("hello world");
});
/** SERVER */
var port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});
