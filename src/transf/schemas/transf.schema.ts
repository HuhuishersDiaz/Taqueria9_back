
import * as mongoose from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);
//mongoose.set('useFindAndModify', false);
export const TransfSchema = new mongoose.Schema({
    socio:String,
    talents:Number,
    receiver:Number,
    score:Number,
    percent:Number,
    created_at:{ type: Date, required: true, default: Date.now }
},
{   
    versionKey:false
});

//MemberSchema.plugin( AutoIncrement, {inc_field: 'id'});
