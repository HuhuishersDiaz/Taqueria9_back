import { Model } from 'mongoose';
import { Token } from '../tokens/interfaces/token.interface';
import { TokenDTO } from './dto/token.dto';
export declare class TokensService {
    private readonly TokenModel;
    constructor(TokenModel: Model<Token>);
    getAll(): Promise<any>;
    create(TokenDTO: TokenDTO): Promise<any>;
}
