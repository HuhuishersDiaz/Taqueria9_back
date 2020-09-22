import { Controller, HttpStatus, Post, Res, Body, Get, Query, Param, NotFoundException } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DeviceDTO } from './dto/device.dto';
/* import jwtauthguard authguard */

@Controller('devices')
export class DevicesController {
    constructor(private device:DevicesService){}

    @Post('/create')
    async addDevice(@Res() res, @Body() DeviceDTO: DeviceDTO){
        const lists = await this.device.create(DeviceDTO);
        return res.status(HttpStatus.OK).json({
            message: "Post has been created successfully",
            lists
        });
    }

    @Get('all')
    async GetAll(@Res() res){
        const devices = await this.device.getAll();
        // LOAD ALL PRODUCTS & SHOW RESULT IN DIALOG TERMINAL
        console.log(devices);
        return res.status(HttpStatus.OK).json(devices);
    }

    @Get(':boton')
    async GetByStatus(@Res() res, @Param('boton') boton:boolean){
        const devices = await this.device.getByStatus(boton);
        return res.status(HttpStatus.OK).json(devices);
    }

    @Get('/:deviceID')
    async GetDevice(@Res() res, @Param('deviceID') deviceId) {
        const device = await this.device.getDevice(deviceId);
        if(!device) throw new NotFoundException("Device not found !!!.");
        return res.status(HttpStatus.OK).json(device);
    }

    @Post('/send')
    async SendDevices(@Res() res, @Body() deviceDTO:DeviceDTO){
        const devs = await this.device.create(deviceDTO);
        return res.status(HttpStatus.OK).json({
            message: "Post has been created successfully",
            devs
        });
    }


}
