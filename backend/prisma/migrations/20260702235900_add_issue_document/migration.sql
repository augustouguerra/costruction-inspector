-- CreateTable
CREATE TABLE "issue_documents" (
    "id" UUID NOT NULL,
    "issueId" UUID NOT NULL,
    "storagePath" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "uploadedBy" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "issue_documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "issue_documents" ADD CONSTRAINT "issue_documents_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "issues"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "issue_documents" ADD CONSTRAINT "issue_documents_uploadedBy_fkey" FOREIGN KEY ("uploadedBy") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
