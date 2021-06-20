import { Body, Res, Controller, HttpStatus, Post, Query, Param, Get, NotFoundException } from '@nestjs/common';
import { MembersService } from './members.service';
import { MemberDTO } from './dto/member.dto';
@Controller('members')
export class MembersController {
    constructor(private member:MembersService){}

    @Post('/create')
    async addMember(@Res() res, @Body() MemberDTO: MemberDTO){
        const lists = await this.member.create(MemberDTO);
        return res.status(HttpStatus.OK).json({
            message: "Post has been created successfully",
            lists
        });
    }
    @Get('all')
    async GetAll(@Res() res){
        const members = await this.member.getAll();
        return res.status(HttpStatus.OK).json(members);
    }
    @Get('/member/:phone')
    async GetMember(@Res() Res, @Param('phone') cellphone:string){
        const member = await this.member.getMember(cellphone);
        if(!member) throw new NotFoundException("Member not found !!!.");
        return Res.status(HttpStatus.OK).json(member);
    }

}
