"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberSchema = void 0;
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
exports.MemberSchema = new mongoose.Schema({
    id: Number,
    code: String,
    name: String,
    birdhtday: String,
    reference1: String,
    reference2: String,
    reference3: String,
    reference4: String,
    email: String,
    phone: String,
    talents: Number,
    occupation: String,
    score: Number,
    question: String,
    codechain: String,
    sponsor1: Number,
    sponsor2: Number,
}, {
    versionKey: false
});
//# sourceMappingURL=member.schema.js.map