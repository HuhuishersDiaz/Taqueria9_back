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
exports.TransfController = void 0;
const common_1 = require("@nestjs/common");
const transf_service_1 = require("./transf.service");
const transf_dto_1 = require("./dto/transf.dto");
let TransfController = class TransfController {
    constructor(transfer) {
        this.transfer = transfer;
    }
    async addTransfer(res, TransfDTO) {
        const lists = await this.transfer.create(TransfDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Post has been created successfully",
            lists
        });
    }
    async GetTransferInfo(Res, id) {
        const transfer = await this.transfer.getInfo(id);
        if (!transfer)
            throw new common_1.NotFoundException('Transfer info not found !!!.');
        return Res.status(common_1.HttpStatus.OK).json(transfer);
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, transf_dto_1.TransfDTO]),
    __metadata("design:returntype", Promise)
], TransfController.prototype, "addTransfer", null);
__decorate([
    common_1.Get('/info/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TransfController.prototype, "GetTransferInfo", null);
TransfController = __decorate([
    common_1.Controller('transf'),
    __metadata("design:paramtypes", [transf_service_1.TransfService])
], TransfController);
exports.TransfController = TransfController;
//# sourceMappingURL=transf.controller.js.map