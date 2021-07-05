//import { ApiProperty } from '@nest/swagger';
export class MemberDTO {
    readonly id:number;
    readonly code:string;
    readonly name:string;
    readonly address:string;
    readonly reference1:string;
    readonly reference2:string;
    readonly reference3:string;
    readonly email:string;
    readonly phone:string;
    readonly talents: number;
    readonly occupation:string;
    readonly score:number;
    readonly question:string;
    readonly codechain:string;
    readonly sponsor1:number;
    readonly sponsor2:number;
}