import * as mongoose from 'mongoose';

export const BannerSchema = new mongoose.Schema({
   code:String,
   name:String,
   details:String,
   image:String,
},
   {timestamps:true});