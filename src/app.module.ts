import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module';
import { TodoController } from './controllers/todo/todo.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), TodoModule],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
