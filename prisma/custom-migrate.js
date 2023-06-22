import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function migrate() {
  // add your js migration here
}

migrate()
  .then(async () => {
    console.log('Migrations Successful');
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log('Migrations Failed: ', error);
    await prisma.$disconnect();
    process.exit(1);
  });
