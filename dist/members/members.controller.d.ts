import { MembersService } from './members.service';
import { MemberDTO } from './dto/member.dto';
export declare class MembersController {
    private member;
    constructor(member: MembersService);
    addMember(res: any, MemberDTO: MemberDTO): Promise<any>;
    GetAll(res: any): Promise<any>;
    GetMember(Res: any, cellphone: string): Promise<any>;
}
