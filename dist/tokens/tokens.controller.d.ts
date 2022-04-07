import { TokensService } from './tokens.service';
import { TokenDTO } from './dto/token.dto';
export declare class TokensController {
    private token;
    constructor(token: TokensService);
    addCategory(res: any, TokenDTO: TokenDTO): Promise<any>;
    GetAll(res: any): Promise<any>;
}
