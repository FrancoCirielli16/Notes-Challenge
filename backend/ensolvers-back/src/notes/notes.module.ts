import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // Asegúrate de importar TypeOrmModule
import { NotesController } from './notes.controller';
import { Note } from './entities/note.entity'; // Importa la entidad Note aquí
//import { CategoriesModule } from 'src/categories/categories.modules';
@Module({
  imports: [TypeOrmModule.forFeature([Note]),/*CategoriesModule*/],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
