import { MigrationInterface, QueryRunner } from "typeorm";

export class autoMigration1666791771380 implements MigrationInterface {
    name = 'autoMigration1666791771380'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`namefull\` varchar(255) NOT NULL, \`acl\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`role\``);
    }

}
