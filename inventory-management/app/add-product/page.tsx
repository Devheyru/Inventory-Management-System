import SideBar from "@/components/sideBar";
import { addProduct } from "@/lib/actions/products";
import getCurrentUser from "@/lib/auth";
import { create } from "domain";
import Link from "next/link";

export default function AddProductPage() {
  const user = getCurrentUser();
  return (
    <div className="min-h-screen bg-gray-50">
      <SideBar currentPath="/add-product" />
      <main className="ml-64 p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between ">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Add product
              </h1>
              <p className="text-sm text-gray-500">
                Add new products to your inventory.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-2xl">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <form action={addProduct} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Product name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:border-transparent"
                  placeholder="Enter Product Name"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Quantity*
                  </label>
                  <input
                    type="number"
                    min={1}
                    id="quantity"
                    name="quantity"
                    step="1"
                    required
                    className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:border-transparent"
                    placeholder="1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    price*
                  </label>
                  <input
                    type="number"
                    min={0.0}
                    id="price"
                    name="price"
                    step="0.01"
                    required
                    className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:border-transparent"
                    placeholder="$ 0.00"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="sku"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  SKU(optional)
                </label>
                <input
                  type="text"
                  id="sku"
                  name="sku"
                  className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:border-transparent"
                  placeholder="SKU"
                />
              </div>
              <div>
                <label
                  htmlFor="lowStockAt"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Low Stock At(optional)
                </label>
                <input
                  type="number"
                  min={0}
                  id="lowStockAt"
                  name="lowStockAt"
                  className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:border-transparent"
                  placeholder="Enter Low Stock Threshold"
                />
              </div>
              <div className="flex gap-5">
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 cursor-pointer"
                >
                  Add Product
                </button>
                <Link
                  href="/inventory"
                  className="px-6 py-3 bg-gray-200 rounded-lg 
                text-gray-800 hover:bg-gray-400"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
