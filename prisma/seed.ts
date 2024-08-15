import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const passFatwa = await bcrypt.hash("mamamoon", 10);

  const users = [
    {
      email: "fatwasikruddin@gmail.com",
      password: passFatwa,
      profile: {
        create: {
          balance: {
            create: {
              amount: 10000.0,
            },
          },
          transactions: {
            create: [
              {
                type: "deposit",
                amount: 100.0,
                description: "Deposit Awal",
              },
              {
                type: "withdrawal",
                amount: 20.0,
                description: "First Withdraw",
              },
            ],
          },
        },
      },
    },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("Dummy data seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
