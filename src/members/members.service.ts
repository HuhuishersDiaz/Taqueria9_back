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
         const secDoc = this.MemberModel.findOne({id: 1 });
         return secDoc;
    }

    async transferTalents(id:string ,member:MemberDTO): Promise<any>{
        const updateTalents = await this.MemberModel.updateOne({codechain:id},member,{ new:true});
        return updateTalents;
        
    } 

    /*
    async setSequence(value:number): Promise<any>{
        return await this.MemberModel.findOneAndUpdate({_id:'itemId'},{seqValue:value},{new: true});
    }*/

    async getLast(): Promise<any>{
        return await this.MemberModel.find({}).sort({id:-1}).limit(1);
    }

    async getAll(): Promise<any>{
        return await this.MemberModel.find();
    }

    async getMember(mem:string): Promise<any>{
        return await this.MemberModel.find({phone:mem}).exec();
    }

    async getMemberInfo(receiver:string):Promise<any>{
        return await this.MemberModel.find({ code:receiver}).exec();
    }

}
