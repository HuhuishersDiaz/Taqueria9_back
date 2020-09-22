import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Device } from '../devices/interfaces/device.interface';
import { DeviceDTO } from './dto/device.dto';
import { ProductDTO } from 'src/products/dto/product.dto';

@Injectable()
export class DevicesService {
    constructor(@InjectModel('Device') private readonly DeviceModel: Model<Device>){}

    async create(DeviceDTO: DeviceDTO): Promise<any> {
        const createdDevice = new this.DeviceModel(DeviceDTO);
        return createdDevice.save();
    }

    async send(DeviceDTO: DeviceDTO): Promise<any> {
       // const filter = {device:DeviceDTO.device};
        const sendDevice = new this.DeviceModel(DeviceDTO);
       // const response = await this.DeviceModel.findOneAndUpdate(filter,sendDevice,{new:true});
        return sendDevice.save();

    }
    async getAll(): Promise<any>{
        return await this.DeviceModel.find();
    }
    async getDevice(devi:string): Promise<DeviceDTO>{
        return await this.DeviceModel.findOne({device:devi});
    }
    async getByStatus(boton:boolean): Promise<any> {
        return await this.DeviceModel.find({boton: boton}).exec();
    }
}
