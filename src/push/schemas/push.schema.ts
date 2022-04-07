import * as mongoose from 'mongoose';

export const PushSchema = new mongoose.Schema({
   token:String,
   message:String,
   status:String,
},
   {timestamps:true});