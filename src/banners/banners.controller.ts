import { Controller,Post,Body,Query, Param,Put, NotFoundException, 
Get, Res, HttpStatus, UseGuards} from '@nestjs/common';
import { BannersService } from './banners.service';
import { BannerDTO } from './dto/banner.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('banners')
export class BannersController {
    constructor(private banner:BannersService){}
    
    // banners create a new record
     @Post('/create')
    async addBanner(@Res() res, @Body() BannerDTO: BannerDTO){
        const banners = await this.banner.create(BannerDTO);
        return res.status(HttpStatus.OK).json({
            message: "Post banner has been created",
            banners
        });
    }
     // this line for authenticate
    //@UseGuards(JwtAuthGuard)
    @Get('all')
    async GetAll(@Res() res){
        const banners = await this.banner.getAll();
        console.log(banners);
        return res.status(HttpStatus.OK).json(banners);
    }
    
}
