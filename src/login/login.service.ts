import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Login } from './interfaces/login.interface';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class LoginService {
    constructor(@InjectModel('Login') private readonly LoginModel: Model<Login>){}


    async create(LoginDTO: LoginDTO): Promise<any> {
        const created = new this.LoginModel(LoginDTO);
        return created.save();
    }
}
