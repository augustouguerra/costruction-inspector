/*
  Warnings:

  - You are about to drop the column `audioFileUrl` on the `issues` table. All the data in the column will be lost.
  - You are about to drop the column `detectionConfidence` on the `issues` table. All the data in the column will be lost.
  - You are about to drop the column `transcriptionRaw` on the `issues` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "issues" DROP COLUMN "audioFileUrl",
DROP COLUMN "detectionConfidence",
DROP COLUMN "transcriptionRaw";

-- CreateTable
CREATE TABLE "issue_audios" (
    "id" UUID NOT NULL,
    "issueId" UUID NOT NULL,
    "storagePath" TEXT NOT NULL,
    "uploadedBy" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "issue_audios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "issue_audios" ADD CONSTRAINT "issue_audios_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "issues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "issue_audios" ADD CONSTRAINT "issue_audios_uploadedBy_fkey" FOREIGN KEY ("uploadedBy") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
