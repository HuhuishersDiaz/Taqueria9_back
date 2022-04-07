import * as mongoose from 'mongoose';

export const TokenSchema = new mongoose.Schema({
   token:String,
   message:String,
   status:String,
},
   {timestamps:true});