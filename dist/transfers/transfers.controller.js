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
exports.TransfersController = void 0;
const common_1 = require("@nestjs/common");
const transfer_dto_1 = require("./dto/transfer.dto");
const transfers_service_1 = require("./transfers.service");
let TransfersController = class TransfersController {
    constructor(transfer) {
        this.transfer = transfer;
    }
    async addMember(res, TransferDTO) {
        const lists = await this.transfer.create(TransferDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Post has been created successfully",
            lists
        });
    }
    async GetAll(res) {
        const trans = await this.transfer.getAll();
        return res.status(common_1.HttpStatus.OK).json(trans);
    }
    async GetTransfers(Res, id) {
        const trans = await this.transfer.getTransfersInfo(id);
        if (!trans)
            throw new common_1.NotFoundException('Transfer info not found !!!.');
        return Res.status(common_1.HttpStatus.OK).json(trans);
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, transfer_dto_1.TransferDTO]),
    __metadata("design:returntype", Promise)
], TransfersController.prototype, "addMember", null);
__decorate([
    common_1.Get('all'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransfersController.prototype, "GetAll", null);
__decorate([
    common_1.Get('/info/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], TransfersController.prototype, "GetTransfers", null);
TransfersController = __decorate([
    common_1.Controller('transfers'),
    __metadata("design:paramtypes", [transfers_service_1.TransfersService])
], TransfersController);
exports.TransfersController = TransfersController;
//# sourceMappingURL=transfers.controller.js.map