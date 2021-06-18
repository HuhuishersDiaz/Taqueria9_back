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
exports.DevicesController = void 0;
const common_1 = require("@nestjs/common");
const devices_service_1 = require("./devices.service");
const device_dto_1 = require("./dto/device.dto");
let DevicesController = class DevicesController {
    constructor(device) {
        this.device = device;
    }
    async addDevice(res, DeviceDTO) {
        const lists = await this.device.create(DeviceDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Post has been created successfully",
            lists
        });
    }
    async UpdateDevice(res, DeviceDTO, device) {
        const updateDevice = await this.device.updateDevice(device, DeviceDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Update successfull.",
            updateDevice
        });
    }
    async GetAll(res) {
        const devices = await this.device.getAll();
        console.log(devices);
        return res.status(common_1.HttpStatus.OK).json(devices);
    }
    async GetByStatus(res, boton) {
        const devices = await this.device.getByStatus(boton);
        return res.status(common_1.HttpStatus.OK).json(devices);
    }
    async GetDevice(res, deviceId) {
        const device = await this.device.getDevice(deviceId);
        if (!device)
            throw new common_1.NotFoundException("Device not found !!!.");
        return res.status(common_1.HttpStatus.OK).json(device);
    }
    async SendDevices(res, deviceDTO) {
        const devs = await this.device.create(deviceDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Post has been created successfully",
            devs
        });
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, device_dto_1.DeviceDTO]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "addDevice", null);
__decorate([
    common_1.Put('/update'),
    __param(0, common_1.Res()), __param(1, common_1.Body()), __param(2, common_1.Query('device')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, device_dto_1.DeviceDTO, Object]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "UpdateDevice", null);
__decorate([
    common_1.Get('all'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "GetAll", null);
__decorate([
    common_1.Get(':boton'),
    __param(0, common_1.Res()), __param(1, common_1.Param('boton')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "GetByStatus", null);
__decorate([
    common_1.Get('/device/:deviceID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('deviceID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "GetDevice", null);
__decorate([
    common_1.Post('/send'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, device_dto_1.DeviceDTO]),
    __metadata("design:returntype", Promise)
], DevicesController.prototype, "SendDevices", null);
DevicesController = __decorate([
    common_1.Controller('devices'),
    __metadata("design:paramtypes", [devices_service_1.DevicesService])
], DevicesController);
exports.DevicesController = DevicesController;
//# sourceMappingURL=devices.controller.js.map