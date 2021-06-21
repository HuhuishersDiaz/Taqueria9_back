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

@Module({
  imports: [AuthModule, UsersModule,ProductsModule,
  MongooseModule.forRoot("mongodb://localhost:27017/enginedb"),
  DevicesModule,
  MembersModule,
  TalentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
