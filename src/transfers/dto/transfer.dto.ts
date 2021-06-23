//import { ApiProperty } from '@nestjs/swagger';
export class TransferDTO {
    readonly emisor:string;
    readonly talent_e: number;
    readonly receptor:string;
    readonly talent_r:number;
    
}