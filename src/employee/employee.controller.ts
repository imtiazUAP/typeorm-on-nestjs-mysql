import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('/add')
  async addEmployee(@Body('name') name: string) {
    return await this.employeeService.addEmployee(name);
  }

  @Post('/contact/add')
  async addContact(
    @Body('email') email: string,
    @Body('id') employeeId: number,
  ) {
    return await this.employeeService.addContact(email, employeeId);
  }

  @Post('/task/add')
  async addTask(@Body('name') name: string, @Body('id') employeeId: number) {
    return await this.employeeService.addTask(name, employeeId);
  }

  @Post('/meeting/add')
  async addMeeting(@Body('url') url: string, @Body('ids') employeeIds: []) {
    return await this.employeeService.addMeeting(url, employeeIds);
  }

  @Get()
  async getAllEmployee() {
    return await this.employeeService.getAllEmployee();
  }

  @Get(':id')
  async getEmployeeById(@Param('id') id: number) {
    return await this.employeeService.getEmployeeById(id);
  }

  @Get('/qb/:id')
  async getEmployeeByIdQB(@Param('id') id: number) {
    return await this.employeeService.getEmployeeByIdQB(id);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: number, @Body('name') name: string) {
    return await this.employeeService.updateEmployee(id, name);
  }

  @Delete(':id')
  async deleteEmployeeById(@Param('id') id: number) {
    return await this.employeeService.deleteEmployeeById(id);
  }
}
