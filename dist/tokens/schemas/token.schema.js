"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenSchema = void 0;
const mongoose = require("mongoose");
exports.TokenSchema = new mongoose.Schema({
    token: String,
    message: String,
    status: String,
}, { timestamps: true });
//# sourceMappingURL=token.schema.js.map