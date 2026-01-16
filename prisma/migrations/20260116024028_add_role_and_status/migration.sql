-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'OWNER');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('CONFIRMADO', 'CONCLUIDO', 'CANCELADO');

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "status" "BookingStatus" NOT NULL DEFAULT 'CONFIRMADO';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';
