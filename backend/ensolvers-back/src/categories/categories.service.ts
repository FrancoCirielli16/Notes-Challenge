import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from 'src/notes/entities/categorie.entity';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
      ) {}
  

  async getAllCategories(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async getCategoryById(id: any): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }

  async createCategory(name: string): Promise<Category> {
    const newCategory = new Category();
    newCategory.name = name;

    return this.categoryRepository.save(newCategory);
  }

  async updateCategory(id: string, name: string): Promise<Category> {
    const category = await this.getCategoryById(id);

    if (!category) {
      // Manejar el error, por ejemplo, lanzar una excepción
      throw new Error('Category not found');
    }

    category.name = name;

    return this.categoryRepository.save(category);
  }

  async deleteCategory(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
