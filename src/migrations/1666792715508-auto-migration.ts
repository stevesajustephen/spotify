import { MigrationInterface, QueryRunner } from "typeorm";

export class autoMigration1666792715508 implements MigrationInterface {
    name = 'autoMigration1666792715508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`role\` CHANGE \`namefull\` \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`role\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`role\` ADD \`name\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`role\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`role\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`role\` CHANGE \`name\` \`namefull\` varchar(255) NOT NULL`);
    }

}
