import { Document } from 'mongoose';
export interface Push extends Document {
    readonly token: string;
    readonly message: string;
    readonly status: string;
}
