import { Document } from "mongoose";
export interface Transf extends Document {
    readonly socio: string;
    readonly talents: number;
    readonly receiver: string;
    readonly score: number;
    readonly percent: number;
    readonly created_at: Date;
}
