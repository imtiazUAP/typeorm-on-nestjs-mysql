import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from '../ormconfig';
import { User } from './entity/user.entity';
import { Pet } from './entity/pet.entity';
import { Employee } from './entity/employee.entity';
import { ContactInfo } from './entity/contact-info.entity';
import { Meeting } from './entity/meeting.entity';
import { Task } from './entity/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([User, Pet, Employee, ContactInfo, Meeting, Task]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
