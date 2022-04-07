import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Banner } from '../banners/interfaces/banner.interface';
import { BannerDTO } from './dto/banner.dto';

@Injectable()
export class BannersService {
    // class constructor call on load
    constructor(@InjectModel('Banner') private readonly BannerModel: Model<Banner>){}
    
    // GET ALL BANNERS
    async getAll(): Promise<any>{
        return await this.BannerModel.find();
    }
    
      // CREATE NEW BANNER
    async create(BannerDTO: BannerDTO): Promise<any> {
        const createdBanner = new this.BannerModel(BannerDTO);
        return createdBanner.save();
    }
    
}
