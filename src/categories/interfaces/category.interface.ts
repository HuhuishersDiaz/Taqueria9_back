import { Document } from "mongoose";
export interface Category extends Document {
  readonly code: string;
  readonly name: string;
  readonly details: string;
  readonly image: string;
  readonly status: Boolean;
}
