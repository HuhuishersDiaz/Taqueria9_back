import { Document } from "mongoose";
export interface Member extends Document {
    readonly _id:string;
    readonly name:string;
    readonly address:string;
    readonly reference1:string;
    readonly reference2:string;
    readonly reference3:string;
    readonly email:string;
    readonly phone:string;
    readonly talents: number;
    readonly occupation:string;
    // integrate createAt this date that member register
}