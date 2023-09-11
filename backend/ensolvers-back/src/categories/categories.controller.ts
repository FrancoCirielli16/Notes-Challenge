import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from 'src/notes/entities/categorie.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getAllCategories(): Promise<Category[]> {
    return this.categoriesService.getAllCategories();
  }

  @Post()
  async createCategory(@Body('name') name: string): Promise<Category> {
    return this.categoriesService.createCategory(name);
  }

  @Put(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body('name') name: string,
  ): Promise<Category> {
    return this.categoriesService.updateCategory(id, name);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string): Promise<void> {
    return this.categoriesService.deleteCategory(id);
  }
}
