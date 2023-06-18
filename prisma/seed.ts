import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  // delete all
  await prisma.note.deleteMany();
  // seeding
  const notes: Prisma.NoteCreateInput[] = [
    {
      title: 'First note',
      body: 'This is the first note.',
    },
    {
      title: 'Second note',
      body: 'This is the second note.',
    },
    {
      title: 'Third note',
      body: 'This is the third note.',
    },
    {
      title: 'Fourth note',
      body: 'This is the fourth note.',
    },
  ];
  for (const note of notes) {
    await prisma.note.create({
      data: note,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
