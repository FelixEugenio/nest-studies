import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, Res, Response } from '@nestjs/common';
import { CoursesService } from './courses.service';


@Controller('courses')
export class CoursesController {
constructor(private readonly courseService:CoursesService){}

    @Get()
    findAll(){
        return this.courseService.findAll()
    }

    /*
    @Get(':id')
    findOne(@Param() params){
     return `Curso ${params.id}`;
    }
     */

    @Get(':id')
    findOne(@Param('id') id:number){
     return this.courseService.findOne(id);
    }

/*
    @Get(':id/:name')
    findOne(@Param('id') id: string ,@Param('name') name: string){
     return `Curso ${id} - Nome ${name} `;
    }
     */

    @HttpCode(200)
    @Post()
    createUser(@Body() body){
        return this.courseService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number ,@Body() body){
        return this.courseService.update(id,body);
    }

    

    @HttpCode(200)
    @Delete(':id')
    remove(@Param('id') id:number){
        return this.courseService.remove(id);
    }
}

