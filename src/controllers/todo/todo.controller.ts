import { Controller, Get, Post, Param, Delete, Body, Put } from '@nestjs/common';
import { Todo } from 'src/modules/todo/entities/todo.entity';
import { CreateDto, UpdateDto } from './dto';
// GetOne
// GetMany
// Post (Create Or Update)
// Delete (Delete)
@Controller('rest/todo')
export class TodoController {
    @Get()
    getAllAction(): string {
        return "Todo get all";
    }

    @Get(':id')
    getOneAction(@Param('id') id: number): string {
        return `Todo get one id: ${id}`;
    }
    
    // Create
    @Post(':id')
    createAction(
        @Param('id') id: number, 
        @Body() todo: CreateDto
    ): CreateDto {
        console.log(todo);
        return todo;
    }

    // Create
    @Put(':id')
    updateAction(
        @Param('id') id: number, 
        @Body() todo: UpdateDto
    ): UpdateDto {
        console.log('Search by id', id);
        console.log(todo, 'saved');
        return todo;
    }
    @Delete(':id')
    deleteAction(@Param('id') id: number): string {
        return `Delete Todo id: ${id}`;
    }
}
