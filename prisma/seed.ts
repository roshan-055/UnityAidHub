import { PrismaClient, Status } from '@prisma/client';
import { hashPassword } from '../src/utils/bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();
async function main() {
  //seeder for admin
  const hashedPassword = hashPassword('password');
  const admins = [
    {
      name: 'UnityAidHub',
      email: 'admin@gmail.com',
      password: hashedPassword,
    },
  ];
  for (const admin of admins) {
    await prisma.admin.create({ data: admin });
  }

  //Seeder for category
  const categories = [
    {
      name: 'Medical',
    },
    {
      name: 'Education',
    },
    {
      name: 'Food',
    },
    {
      name: 'Pets',
    },
    {
      name: 'Natural Disaster',
    },
  ];
  for (const category of categories) {
    await prisma.category.create({ data: category });
  }

  //Seeder for fundraiser
  const Fundraisers = [
    {
      name: 'Roshan',
      phoneNumber: '9812345678',
      address: 'Pokhara,MahendraCave',
      email: 'roshan@gmail.com',
      requiredAmount: 50000,
      identityDocument: 'citizenship.jpeg',
      description: 'Needs Aids for treatment',
      supportingDocument: ['passport.jpeg'],
      url: 'http://example.com',
      secretKey: 'Ab12',
    },
    {
      name: 'Nabin',
      phoneNumber: '9865743248',
      address: 'Pokhara,chauthe',
      email: 'nabin@gmail.com',
      requiredAmount: 80000,
      identityDocument: 'citizenship.jpeg',
      description: 'Needs Aids for Education',
      supportingDocument: ['passport.jpeg'],
      url: 'http://example.com',
      secretKey: 'C3ef',
    },
    {
      name: 'Kushal',
      phoneNumber: '9857236514',
      address: 'Pokhara,birauta',
      email: 'kushal@gmail.com',
      requiredAmount: 40000,
      identityDocument: 'citizenship.jpeg',
      description: 'Needs Aids for Treatment of my dog',
      supportingDocument: ['passport.jpeg'],
      url: 'http://example.com',
      secretKey: 'G8Rc',
    },
  ];
  for (const fundraiser of Fundraisers) {
    await prisma.fundraiser.create({ data: fundraiser });
  }

  //Seeder for Posts
  const Posts = [
    {
      title: 'Treatment',
      description:
        'I am suffering from a disease and doesnt have money for treatment so please help me.',
      startDate: '2023-09-28T14:03:38.723Z',
      endDate: '2023-09-28T14:03:38.723Z',
      goalAmount: 50000,
      currentAmount: 10000,
      imageUrl: 'image.jpeg',
      view: 15,
      status: Status.VERIFIED,
      categoryId: 1,
      fundraiserId: 1,
    },
    {
      title: 'Studies',
      description:
        'I am lacking money for my higher eduction so please help me.',
      startDate: '2023-09-28T14:03:38.723Z',
      endDate: '2023-09-28T14:03:38.723Z',
      goalAmount: 40000,
      currentAmount: 5000,
      imageUrl: 'image.jpeg',
      view: 20,
      status: Status.VERIFIED,
      categoryId: 2,
      fundraiserId: 2,
    },
    {
      title: 'Pet Treatment',
      description:
        'I am lacking money for treatment of my dog who was wounded because of an accident with bike so please help me to treat my dog.',
      startDate: '2023-09-28T14:03:38.723Z',
      endDate: '2023-09-28T14:03:38.723Z',
      goalAmount: 30000,
      currentAmount: 3000,
      imageUrl: 'image.jpeg',
      view: 25,
      status: Status.VERIFIED,
      categoryId: 4,
      fundraiserId: 3,
    },
  ];
  for (const post of Posts) {
    await prisma.post.create({ data: post });
  }
}
main()
  .then(() => {
    console.log('Seeder complete!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
