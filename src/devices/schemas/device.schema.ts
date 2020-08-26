import * as mongoose from 'mongoose';

export const DeviceSchema = new mongoose.Schema(
    {
        device:String,
        latitude:String,
        longitude:String,
        createAt: Date,
    },
    {
        versionKey:false
    });