import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';


@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Post()
  createNote(@Body() createNoteDto: CreateNoteDto) {
    
    return this.notesService.CreateNote(createNoteDto);
  }

  @Get()
  getAllNotes() {
    return this.notesService.getAllNotes();
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.updateNote(id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    this.notesService.remove(id);
  }
}
