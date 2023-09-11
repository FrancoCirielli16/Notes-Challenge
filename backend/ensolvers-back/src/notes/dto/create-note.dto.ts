import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  title:string
  @IsString()
  description:string
  // @IsString()
  // category:Array<String>
  @IsString()
  category:string
  @IsBoolean()
  archived: boolean = false; 
}
