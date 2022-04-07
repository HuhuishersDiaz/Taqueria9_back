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
exports.TokensController = void 0;
const common_1 = require("@nestjs/common");
const tokens_service_1 = require("./tokens.service");
const token_dto_1 = require("./dto/token.dto");
let TokensController = class TokensController {
    constructor(token) {
        this.token = token;
    }
    async addCategory(res, TokenDTO) {
        const tokens = await this.token.create(TokenDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Token record has been created",
            tokens
        });
    }
    async GetAll(res) {
        const tokens = await this.token.getAll();
        console.log(tokens);
        return res.status(common_1.HttpStatus.OK).json(tokens);
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, token_dto_1.TokenDTO]),
    __metadata("design:returntype", Promise)
], TokensController.prototype, "addCategory", null);
__decorate([
    common_1.Get('all'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TokensController.prototype, "GetAll", null);
TokensController = __decorate([
    common_1.Controller('tokens'),
    __metadata("design:paramtypes", [tokens_service_1.TokensService])
], TokensController);
exports.TokensController = TokensController;
//# sourceMappingURL=tokens.controller.js.map