//import { ApiProperty } from '@nestjs/swagger';
export class ProductDTO {
    readonly code:string;
    readonly name: string;
    readonly details:string;
    readonly image:string;
    readonly price:string;
    readonly createdAt: Date;
}