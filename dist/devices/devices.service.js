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
exports.DevicesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const product_dto_1 = require("../products/dto/product.dto");
let DevicesService = class DevicesService {
    constructor(DeviceModel) {
        this.DeviceModel = DeviceModel;
    }
    async create(DeviceDTO) {
        const createdDevice = new this.DeviceModel(DeviceDTO);
        return createdDevice.save();
    }
    async send(DeviceDTO) {
        const sendDevice = new this.DeviceModel(DeviceDTO);
        return sendDevice.save();
    }
    async getAll() {
        return await this.DeviceModel.find();
    }
    async getDevice(devi) {
        return await this.DeviceModel.find({ device: devi }).exec();
    }
    async getByStatus(boton) {
        return await this.DeviceModel.find({ boton: boton }).exec();
    }
    async updateDevice(device, createdDevice) {
        const updateDevice = await this.DeviceModel.findOneAndUpdate(device, createdDevice);
        return updateDevice;
    }
};
DevicesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Device')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], DevicesService);
exports.DevicesService = DevicesService;
//# sourceMappingURL=devices.service.js.map