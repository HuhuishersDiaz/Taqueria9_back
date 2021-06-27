import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransfSchema } from './schemas/transf.schema';
import { TransfController } from './transf.controller';
import { TransfService } from './transf.service';

@Module({
  imports:[MongooseModule.forFeature([{
    name:'Transf',
    schema:TransfSchema
  }])],
  controllers: [TransfController],
  providers: [TransfService]
})
export class TransfModule {}
