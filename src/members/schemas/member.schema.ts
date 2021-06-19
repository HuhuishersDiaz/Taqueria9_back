import * as mongoose from 'mongoose';

export const MemberSchema = new mongoose.Schema({
    name:String,
    address: String,
    reference1:String,
    reference2:String,
    reference3:String,
    email: String,
    phone: String,
},
{
    versionKey:false
});