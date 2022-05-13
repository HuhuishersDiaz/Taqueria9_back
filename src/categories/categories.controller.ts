import {
  Controller,
  Post,
  Body,
  Query,
  Param,
  Put,
  NotFoundException,
  Get,
  Res,
  HttpStatus,
  UseGuards,
} from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategoryDTO } from "./dto/category.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { AuthGuard } from "@nestjs/passport";

@Controller("categories")
export class CategoriesController {
  constructor(private category: CategoriesService) {}

  // categories create a new record
  @Post("/create")
  async addCategory(@Res() res, @Body() CategoryDTO: CategoryDTO) {
    delete CategoryDTO._id;
    console.log(CategoryDTO.status);
    const existsCode = await this.category.getCategory(CategoryDTO.code);

    console.error(existsCode.length);
    if (existsCode.length > 0) {
      return res.status(HttpStatus.OK).json({
        OK: false,
        message: "Code already exits",
      });
    }
    const categories = await this.category.create(CategoryDTO);
    return res.status(HttpStatus.OK).json({
      OK: true,
      message: "Post category has been created",
      categories,
    });
  }
  // get category by code
  @Get("/category/:code")
  async GetCategory(@Res() res, @Param("code") code: string) {
    const category = await this.category.getCategory(code);
    if (!category) throw new NotFoundException("Category not found!!!.");
    return res.status(HttpStatus.OK).json(category);
  }
  // this line for authenticate
  //@UseGuards(JwtAuthGuard)
  @Get("all")
  async GetAll(@Res() res) {
    const categories = await this.category.getAll();
    return res.status(HttpStatus.OK).json(categories);
  }
  // update info
  @Post("/update")
  async updateCategory(@Res() res, @Body() CategoryDTO: CategoryDTO) {
    console.log(CategoryDTO);
    let data = await this.category.updateCategory(CategoryDTO);
    console.log(data);
    return res.status(HttpStatus.OK).json({ OK: true });
  }

  // update image
}
