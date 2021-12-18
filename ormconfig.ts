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