import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactInfo } from '../entity/contact-info.entity';
import { Employee } from '../entity/employee.entity';
import { Meeting } from '../entity/meeting.entity';
import { Task } from '../entity/task.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(ContactInfo)
    private contactInfoRepository: Repository<ContactInfo>,
    @InjectRepository(Meeting) private meetingRepository: Repository<Meeting>,
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  /**
   *
   * @param name
   * @returns
   */
  async addEmployee(name: string) {
    const ceo = this.employeeRepository.create({ name });
    return await this.employeeRepository.save(ceo);
  }

  /**
   *
   * @param email
   * @param employeeId
   * @returns
   */
  async addContact(email: string, employeeId: number) {
    const contactInfo = this.contactInfoRepository.create({ email });

    //getting employee detail to add the contact
    const employee = await this.employeeRepository.findOne({ id: employeeId });
    contactInfo.employee = employee;

    // saving the contact
    return await this.contactInfoRepository.save(contactInfo);
  }

  /**
   *
   * @param name
   * @param employeeId
   * @returns
   */
  async addTask(name: string, employeeId: number) {
    const task = this.taskRepository.create({ name });
    await this.taskRepository.save(task);

    // assigning task to employee
    const employee = await this.employeeRepository.findOne({ id: employeeId });
    employee.tasks = [task];
    return await this.employeeRepository.save(employee);
  }

  /**
   *
   * @param zoomUrl
   * @param employeeIds
   * @returns
   */
  async addMeeting(zoomUrl: string, employeeIds: []) {
    // adding meeting
    const meeting = await this.meetingRepository.create({ zoomUrl });
    await this.meetingRepository.save(meeting);

    // assigning meetings to attendees
    employeeIds.map(async (employeeId) => {
      const employee = await this.employeeRepository.findOne({
        id: employeeId,
      });
      employee.meetings = [meeting];
      await this.employeeRepository.save(employee);
    });

    return {
      status: 200,
      message: 'success',
    };
  }

  /**
   *
   * @returns
   */
  getAllEmployee() {
    return this.employeeRepository.find();
  }

  /**
   *
   * @param id
   * @returns
   */
  getEmployeeById(id: number) {
    return this.employeeRepository.findOne(id, {
      relations: [
        'manager',
        'directReports',
        'tasks',
        'contactInfo',
        'meetings',
      ],
    });
  }

  /**
   * Example for getting employee detail using query builder
   * @param id
   * @returns
   */
  getEmployeeByIdQB(id: number) {
    return this.employeeRepository
      .createQueryBuilder('employee')
      .leftJoinAndSelect('employee.directReports', 'directReports')
      .leftJoinAndSelect('employee.meetings', 'meetings')
      .leftJoinAndSelect('employee.tasks', 'tasks')
      .where('employee.id = :employeeId', { employeeId: id })
      .getOne();
  }

  /**
   *
   * @param id
   * @param name
   * @returns
   */
  async updateEmployee(id: number, name: string): Promise<Employee> {
    const employee = await this.employeeRepository.findOne(id);
    employee.name = name;

    return this.employeeRepository.save(employee);
  }

  /**
   *
   * @param id
   * @returns
   */
  async deleteEmployeeById(id: number) {
    return await this.employeeRepository.delete(id);
  }
}
