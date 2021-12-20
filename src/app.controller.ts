import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body('name') name: string, @Body('age') age: number) {
    return await this.appService.createUser(name, age);
  }

  @Get()
  async getAllUser() {
    return await this.appService.getAll();
  }

  @Get(':id')
  async getOneById(@Param('id') id: number) {
    return await this.appService.getOneById(id);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('age') age: number,
  ) {
    return await this.appService.updateUser(id, name, age);
  }

  @Delete(':id')
  async removeUser(@Param('id') id: number) {
    return await this.appService.deleteUser(id);
  }

//   @Get('/seed/insert')
//   async seed() {
//     return await this.appService.seed();
//   }

//   @Get('/seed/list/:id')
//   async getEmployeeById(@Param('id') id: number) {
//     return await this.appService.getEmployeeById(id);
//   }

//   @Get('/seed/list/alter/:id')
//   async getEmployeeByIdQB(@Param('id') id: number) {
//     return await this.appService.getEmployeeById(id);
//   }

//   @Delete('/seed/:id')
//   async deleteEmployee(@Param('id') id: number) {
//     return await this.appService.deleteEmployeeById(id);
//   }
}
