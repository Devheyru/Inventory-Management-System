import SideBar from "@/components/sideBar";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideBar currentPath="/inventory" />

      <main className="ml-64 p-8 animate-pulse">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-64 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Search Bar Skeleton */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex gap-2">
              <div className="flex-1 h-10 bg-gray-200 rounded"></div>
              <div className="h-10 w-28 bg-purple-300 rounded"></div>
            </div>
          </div>

          {/* Table Skeleton */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <th
                      key={i}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase"
                    >
                      <div className="h-3 w-20 bg-gray-200 rounded"></div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    {Array.from({ length: 6 }).map((_, j) => (
                      <td key={j} className="px-6 py-4">
                        <div className="h-4 w-full bg-gray-200 rounded"></div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Skeleton */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 flex justify-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-8 w-8 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
