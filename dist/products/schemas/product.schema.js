"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    code: String,
    name: String,
    details: String,
    image: String,
    price: String,
    createdAt: Date,
}, {
    versionKey: false
});
//# sourceMappingURL=product.schema.js.map