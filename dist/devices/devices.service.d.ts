import { Model } from 'mongoose';
import { Device } from '../devices/interfaces/device.interface';
import { DeviceDTO } from './dto/device.dto';
export declare class DevicesService {
    private readonly DeviceModel;
    constructor(DeviceModel: Model<Device>);
    create(DeviceDTO: DeviceDTO): Promise<any>;
}
