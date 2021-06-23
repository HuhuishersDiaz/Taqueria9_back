import * as mongoose from 'mongoose';

export const TransferSchema = new mongoose.Schema({
    emisor:String,
    talent_e: Number,
    receptor:String,
    talent_r:Number
},
{
    versionKey:false
});