import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { LoginSchema } from './schemas/login.schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:'Login',
    schema:LoginSchema
  }])],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
