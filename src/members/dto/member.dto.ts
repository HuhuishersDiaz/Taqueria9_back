//import { ApiProperty } from '@nest/swagger';
export class MemberDTO {
    readonly _id:string;
    readonly name:string;
    readonly address:string;
    readonly reference1:string;
    readonly reference2:string;
    readonly reference3:string;
    readonly email:string;
    readonly phone:string;
    readonly talents: number;
    readonly occupation:string;
}