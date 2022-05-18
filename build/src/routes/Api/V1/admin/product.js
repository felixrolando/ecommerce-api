"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { getProducts, saveProducts } from '../../../../controllers/productController'
const productTestController_1 = require("../../../../controllers/productTestController");
const router = express_1.default.Router();
router.get('/product', productTestController_1.product.getProducts);
router.post('/product', productTestController_1.product.saveProducts);
exports.default = router;
