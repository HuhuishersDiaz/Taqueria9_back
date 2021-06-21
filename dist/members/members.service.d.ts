import { Model } from 'mongoose';
import { Member } from '../members/interfaces/member.interface';
import { MemberDTO } from './dto/member.dto';
export declare class MembersService {
    private readonly MemberModel;
    constructor(MemberModel: Model<Member>);
    create(MemberDTO: MemberDTO): Promise<any>;
    getAll(): Promise<any>;
    getMember(mem: string): Promise<any>;
}
