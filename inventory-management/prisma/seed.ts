import { PrismaClient } from "@prisma/client";
import { use } from "react";
const prisma = new PrismaClient();
async function main() {
  // Seed Categories
  const demoUserId = "e531ab39-0f71-49f1-9d66-0db0b06aac0b";
  // create sample products
  await prisma.product.createMany({
    data: Array.from({ length: 25 }).map((_, i) => ({
      userId: demoUserId,
      name: `Product ${i + 1}`,
      price: (Math.random() * 90 + 10).toFixed(2),
      quantity: Math.floor(Math.random() * 20) + 1,
      LowStockAt: 5,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
    })),
  });
  console.log("Seeding completed successfully.");
  console.log(`25 sample products created for user ID: ${demoUserId}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
