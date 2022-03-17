import { Model } from 'mongoose';
import { Category } from '../categories/interfaces/category.interface';
import { CategoryDTO } from './dto/category.dto';
export declare class CategoriesService {
    private readonly CategoryModel;
    constructor(CategoryModel: Model<Category>);
    getAll(): Promise<any>;
    getCategory(cat: string): Promise<any>;
    create(CategoryDTO: CategoryDTO): Promise<any>;
}
