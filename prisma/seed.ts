import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/utils/bcrypt";

// initialize Prisma Client
const prisma = new PrismaClient();
async function main() {
    //seeder for admin
    const hashedPassword = hashPassword('password');
    const admins = [
        {
            name: 'Sahayog',
            email: 'admin@gmail.com',
            password: hashedPassword,
        },
    ];
    for (const admin of admins) {
        await prisma.admin.create({ data: admin });
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