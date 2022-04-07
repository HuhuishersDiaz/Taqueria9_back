"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushSchema = void 0;
const mongoose = require("mongoose");
exports.PushSchema = new mongoose.Schema({
    token: String,
    message: String,
    status: String,
}, { timestamps: true });
//# sourceMappingURL=push.schema.js.map