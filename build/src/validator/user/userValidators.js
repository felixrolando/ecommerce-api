"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserValidator = exports.registerUserValidator = void 0;
const zod_1 = require("zod");
exports.registerUserValidator = zod_1.z.object({
    user: zod_1.z.string(),
    password: zod_1.z.string(),
    name: zod_1.z.string()
});
exports.loginUserValidator = zod_1.z.object({
    user: zod_1.z.string(),
    password: zod_1.z.string()
});
