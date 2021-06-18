import { DevicesService } from './devices.service';
import { DeviceDTO } from './dto/device.dto';
export declare class DevicesController {
    private device;
    constructor(device: DevicesService);
    addDevice(res: any, DeviceDTO: DeviceDTO): Promise<any>;
    UpdateDevice(res: any, DeviceDTO: DeviceDTO, device: any): Promise<any>;
    GetAll(res: any): Promise<any>;
    GetByStatus(res: any, boton: boolean): Promise<any>;
    GetDevice(res: any, deviceId: string): Promise<any>;
    SendDevices(res: any, deviceDTO: DeviceDTO): Promise<any>;
}
