import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, Res, Response } from '@nestjs/common';
import { CoursesService } from './courses.service';


@Controller('courses')
export class CoursesController {
constructor(private readonly courseService:CoursesService){}

    @Get()
    findAll(@Response() response){
     
        return response.status(200).json({message:'Listagem de Cursos'})
    }

    /*
    @Get(':id')
    findOne(@Param() params){
     return `Curso ${params.id}`;
    }
     */
/*
    @Get(':id')
    findOne(@Param('id') id:string){
     return `Curso ${id}`;
    }
     */

    @Get(':id/:name')
    findOne(@Param('id') id: string ,@Param('name') name: string){
     return `Curso ${id} - Nome ${name} `;
    }

    @HttpCode(204)
    @Post()
    createUser(@Body() body){
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string ,@Body() body){
        return `Update Course with id ${id} `;
    }

    @Put()
    upDateUser(){

    }

    @HttpCode(204)
    @Delete(':id')
    remove(@Param('id') id:string){
        return `Delete Course with id ${id} `;
    }
}

