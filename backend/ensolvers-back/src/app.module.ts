// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesModule } from './notes/notes.module';
import { Note } from './notes/entities/note.entity';
// import { Category } from './notes/entities/categorie.entity';
// import { CategoriesController } from './categories/categories.controller';
// import { CategoriesModule } from './categories/categories.modules';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      url: process.env.DATABASE_URL,
      entities: [Note,/*Category*/],
      synchronize: true,
      ssl: {
        rejectUnauthorized: true, // Asegúrate de que esta opción sea un objeto
      }, 
    }),NotesModule,/*CategoriesModule*/], 
  controllers: [AppController, /*CategoriesController*/],
  providers: [AppService],
})
export class AppModule { }
