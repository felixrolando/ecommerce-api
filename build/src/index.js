"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const NODE_ENV = process.env.NODE_ENV || 'development';
dotenv_1.default.config({ path: `.env.${NODE_ENV}` });
const PORT = process.env.PORT || 3000;
app_1.default.listen(PORT, () => {
    console.log(`${process.env.HOST}`);
});
