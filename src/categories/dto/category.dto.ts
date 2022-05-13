// import { ApiProperty } from '@nestjs/swagger';
export class CategoryDTO {
  _id: string;
  readonly code: string;
  readonly name: string;
  readonly details: string;
  readonly image: string;
  readonly status: Boolean;
}
