"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferSchema = void 0;
const mongoose = require("mongoose");
exports.TransferSchema = new mongoose.Schema({
    emisor: String,
    talent_e: Number,
    receptor: String,
    talent_r: Number
}, {
    versionKey: false
});
//# sourceMappingURL=transfer.schema.js.map