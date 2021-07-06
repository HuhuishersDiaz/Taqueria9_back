import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MailService } from 'src/mail/mail.service';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { MemberSchema } from './schemas/member.schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name:'Member',
    schema:MemberSchema
  }])],
  controllers: [MembersController],
  providers: [MembersService, MailService]
})
export class MembersModule {}
