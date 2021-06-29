import { Document } from "mongoose";
export interface Transf extends Document {
    readonly socio:number;
    readonly talents:number;
    readonly receiver:number;
    readonly score:number;
    readonly percent:number;
    readonly created_at:Date;
    // integrate createAt this date that member register
}