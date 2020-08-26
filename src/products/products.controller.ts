import { Controller, Get, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDTO } from './dto/product.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
export class ProductsController {
    constructor(private service:ProductsService){}

    @UseGuards(JwtAuthGuard) // THIS LINE FOR AUTHENTICATION ONLY FOR VIEW ENDPOINT
    @Get('all')
    async GetAll(@Res() res){
        const products = await this.service.getAll();
        // LOAD ALL PRODUCTS & SHOW RESULT IN DIALOG TERMINAL
        console.log(products);
        return res.status(HttpStatus.OK).json(products);
    }
}
