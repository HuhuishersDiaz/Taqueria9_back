import { Model } from 'mongoose';
import { Product } from '../products/interfaces/product.interface';
export declare class ProductsService {
    private readonly product;
    constructor(product: Model<Product>);
    getAll(): Promise<any>;
}
