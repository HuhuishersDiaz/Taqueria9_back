
import * as mongoose from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);
//mongoose.set('useFindAndModify', false);
export const MemberSchema = new mongoose.Schema({
    _id:Number,
    name:String,
    //address: String,
    birdhtday:String,
    reference1:String,
    reference2:String,
    reference3:String,
    reference4:String,
    email: String,
    phone: String,
    talents:Number,
    occupation:String,
    score:Number,
    question:String
},
{   
    versionKey:false
});

//MemberSchema.plugin( AutoIncrement, {inc_field: 'id'});
