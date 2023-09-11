import { IsBoolean, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

export class UpdateNoteDto{
    @IsString()
    @IsOptional()
    title:string
    @IsString()
    @IsOptional()
    description:string
    @IsString()
    @IsOptional()
    category:string
    @IsOptional()
    @IsBoolean()
    archived:boolean
  }