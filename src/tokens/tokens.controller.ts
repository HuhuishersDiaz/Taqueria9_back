import { Controller, Post,Body,Query,Param,Put, NotFoundException,
Get, Res, HttpStatus, UseGuards} from '@nestjs/common';
import { TokensService } from './tokens.service';
import { TokenDTO } from './dto/token.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';


@Controller('tokens')
export class TokensController {
    constructor(private token:TokensService){}
    
    // create token record
    @Post('/create')
    async addCategory(@Res() res, @Body() TokenDTO: TokenDTO){
        const tokens = await this.token.create(TokenDTO);
        return res.status(HttpStatus.OK).json({
            message: "Token record has been created",
            tokens
        });
    }
    // this line is for authenticate
    //@UseGuards(JwtAuthGuard)
    // get all tokens
    @Get('all')
    async GetAll(@Res() res){
        const tokens = await this.token.getAll();
        console.log(tokens);
        return res.status(HttpStatus.OK).json(tokens);
    }
}
