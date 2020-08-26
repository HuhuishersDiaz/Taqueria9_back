import { ProductsService } from './products.service';
export declare class ProductsController {
    private service;
    constructor(service: ProductsService);
    GetAll(res: any): Promise<any>;
}
