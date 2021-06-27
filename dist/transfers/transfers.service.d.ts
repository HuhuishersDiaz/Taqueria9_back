import { Model } from 'mongoose';
import { TransferDTO } from './dto/transfer.dto';
import { Transfer } from './interfaces/transfer.interface';
export declare class TransfersService {
    private readonly TransferModel;
    constructor(TransferModel: Model<Transfer>);
    create(TransferDTO: TransferDTO): Promise<any>;
    getAll(): Promise<any>;
    getTransfersInfo(socio: number): Promise<any>;
}
