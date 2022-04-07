import { Module } from '@nestjs/common';
import { BannersController } from './banners.controller';
import { BannersService } from './banners.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BannerSchema } from './schemas/banner.schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:'Banner',
    schema:BannerSchema
  }])],
  controllers: [BannersController],
  providers: [BannersService]
})
export class BannersModule {}
