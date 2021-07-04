import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Transf } from '../transf/interfaces/transf.interface';
import { TransfDTO } from './dto/transf.dto';

@Injectable()
export class TransfService {

    constructor(@InjectModel('Transf') private readonly TransfModel: Model<Transf>){}


    async create(TransfDTO: TransfDTO): Promise<any> {
        const createdTransfer = new this.TransfModel(TransfDTO);
        return createdTransfer.save();
    }

    async getInfo(code:string):Promise<any>{
        return await this.TransfModel.find({ socio:code}).exec();
    }



}
