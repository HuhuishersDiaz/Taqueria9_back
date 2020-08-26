import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    code:String,
    name: String,
    details:String,
    image:String,
    price:String,
    createdAt: Date,
},
{
    versionKey:false
});