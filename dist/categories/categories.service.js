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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CategoriesService = class CategoriesService {
    constructor(CategoryModel) {
        this.CategoryModel = CategoryModel;
    }
    async getAll() {
        return await this.CategoryModel.find();
    }
    async getCategory(cat) {
        return await this.CategoryModel.find({ code: cat }).exec();
    }
    async create(CategoryDTO) {
        const createdCategory = new this.CategoryModel(CategoryDTO);
        return createdCategory.save();
    }
    async updateCategory(CategoryDTO) {
        return await this.CategoryModel.updateOne({ _id: CategoryDTO._id }, CategoryDTO);
    }
};
CategoriesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel("Category")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map