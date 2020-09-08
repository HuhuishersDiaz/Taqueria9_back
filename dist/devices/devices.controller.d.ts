import { DevicesService } from './devices.service';
import { DeviceDTO } from './dto/device.dto';
export declare class DevicesController {
    private device;
    constructor(device: DevicesService);
    addDevice(res: any, DeviceDTO: DeviceDTO): Promise<any>;
}
