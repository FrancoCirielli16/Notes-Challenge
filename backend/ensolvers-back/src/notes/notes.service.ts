import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';
//import { Category } from './entities/categorie.entity';



@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private readonly noteRepository: Repository<Note>,
    //@InjectRepository(Category) private readonly categoryRepository: Repository<Category>, 
  ) {}
  
  
  
  async getAllNotes(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  async CreateNote(createNoteDto: CreateNoteDto): Promise<Note> {
    //const { title, description, category } = createNoteDto;
    
    const newNote = new Note();
    newNote.title = createNoteDto.title;
    newNote.description = createNoteDto.description;
    newNote.categories = createNoteDto.category;
    newNote.last_edited = new Date();

    // const categories = await this.getOrCreateCategories(category.map((cat) => cat.toLowerCase()));
    // newNote.categories = categories;

    const note = this.noteRepository.create(newNote);
    return this.noteRepository.save(note);
  }

  // private async getOrCreateCategories(categoryNames: string[]): Promise<Category[]> {
  //   const categories: Category[] = [];
  
  //   for (const categoryName of categoryNames) {
  //     // Buscar si la categoría ya existe en la base de datos
  //     let category = await this.categoryRepository.findOne({ where: { name: categoryName } });

  
  //     // Si no existe, crear una nueva categoría
  //     if (!category) {
  //       category = new Category();
  //       category.name = categoryName;
  //       category = await this.categoryRepository.save(category);
  //     }
  
  //     categories.push(category);
  //   }
  
  //   return categories;
  // }

  async getNoteById(id: any): Promise<Note> {
    return this.noteRepository.findOne(id);
  }

  async updateNote(id: string, updateNoteDto: UpdateNoteDto): Promise<Note> {
    // Verificar si id es una cadena válida antes de buscar
    if (!id || typeof id !== 'string') {
      throw new BadRequestException('Invalid id');
    }
  
    const existingNote = await this.noteRepository.findOne({ where: { id } });
  
    if (!existingNote) {
      throw new NotFoundException('Note not found');
    }
  
    const updatedNote = this.noteRepository.merge(existingNote, updateNoteDto);
    return this.noteRepository.save(updatedNote);
  }
  
  

  async remove(id: number): Promise<void> {
    await this.noteRepository.delete(id);
  }
}

  
