import * as mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema(
  {
    code: String,
    name: String,
    details: String,
    image: String,
    status: Boolean,
  },
  { timestamps: true }
);
