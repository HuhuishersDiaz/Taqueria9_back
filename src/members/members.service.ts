import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Member} from '../members/interfaces/member.interface';
import { MemberDTO } from './dto/member.dto';

@Injectable()
export class MembersService {
    
    constructor(@InjectModel('Member') private readonly MemberModel: Model<Member>){}


    async create(MemberDTO: MemberDTO): Promise<any> {
        const createdMember = new this.MemberModel(MemberDTO);
        return createdMember.save();
    }

    async getSequenceNextValue(): Promise<any>{
         return await this.MemberModel.findOneAndUpdate({id: 'itemId'},{ $inc: {seqName:1}});
    }

    async getAll(): Promise<any>{
        return await this.MemberModel.find();
    }

    async getMember(mem:string): Promise<any>{
        return await this.MemberModel.find({phone:mem}).exec();
    }

}
