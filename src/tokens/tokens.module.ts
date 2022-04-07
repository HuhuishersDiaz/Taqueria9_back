import { Module } from '@nestjs/common';
import { TokensController } from './tokens.controller';
import { TokensService } from './tokens.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenSchema } from './schemas/token.schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:'Token',
    schema:TokenSchema
  }])],
  controllers: [TokensController],
  providers: [TokensService]
})
export class TokensModule {}
