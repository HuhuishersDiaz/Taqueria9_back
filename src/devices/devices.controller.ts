import { Controller, HttpStatus, Post, Res, Body } from '@nestjs/common';
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

}
