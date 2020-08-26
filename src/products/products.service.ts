import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product} from '../products/interfaces/product.interface';
import { ProductDTO } from './dto/product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly product: Model<Product>){}

    async getAll(): Promise<any>{
        return await this.product.find();
    }
}
