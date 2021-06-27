import { TransferDTO } from './dto/transfer.dto';
import { TransfersService } from './transfers.service';
export declare class TransfersController {
    private transfer;
    constructor(transfer: TransfersService);
    addMember(res: any, TransferDTO: TransferDTO): Promise<any>;
    GetAll(res: any): Promise<any>;
    GetTransfers(Res: any, id: number): Promise<any>;
}
