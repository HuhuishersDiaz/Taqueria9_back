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
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const categories_service_1 = require("./categories.service");
const category_dto_1 = require("./dto/category.dto");
let CategoriesController = class CategoriesController {
    constructor(category) {
        this.category = category;
    }
    async addCategory(res, CategoryDTO) {
        delete CategoryDTO._id;
        console.log(CategoryDTO.status);
        const existsCode = await this.category.getCategory(CategoryDTO.code);
        console.error(existsCode.length);
        if (existsCode.length > 0) {
            return res.status(common_1.HttpStatus.OK).json({
                OK: false,
                message: "Code already exits",
            });
        }
        const categories = await this.category.create(CategoryDTO);
        return res.status(common_1.HttpStatus.OK).json({
            OK: true,
            message: "Post category has been created",
            categories,
        });
    }
    async GetCategory(res, code) {
        const category = await this.category.getCategory(code);
        if (!category)
            throw new common_1.NotFoundException("Category not found!!!.");
        return res.status(common_1.HttpStatus.OK).json(category);
    }
    async GetAll(res) {
        const categories = await this.category.getAll();
        return res.status(common_1.HttpStatus.OK).json(categories);
    }
    async updateCategory(res, CategoryDTO) {
        console.log(CategoryDTO);
        let data = await this.category.updateCategory(CategoryDTO);
        console.log(data);
        return res.status(common_1.HttpStatus.OK).json({ OK: true });
    }
};
__decorate([
    common_1.Post("/create"),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, category_dto_1.CategoryDTO]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "addCategory", null);
__decorate([
    common_1.Get("/category/:code"),
    __param(0, common_1.Res()), __param(1, common_1.Param("code")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "GetCategory", null);
__decorate([
    common_1.Get("all"),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "GetAll", null);
__decorate([
    common_1.Post("/update"),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, category_dto_1.CategoryDTO]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "updateCategory", null);
CategoriesController = __decorate([
    common_1.Controller("categories"),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map