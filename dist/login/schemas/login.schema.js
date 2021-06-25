"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = void 0;
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
exports.LoginSchema = new mongoose.Schema({
    email: String,
    passw: String,
}, {
    versionKey: false
});
//# sourceMappingURL=login.schema.js.map