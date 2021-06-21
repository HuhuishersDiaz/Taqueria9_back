
import * as mongoose from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);
//mongoose.set('useFindAndModify', false);
export const MemberSchema = new mongoose.Schema({
    id:String,
    name:String,
    address: String,
    reference1:String,
    reference2:String,
    reference3:String,
    email: String,
    phone: String,
    talents:Number,
    occupation:String,
},
{   
    versionKey:false
});

//MemberSchema.plugin( AutoIncrement, {inc_field: 'id'});
