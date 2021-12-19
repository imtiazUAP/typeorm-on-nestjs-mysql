<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


ORM

Introduction
Object-Relational Mapping(ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a library that implements the Object-Relational Mapping technique, hence the phrase "an ORM".
An ORM library is a completely ordinary library written in your language of choice that encapsulates the code needed to manipulate the data, so you don't use SQL anymore; you interact directly with an object in the same language you're using.
For example, here is a completely imaginary case with a pseudo language:
You have a book class, you want to retrieve all the books of which the author is "Linus". Manually, you would do something like that:
```
book_list = new List();
sql = "SELECT book FROM library WHERE author = 'Linus'";
data = query(sql); // I over simplify ...
while (row = data.next())
{
     book = new Book();
     book.setAuthor(row.get('author');
     book_list.add(book);
}

```
With an ORM library, it would look like this:
```
book_list = BookTable.query(author="Linus");

```
The mechanical part is taken care of automatically via the ORM library.

Pros and Cons

Using ORM saves a lot of time because:
- DRY: You write your data model in only one place, and it's easier to update, maintain, and reuse the code.
- A lot of stuff is done automatically, from database handling to I18N.
- It forces you to write MVCcode, which, in the end, makes your code a little cleaner.
- You don't have to write poorly-formed SQL (most Web programmers really suck at it, because SQL is treated like a "sub" language, when in reality it's a very powerful and complex one).
- Sanitizing; using prepared statements or transactions are as easy as calling a method.
Using an ORM library is more flexible because:
- It fits in your natural way of coding (it's your language!).
- It abstracts the DB system, so you can change it whenever you want.
- The model is weakly bound to the rest of the application, so you can change it or use it anywhere else.
- It lets you use OOP goodness like data inheritance without a headache.
But ORM can be a pain:
- You have to learn it, and ORM libraries are not lightweight tools;
- You have to set it up. Same problem.
- Performance is OK for usual queries, but a SQL master will always do better with his own SQL for big projects.
- It abstracts the DB. While it's OK if you know what's happening behind the scene, it's a trap for new programmers that can write very greedy statements, like a heavy hit in a forloop.

How to learn about ORM?

Well, use one. Whichever ORM library you choose, they all use the same principles. There are a lot of ORM libraries around here:
- Java: Hibernate.
- PHP: Propelor Doctrine(I prefer the last one).
- Python: the Django ORM or SQLAlchemy(My favorite ORM library ever).
- C#: NHibernateor Entity Framework
If you want to try an ORM library in Web programming, you'd be better off using an entire framework stack like:
- Symfony(PHP, using Propel or Doctrine).
- Django(Python, using a internal ORM).
- JavaScript: TypeScript
Do not try to write your own ORM, unless you are trying to learn something. This is a gigantic piece of work, and the old ones took a lot of time and work before they became reliable.

Let's work with ORM implementing a schema for a small application in the next part! 

NestJs with TypeOrm & MySQL
For this implementation we will choose a boilerplate application using JavaScript's NestJs Framework with MySQL & TypeOrm as ORM.

Pre requisite:
NodeJs & NestJs, MySQL should be pre installed on your PC.

Step 1: (Setup a boilerplate NestJs application:)
Initialize
```
nest new typeorm-on-nestjs-mysql
```

Enter into the folder:
```
cd typeorm-on-nestjs-mysql
```

Run the application in dev mode:
```
npm run start:dev
```


Step 2: (Install TypeOrm & MySQL2 package)
```
npm install --save @nestjs/typeorm typeorm mysql2
```
For more detail:
TypeOrm doc: https://docs.nestjs.com/techniques/database
MySQL2 doc: https://www.npmjs.com/package/mysql2


Step 3: (Connect application with database)
->Create a database manually in MySQL & find the host, username, password of that database
create a file in application's root directory: ormconfig.ts
Config the config file: (in our case as below)
```
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions"; 
const config: MysqlConnectionOptions = { 
    type: 'mysql', 
    host: 'localhost', 
    username: 'root', 
    database: 'typeorm-on-nestjs-mysql', 
    entities: ['dist/src/**/*.entity.js'], 
    migrations: ['dist/migrations/*.js'], 
    cli: { 
        migrationsDir: 'migrations', 
    }, 
    synchronize: false, 
}
export default config;
```

Import this config & use in app.module.ts import
```
// example
import config from '../ormconfig';
// example
imports: [TypeOrmModule.forRoot(config)],
```


Step 4: (Create entities)
Data model we want to create:


- [ ] Employee table
- [ ] Can reference self(manager and direct reports
- [ ] If manager is deleted set reference to NULL
- [ ] One-to-One relationship with Contact Info
- [ ] One-to-Many relationship with Tasks
- [ ] Many-to-Many relationship with meetings

- [ ] Contact Info Table
- [ ] One-to-One relationship with Employee
- [ ] Delete if Employee is deleted

- [ ] Task Table
- [ ] Many-to-One relationship with Employee
- [ ] Set employeeId to NULL if employee is deleted

- [ ] Meeting Table
- [ ] Many-toMany relationship with Employee (via relationship table)
- [ ] Remove Employee as attendee if Employee is deleted

Create a folder under src folder names entity
Create a file in entity folder names user.entity.ts
```
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"; 
@Entity() 
export class User { 
    @PrimaryGeneratedColumn() 
    id: number; 
    @Column() 
    name: string; 
}
```


Step 5: (To use migrations & learn more about TypeOrm  https://typeorm.io/#/using-cli or Jump to Step 6)
Install: 
```
npm install -g ts-node
```

To generate the dist folder, run build:
```
npm run build
```

Start the application:
```
 npm run start:dev
```

Generate the migration scripts:
```
npm run typeorm migration:generate -- -n user -d/migrations
```

Run the generated migration files:
```
npm run typeorm migration:run
```


Step 6: (Write scripts to build & run & generate)
Better, let's add a script to build & generate migration script at once as every-time we need to build to update the migration script
-Added script
```
"migration:generate": "npm run build && npm run typeorm migration:generate -- -n"
```
Now run the migration generation script from terminal
```
npm run migration:generate -- userMigration
```

Let's create another script to run the migration script
```
"migration:run": "npm run build && npm run typeorm migration run"
```
Run the script from terminal
```
npm run migration:run
```

Database with table should be created!


Step 7: (If you need to create/update/relate any table, edit the entity file & run these commands)
Generate migrations:
```
npm run migration:generate -- nameOfMigrationFile
```
Run migrations:
```
npm run migration:run
```

Database should be updated!
