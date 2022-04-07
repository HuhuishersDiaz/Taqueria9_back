// import { ApiProperty } from '@nestjs/swagger';
export class TokenDTO {
    readonly token:string;
    readonly message:string;
    readonly status:string;
}