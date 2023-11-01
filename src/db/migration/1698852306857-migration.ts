import { MigrationInterface, QueryRunner } from "typeorm"

export class Migration1698852306857 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          "ALTER TABLE `invoice` ADD COLUMN `status` ENUM('pending', 'paid', 'failed') NOT NULL DEFAULT 'pending'",
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE `invoice` DROP COLUMN `status`');
      }

}
