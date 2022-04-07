// import { ApiProperty } from '@nestjs/swagger';
export class PushDTO {
    readonly token:string;
    readonly message:string;
    readonly status:string;
}