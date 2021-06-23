import { Document } from 'mongoose';
export interface Transfer extends Document{
    readonly emisor:string;
    readonly talent_e: number;
    readonly receptor:string;
    readonly talent_r:number;
    
}