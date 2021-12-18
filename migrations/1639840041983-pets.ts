import {MigrationInterface, QueryRunner} from "typeorm";

export class pets1639840041983 implements MigrationInterface {
    name = 'pets1639840041983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pet\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`ownerId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pet\` ADD CONSTRAINT \`FK_20acc45f799c122ec3735a3b8b1\` FOREIGN KEY (\`ownerId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`pet\` DROP FOREIGN KEY \`FK_20acc45f799c122ec3735a3b8b1\``);
        await queryRunner.query(`DROP TABLE \`pet\``);
    }

}
