import { Document } from 'mongoose';
export interface Product extends Document {
    readonly code: string;
    readonly name: string;
    readonly details: string;
    readonly image: string;
    readonly price: string;
    readonly createdAt: Date;
}
