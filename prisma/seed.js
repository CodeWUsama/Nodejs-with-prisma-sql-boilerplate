import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  // add your seed code here
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
