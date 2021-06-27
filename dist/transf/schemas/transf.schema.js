"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransfSchema = void 0;
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
exports.TransfSchema = new mongoose.Schema({
    socio: Number,
    talents: Number,
    receiver: Number,
    score: Number,
    created_at: { type: Date, required: true, default: Date.now }
}, {
    versionKey: false
});
//# sourceMappingURL=transf.schema.js.map