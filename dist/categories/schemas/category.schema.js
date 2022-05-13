"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
const mongoose = require("mongoose");
exports.CategorySchema = new mongoose.Schema({
    code: String,
    name: String,
    details: String,
    image: String,
    status: Boolean,
}, { timestamps: true });
//# sourceMappingURL=category.schema.js.map