
import * as mongoose from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);
//mongoose.set('useFindAndModify', false);
export const LoginSchema = new mongoose.Schema({
  
    email: String,
    passw: String,
},
{   
    versionKey:false
});

//MemberSchema.plugin( AutoIncrement, {inc_field: 'id'});
