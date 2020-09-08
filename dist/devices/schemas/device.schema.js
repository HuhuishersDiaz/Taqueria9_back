"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceSchema = void 0;
const mongoose = require("mongoose");
exports.DeviceSchema = new mongoose.Schema({
    device: String,
    latitude: String,
    longitude: String,
    createAt: Date,
}, {
    versionKey: false
});
//# sourceMappingURL=device.schema.js.map