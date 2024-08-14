'use server'

import { db } from "../db"

export async function insertUser(user: { firstName: string; lastName: string }) {
  const existingUser = await db.user.findFirst({
    where: {
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });

  if (existingUser) {
    console.log(`User ${user.firstName} ${user.lastName} already exists.`);
    return existingUser;
  }

  return await db.user.create({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
}

async function addUsers() {
  console.log("Adding users to the database");

  const users = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    { firstName: "Alice", lastName: "Johnson" },
  ];

  for (const user of users) {
    await insertUser(user);
  }
}

addUsers().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await db.$disconnect();
});

