import { Model } from 'mongoose';
import { Banner } from '../banners/interfaces/banner.interface';
import { BannerDTO } from './dto/banner.dto';
export declare class BannersService {
    private readonly BannerModel;
    constructor(BannerModel: Model<Banner>);
    getAll(): Promise<any>;
    create(BannerDTO: BannerDTO): Promise<any>;
}
