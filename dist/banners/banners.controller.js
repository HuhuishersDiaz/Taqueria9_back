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
exports.BannersController = void 0;
const common_1 = require("@nestjs/common");
const banners_service_1 = require("./banners.service");
const banner_dto_1 = require("./dto/banner.dto");
let BannersController = class BannersController {
    constructor(banner) {
        this.banner = banner;
    }
    async addBanner(res, BannerDTO) {
        const banners = await this.banner.create(BannerDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Post banner has been created",
            banners
        });
    }
    async GetAll(res) {
        const banners = await this.banner.getAll();
        console.log(banners);
        return res.status(common_1.HttpStatus.OK).json(banners);
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, banner_dto_1.BannerDTO]),
    __metadata("design:returntype", Promise)
], BannersController.prototype, "addBanner", null);
__decorate([
    common_1.Get('all'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BannersController.prototype, "GetAll", null);
BannersController = __decorate([
    common_1.Controller('banners'),
    __metadata("design:paramtypes", [banners_service_1.BannersService])
], BannersController);
exports.BannersController = BannersController;
//# sourceMappingURL=banners.controller.js.map