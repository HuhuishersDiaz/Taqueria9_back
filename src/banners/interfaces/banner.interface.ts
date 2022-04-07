import { Document } from 'mongoose';
export interface Banner extends Document{
    readonly code:string;
    readonly name:string;
    readonly details:string;
    readonly image:string;
}