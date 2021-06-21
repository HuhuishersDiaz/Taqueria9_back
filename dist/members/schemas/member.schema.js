"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberSchema = void 0;
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
exports.MemberSchema = new mongoose.Schema({
    name: String,
    address: String,
    reference1: String,
    reference2: String,
    reference3: String,
    email: String,
    phone: String,
    talents: Number,
    occupation: String,
}, {
    versionKey: false
});
exports.MemberSchema.plugin(AutoIncrement, { inc_field: 'id' });
//# sourceMappingURL=member.schema.js.map