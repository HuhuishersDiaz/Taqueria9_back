import { BannersService } from "./banners.service";
import { BannerDTO } from "./dto/banner.dto";
export declare class BannersController {
    private banner;
    constructor(banner: BannersService);
    addBanner(res: any, BannerDTO: BannerDTO): Promise<any>;
    GetAll(res: any): Promise<any>;
}
