import { Controller,Post,Body,Query, Param,Put, NotFoundException, 
Get, Res, HttpStatus, UseGuards} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDTO } from './dto/category.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';


@Controller('categories')


export class CategoriesController {
    constructor(private category:CategoriesService){}
    
    // categories create a new record
    @Post('/create')
    async addCategory(@Res() res, @Body() CategoryDTO: CategoryDTO){
        const categories = await this.category.create(CategoryDTO);
        return res.status(HttpStatus.OK).json({
            message: "Post category has been created",
            categories
        });
    }
    // get category by code
    @Get('/category/:code')
    async GetCategory(@Res() res, @Param('code') code:string){
        const category = await this.category.getCategory(code);
        if(!category) throw new NotFoundException("Category not found!!!.");
        return res.status(HttpStatus.OK).json(category);
    }
    // this line for authenticate
    //@UseGuards(JwtAuthGuard)
    @Get('all')
    async GetAll(@Res() res){
        const categories = await this.category.getAll();
        console.log(categories);
        return res.status(HttpStatus.OK).json(categories);
    }
}

