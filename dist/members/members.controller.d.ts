import { MembersService } from './members.service';
import { MemberDTO } from './dto/member.dto';
import { MailService } from 'src/mail/mail.service';
export declare class MembersController {
    private member;
    private mailService;
    constructor(member: MembersService, mailService: MailService);
    addMember(res: any, MemberDTO: MemberDTO): Promise<any>;
    TransferTalents(res: any, id: string, memberData: MemberDTO): Promise<any>;
    GetSecuence(res: any): Promise<any>;
    GetLast(res: any): Promise<any>;
    GetAll(res: any): Promise<any>;
    GetMember(Res: any, cellphone: string): Promise<any>;
    GetMemberInfo(Res: any, code: string): Promise<any>;
}
