import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Device } from '../devices/interfaces/device.interface';
import { DeviceDTO } from './dto/device.dto';

@Injectable()
export class DevicesService {
    constructor(@InjectModel('Device') private readonly DeviceModel: Model<Device>){}
    async create(DeviceDTO: DeviceDTO): Promise<any> {
        const createdDevice = new this.DeviceModel(DeviceDTO);
        return createdDevice.save();
    }
    async getAll(): Promise<any>{
        return await this.DeviceModel.find();
    }
}
