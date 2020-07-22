import { Body, Controller, Delete, Get, Param, Post, Put, NotAcceptableException, HttpException, HttpStatus } from '@nestjs/common';
import { CreateDto, UpdateDto } from './dto';
import { TodoService } from '../services/todo.service';
import { Todo } from '../entities/todo.entity';
@Controller('rest/todo')
export class TodoController {
  constructor(private readonly todoservice: TodoService){}

  @Get()
  getAllAction(): Promise<Todo[]> {
    return this.todoservice.findAll();
  }

  @Get(':id')
  async getOneAction(@Param('id') id: string): Promise<Todo | HttpException> {
    const todo = await this.todoservice.findOne(id);
    if(todo === undefined){
      throw new HttpException( 'Todo with id=' + id + ' not exists', HttpStatus.NOT_FOUND);
    }
    return todo;
  }

  // Create
  @Post()
  createAction(@Body() createDto: CreateDto): Promise<Todo> {
    const todo = new Todo();
    todo.title = createDto.title;
    if(createDto.isCompleted !== undefined){
      todo.isCompleted = createDto.isCompleted;
    }
    return this.todoservice.create(todo);
  }

  // Create
  @Put(':id')
  async updateAction(
    @Param('id') id: string,
    @Body() updateDto: UpdateDto
  ): Promise<Todo> {
    const todo = await this.todoservice.findOne(id);
    if(todo === undefined){
      throw new NotAcceptableException('Todo with id=' + id + ' not exists');
    }
    todo.title = updateDto.title;
    todo.isCompleted = updateDto.isCompleted;
    return todo;//this.todoservice.update(todo);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void> {
    return this.todoservice.remove(id);
  }
}
