import SideBar from "@/components/sideBar";
import getCurrentUser from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { TrendingUp } from "lucide-react";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  const userId = user.id;
  const totalProducts = await prisma.product.count({ where: { userId } });
  const lowStock = await prisma.product.count({
    where: { userId, LowStockAt: { not: null }, quantity: { lte: 5 } },
  });

  const allProducts = await prisma.product.findMany({
    where: { userId },
    select: { price: true, createdAt: true, quantity: true },
  });
  const totalPrice = allProducts.reduce(
    (sum, product) => sum + Number(product.price) * Number(product.quantity),
    0
  );
  const recentPrice = await prisma.product.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  return (
    <div className="min-h-screen bg-gray-50">
      <SideBar currentPath="/dashboard" />
      <main className="ml-64 p-8">
        {/*header*/}
        <div className="mb-8">
          <div className="flex items-center justify-between ">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
              <p className="text-sm text-gray-500">
                Wllcome back! here is the overview of your inventory.
              </p>
            </div>
          </div>
        </div>
        {/*Metrics*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 ">
          <div className="bg-white border rounded-lg border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Key Metrics
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">
                  {" "}
                  {totalProducts}{" "}
                </div>
                <div className="text-sm text-gray-600">Total Products</div>
                <div className="flex items-center justify-center mt-1">
                  {" "}
                  <span className="text-xs text-green-600">
                    +{totalProducts}
                  </span>
                  <TrendingUp className="w-3 h-3 text-green-600 ml-1" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">
                  {" "}
                  ${Number(totalPrice).toFixed(0)}{" "}
                </div>
                <div className="text-sm text-gray-600">Total Price</div>
                <div className="flex items-center justify-center mt-1">
                  {" "}
                  <span className="text-xs text-green-600">
                    +${Number(totalPrice).toFixed(0)}
                  </span>
                  <TrendingUp className="w-3 h-3 text-green-600 ml-1" />
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">
                  {" "}
                  {lowStock}{" "}
                </div>
                <div className="text-sm text-gray-600">LowStock</div>
                <div className="flex items-center justify-center mt-1">
                  {" "}
                  <span className="text-xs text-green-600">+{lowStock}</span>
                  <TrendingUp className="w-3 h-3 text-green-600 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
