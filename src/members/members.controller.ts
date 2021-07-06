import { Body, Res, Controller, HttpStatus, Post, Query, Param, Get, NotFoundException, Put } from '@nestjs/common';
import { MembersService } from './members.service';
import { MemberDTO } from './dto/member.dto';
import { MailService } from 'src/mail/mail.service';
import { Console } from 'console';

@Controller('members')
export class MembersController {
    constructor(private member:MembersService, private mailService:MailService){}

    @Post('/create')
    async addMember(@Res() res, @Body() MemberDTO: MemberDTO){
        const lists = await this.member.create(MemberDTO);
        return res.status(HttpStatus.OK).json({
            message: "Post has been created successfully",
            lists
        });
    }
    @Put('/transfer/:id')
    async TransferTalents(@Res() res, @Param('id') id:string, @Body() memberData: MemberDTO) {
      //  memberData._id = Number(id);
        const trans = await this.member.transferTalents(id,memberData);
        if(!trans) throw new NotFoundException("Not Found !!!.");
        return res.status(HttpStatus.OK).json({message:'Update Talents',trans});
    }
    
    @Get('sec')
    async GetSecuence(@Res() res){
        const secuence = await this.member.getSequenceNextValue();
        return res.status(HttpStatus.OK).json(secuence);
    }
    /*
    @Get('/set/:value')
    async setSecuence(@Res() Res, @Param('value') Value:number){
        const sec = await this.member.setSequence(Value);
        if(!sec) throw new NotFoundException("not found !!!.");
        return Res.status(HttpStatus.OK).json(sec);
    }*/
    @Get('last')
    async GetLast(@Res() res){
        const members = await this.member.getLast();
        return res.status(HttpStatus.OK).json(members);
    }

    @Get('all')
    async GetAll(@Res() res){
        const members = await this.member.getAll();
       const mail = await this.mailService.sendUserConfirmation();
       console.log(mail);
       
        return res.status(HttpStatus.OK).json(members);
    }
    @Get('/member/:phone')
    async GetMember(@Res() Res, @Param('phone') cellphone:string){
        const member = await this.member.getMember(cellphone);
        if(!member) throw new NotFoundException("Member not found !!!.");
        return Res.status(HttpStatus.OK).json(member);
    }
    @Get('/info/:id')
    async GetMemberInfo(@Res() Res, @Param('id') code:string){
        const member = await this.member.getMemberInfo(code);
        if(!member) throw new NotFoundException('Member info not found !!!.');
        return Res.status(HttpStatus.OK).json(member);
    }
    //@Put('')

}
