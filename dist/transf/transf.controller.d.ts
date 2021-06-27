import { TransfService } from './transf.service';
import { TransfDTO } from './dto/transf.dto';
export declare class TransfController {
    private transfer;
    constructor(transfer: TransfService);
    addTransfer(res: any, TransfDTO: TransfDTO): Promise<any>;
    GetTransferInfo(Res: any, id: number): Promise<any>;
}
