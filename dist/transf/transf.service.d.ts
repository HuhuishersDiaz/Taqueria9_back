import { Model } from 'mongoose';
import { Transf } from '../transf/interfaces/transf.interface';
import { TransfDTO } from './dto/transf.dto';
export declare class TransfService {
    private readonly TransfModel;
    constructor(TransfModel: Model<Transf>);
    create(TransfDTO: TransfDTO): Promise<any>;
    getInfo(id: number): Promise<any>;
}
