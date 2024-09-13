-- AlterTable
ALTER TABLE `product` ADD COLUMN `slug` VARCHAR(191) NULL,
    MODIFY `update_at` DATETIME(3) NULL;
