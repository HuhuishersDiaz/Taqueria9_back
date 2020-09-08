import { Document } from 'mongoose';
export interface Device extends Document {
    readonly device: string;
    readonly latitude: string;
    readonly longitud: string;
    readonly createAt: Date;
}
