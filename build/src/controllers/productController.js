"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveProducts = exports.getProducts = void 0;
const getProducts = (req, res) => {
    return res.json({ message: 'get products' });
};
exports.getProducts = getProducts;
const saveProducts = (req, res) => {
    return res.json({ message: 'save products' });
};
exports.saveProducts = saveProducts;
