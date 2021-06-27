import { Document } from 'mongoose';
export interface Transfer extends Document {
    readonly emisor: number;
    readonly receiver: number;
    readonly talents: number;
    readonly score: number;
    readonly created_at: Date;
}
