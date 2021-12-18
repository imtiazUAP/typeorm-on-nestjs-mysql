import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find();
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
}
