import SideBar from "@/components/sideBar";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideBar currentPath="/add-product" />

      <main className="ml-64 p-8 animate-pulse">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-64 bg-gray-200 rounded"></div>
            </div>
            <div className="h-8 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl">
          <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
            {/* Name */}
            <div>
              <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>

            {/* Quantity + Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(2)].map((_, i) => (
                <div key={i}>
                  <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>

            {/* SKU */}
            <div>
              <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>

            {/* Low Stock */}
            <div>
              <div className="h-4 w-40 bg-gray-300 rounded mb-2"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <div className="h-10 w-32 bg-purple-300 rounded"></div>
              <div className="h-10 w-32 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
