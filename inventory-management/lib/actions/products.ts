"use server";
import { z } from "zod";
import getCurrentUser from "../auth";
import { prisma } from "../prisma";
import { redirect } from "next/navigation";

const productSchema = z.object({
  name: z.string().min(1, "name is required").max(25, "name is too long"),
  price: z.coerce.number().int().min(0, "price must be at least 0"),
  quantity: z.coerce.number().int().min(1, "quantity must be at least 1"),
  sku: z.string().optional(),
  lowStockAt: z.coerce.number().int().min(0).optional(),
});

export async function deleteProduct(formData: FormData) {
  const user = await getCurrentUser();
  const id = String(formData.get("id") || "");
  await prisma.product.deleteMany({ where: { id: id, userId: user.id } });
}

export async function addProduct(formData: FormData) {
  const user = await getCurrentUser();
  const parsedData = productSchema.safeParse({
    name: formData.get("name"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    sku: formData.get("sku") || undefined,
    lowStockAt: formData.get("lowStockAt") || undefined,
  });
  if (!parsedData.success) {
    throw new Error("Validation failed");
  }
  try {
    await prisma.product.create({
      data: {
        ...parsedData.data,
        userId: user.id,
      },
    });

    redirect("/inventory");
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
}
