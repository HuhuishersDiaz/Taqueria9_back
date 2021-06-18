"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceSchema = void 0;
const mongoose = require("mongoose");
exports.DeviceSchema = new mongoose.Schema({
    device: String,
    placa: String,
    imei: String,
    empresa: String,
    proveedor: String,
    idempresa: String,
    serievin: String,
    economico: String,
    url: String,
    latitude: String,
    longitude: String,
    createdAt: Date,
    hora: String,
    velocidad: String,
    senal: String,
    orientacion: String,
    estado: String,
    boton: Boolean,
    odometrokm: String
}, {
    versionKey: false
});
//# sourceMappingURL=device.schema.js.map