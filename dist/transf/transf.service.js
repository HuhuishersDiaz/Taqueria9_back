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
exports.TransfService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let TransfService = class TransfService {
    constructor(TransfModel) {
        this.TransfModel = TransfModel;
    }
    async create(TransfDTO) {
        const createdTransfer = new this.TransfModel(TransfDTO);
        return createdTransfer.save();
    }
    async getInfo(code) {
        return await this.TransfModel.find({ receiver: code }).exec();
    }
};
TransfService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Transf')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TransfService);
exports.TransfService = TransfService;
//# sourceMappingURL=transf.service.js.map