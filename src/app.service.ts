import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactInfo } from './entity/contact-info.entity';
import { Employee } from './entity/employee.entity';
import { Meeting } from './entity/meeting.entity';
import { Pet } from './entity/pet.entity';
import { Task } from './entity/task.entity';
import { User } from './entity/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    @InjectRepository(Employee) private employeeRepository: Repository<Employee>,
    @InjectRepository(ContactInfo) private contactInfoRepository: Repository<ContactInfo>,
    @InjectRepository(Meeting) private meetingRepository: Repository<Meeting>,
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['pets']
    });
    // SELECT * from user;
  }

  async getOneById(id: number): Promise<User> {
    try {
      return this.userRepository.findOneOrFail(id);
      // SELECT * from user where id = :id;
    } catch (err) {
      throw err;
    }
  }

  createUser (name: string, age: number): Promise<User> {
    const newUser = this.userRepository.create({name, age});
    return this.userRepository.save(newUser);
    // INSERT
  }

  async updateUser (id: number, name: string, age: number): Promise<User> {
    const user =  await this.getOneById(id);
    user.name = name;
    user.age = age;

    return this.userRepository.save(user);
    // UPDATE
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.getOneById(id);

    return this.userRepository.remove(user);
    //DELETE
  }

  customQuery(): any {
    return this.userRepository.createQueryBuilder("user").select("name");
    // SELECT name from user;
  }

  async seed() {
    // Employye 1 CEO
    const ceo = this.employeeRepository.create({name: 'Mr. CEO'});
    await this.employeeRepository.save(ceo);

    // Contact of employee1
    const ceoContactInfo = this.contactInfoRepository.create({email: 'email@rmail.com'});
    ceoContactInfo.employee = ceo;
    await this.contactInfoRepository.save(ceoContactInfo);

    // Employee 2 Manager
    const manager = this.employeeRepository.create({
      name: 'Mr. Manager',
      manager: ceo,
    });

    // Tasks for manager
    const task1 = this.taskRepository.create({
      name: 'Hire People',
    });
    await this.taskRepository.save(task1);

    const task2 = this.taskRepository.create({
      name: 'Present to CEO',
    });
    await this.taskRepository.save(task2);

    manager.tasks = [task1, task2];

    // Meetings
    const meeting1 = this.meetingRepository.create({zoomUrl: 'meeting.com'});
    meeting1.attendees = [ceo];
    await this.meetingRepository.save(meeting1);

    manager.meetings = [meeting1];

    await this.employeeRepository.save(manager);
  }

  getEmployeeById(id: number) {
    return this.employeeRepository.findOne(id, {
      relations: ['manager', 'directReports', 'tasks', 'contactInfo', 'meetings']
    })
  }

  getEmployeeByIdQB(id: number) {
    return this.employeeRepository
    .createQueryBuilder('employee')
    .leftJoinAndSelect('employee.directReports', 'directReports')
    .leftJoinAndSelect('employee.meetings', 'meetings')
    .leftJoinAndSelect('employee.tasks', 'tasks')
    .where('employee.id = :employeeId', {employeeId: id})
    .getOne();
  }

  async deleteEmployeeById(id: number) {
    return await this.employeeRepository.delete(id);
  }
}
