"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberSchema = void 0;
const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
exports.MemberSchema = new mongoose.Schema({
    _id: Number,
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
    question: String
}, {
    versionKey: false
});
//# sourceMappingURL=member.schema.js.map