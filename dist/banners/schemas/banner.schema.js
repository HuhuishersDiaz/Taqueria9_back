"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerSchema = void 0;
const mongoose = require("mongoose");
exports.BannerSchema = new mongoose.Schema({
    code: String,
    name: String,
    details: String,
    image: String,
}, { timestamps: true });
//# sourceMappingURL=banner.schema.js.map