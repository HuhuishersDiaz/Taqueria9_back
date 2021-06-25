import { Model } from 'mongoose';
import { Login } from './interfaces/login.interface';
import { LoginDTO } from './dto/login.dto';
export declare class LoginService {
    private readonly LoginModel;
    constructor(LoginModel: Model<Login>);
    create(LoginDTO: LoginDTO): Promise<any>;
}
