import { Module } from '@nestjs/common';
import { TalentsController } from './talents/talents.controller';
import { TalentsService } from './talents/talents.service';

@Module({
  controllers: [TalentsController],
  providers: [TalentsService]
})
export class TalentsModule {}
