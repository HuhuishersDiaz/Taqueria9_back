import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Token } from '../tokens/interfaces/token.interface';
import { TokenDTO } from './dto/token.dto';


@Injectable()
export class TokensService {
    constructor(@InjectModel('Token') private readonly TokenModel: Model<Token>){}
    
    // get all tokens
    async getAll(): Promise<any>{
        return await this.TokenModel.find();
    }
    // store a new token
    async create(TokenDTO: TokenDTO): Promise<any> {
        const createToken = new this.TokenModel(TokenDTO);
        return createToken.save();
    }
}
