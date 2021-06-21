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
exports.MembersController = void 0;
const common_1 = require("@nestjs/common");
const members_service_1 = require("./members.service");
const member_dto_1 = require("./dto/member.dto");
let MembersController = class MembersController {
    constructor(member) {
        this.member = member;
    }
    async addMember(res, MemberDTO) {
        const lists = await this.member.create(MemberDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Post has been created successfully",
            lists
        });
    }
    async GetAll(res) {
        const members = await this.member.getAll();
        return res.status(common_1.HttpStatus.OK).json(members);
    }
    async GetMember(Res, cellphone) {
        const member = await this.member.getMember(cellphone);
        if (!member)
            throw new common_1.NotFoundException("Member not found !!!.");
        return Res.status(common_1.HttpStatus.OK).json(member);
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, member_dto_1.MemberDTO]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "addMember", null);
__decorate([
    common_1.Get('all'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "GetAll", null);
__decorate([
    common_1.Get('/member/:phone'),
    __param(0, common_1.Res()), __param(1, common_1.Param('phone')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "GetMember", null);
MembersController = __decorate([
    common_1.Controller('members'),
    __metadata("design:paramtypes", [members_service_1.MembersService])
], MembersController);
exports.MembersController = MembersController;
//# sourceMappingURL=members.controller.js.map