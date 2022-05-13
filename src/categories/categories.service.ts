import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Category } from "../categories/interfaces/category.interface";
import { CategoryDTO } from "./dto/category.dto";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel("Category") private readonly CategoryModel: Model<Category>
  ) {}

  // GET ALL CATEGORIES
  async getAll(): Promise<any> {
    return await this.CategoryModel.find();
  }

  // GET ONLY CATEGORY
  async getCategory(cat: string): Promise<any> {
    return await this.CategoryModel.find({ code: cat }).exec();
  }

  // CREATE NEW CATEGORY
  async create(CategoryDTO: CategoryDTO): Promise<any> {
    const createdCategory = new this.CategoryModel(CategoryDTO);
    return createdCategory.save();
  }

  //UPDATE CATEGORY BY ID
  async updateCategory(CategoryDTO: CategoryDTO): Promise<any> {
    return await this.CategoryModel.updateOne(
      { _id: CategoryDTO._id },
      CategoryDTO
    );
  }
}
