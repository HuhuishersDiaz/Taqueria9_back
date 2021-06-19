import { Body, Res, Controller, HttpStatus, Post, Query, Param } from '@nestjs/common';
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

}
