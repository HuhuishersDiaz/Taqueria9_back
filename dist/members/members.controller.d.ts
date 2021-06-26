import { MembersService } from './members.service';
import { MemberDTO } from './dto/member.dto';
export declare class MembersController {
    private member;
    constructor(member: MembersService);
    addMember(res: any, MemberDTO: MemberDTO): Promise<any>;
    TransferTalents(res: any, id: Number, memberData: MemberDTO): Promise<any>;
    GetSecuence(res: any): Promise<any>;
    GetLast(res: any): Promise<any>;
    GetAll(res: any): Promise<any>;
    GetMember(Res: any, cellphone: string): Promise<any>;
    GetMemberInfo(Res: any, id: number): Promise<any>;
}
