import { LoginService } from './login.service';
import { LoginDTO } from './dto/login.dto';
export declare class LoginController {
    private member;
    constructor(member: LoginService);
    addLogin(res: any, LoginDTO: LoginDTO): Promise<any>;
}
