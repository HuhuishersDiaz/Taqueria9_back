"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferSchema = void 0;
const mongoose = require("mongoose");
exports.TransferSchema = new mongoose.Schema({
    emisor: Number,
    receiver: Number,
    talents: Number,
    score: Number,
    created_at: { type: Date, default: Date.now }
}, {
    versionKey: false
});
//# sourceMappingURL=transfer.schema.js.map