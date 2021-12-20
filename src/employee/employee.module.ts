import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../entity/employee.entity';
import { ContactInfo } from '../entity/contact-info.entity';
import { Meeting } from '../entity/meeting.entity';
import { Task } from '../entity/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, ContactInfo, Meeting, Task]),],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
