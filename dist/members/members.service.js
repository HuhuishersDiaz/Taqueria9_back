"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let MembersService = class MembersService {
    constructor(MemberModel) {
        this.MemberModel = MemberModel;
    }
    async create(MemberDTO) {
        const createdMember = new this.MemberModel(MemberDTO);
        return createdMember.save();
    }
    async getSequenceNextValue() {
        const secDoc = this.MemberModel.findOne({ id: 1 });
        return secDoc;
    }
    async transferTalents(id, member) {
        const updateTalents = await this.MemberModel.updateOne({ code: id }, member, { new: true });
        return updateTalents;
    }
    async getLast() {
        return await this.MemberModel.find({}).sort({ id: -1 }).limit(1);
    }
    async getAll() {
        return await this.MemberModel.find();
    }
    async getMember(mem) {
        return await this.MemberModel.find({ phone: mem }).exec();
    }
    async getMemberInfo(receiver) {
        return await this.MemberModel.find({ code: receiver }).exec();
    }
};
MembersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Member')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], MembersService);
exports.MembersService = MembersService;
//# sourceMappingURL=members.service.js.map