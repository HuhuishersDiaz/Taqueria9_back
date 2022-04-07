import { Document } from 'mongoose';
export interface Token extends Document {
    readonly token: string;
    readonly message: string;
    readonly status: string;
}
