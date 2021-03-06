import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { ProductSchema } from './products/schemas/product.schema';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { DevicesModule } from './devices/devices.module';
import { TalentsModule } from './talents/talents.module';
import { MembersModule } from './members/members.module';
import { LoginModule } from './login/login.module';
import { ServicesModule } from './services/services.module';
import { TransfModule } from './transf/transf.module';
import { MailModule } from './mail/mail.module';
import { CategoriesModule } from './categories/categories.module';
import { PhotosModule } from './photos/photos.module';
import { PushModule } from './push/push.module';
import { TokensModule } from './tokens/tokens.module';
import { BannersModule } from './banners/banners.module';



@Module({
  imports: [AuthModule, UsersModule,ProductsModule,
 // MongooseModule.forRoot("mongodb://ec2-3-142-95-26.us-east-2.compute.amazonaws.com:27017/cms",{useFindAndModify:false}),
  MongooseModule.forRoot("mongodb://localhost:27017/cms",{useFindAndModify:false}),
  DevicesModule,
  MembersModule,
  TalentsModule,
  LoginModule,
  ServicesModule,
  TransfModule,
  MailModule,
  CategoriesModule,
  PhotosModule,
  PushModule,
  TokensModule,
  BannersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
