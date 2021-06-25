import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDTO } from './dto/login.dto';

@Controller('login')
export class LoginController {
    constructor(private member:LoginService){}

    @Post('/create')
    async addLogin(@Res() res, @Body() LoginDTO: LoginDTO){
        const lists = await this.member.create(LoginDTO);
        return res.status(HttpStatus.OK).json({
            
            message: "Post has been created successfully",
            lists
        });
    }
}
