"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = __importDefault(require("./admin/product"));
const indexRouterV1 = express_1.default.Router();
indexRouterV1.use(product_1.default);
exports.default = indexRouterV1;
