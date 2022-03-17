import { CategoriesService } from './categories.service';
import { CategoryDTO } from './dto/category.dto';
export declare class CategoriesController {
    private category;
    constructor(category: CategoriesService);
    addCategory(res: any, CategoryDTO: CategoryDTO): Promise<any>;
    GetCategory(res: any, code: string): Promise<any>;
    GetAll(res: any): Promise<any>;
}
