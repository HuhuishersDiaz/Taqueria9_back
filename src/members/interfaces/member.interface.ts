import { Document } from "mongoose";
export interface Member extends Document {
    readonly id:number;
    readonly name:string;
    readonly address:string;
    readonly reference1:string;
    readonly reference2:string;
    readonly reference3:string;
    readonly email:string;
    readonly phone:string;
    readonly talents: number;
    readonly occupation:string;
    readonly score:number;
    readonly question:string;
    readonly codechain:string;
    readonly sponsor1:number;
    readonly sponsor2:number;
    // integrate createAt this date that member register
}