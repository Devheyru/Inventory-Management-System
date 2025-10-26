import Skeleton from "../../components/Skeleton";

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar placeholder */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-6">
        <div className="space-y-4">
          <Skeleton className="h-8 w-32" />
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-40" />
          ))}
        </div>
      </div>

      <main className="ml-64 p-8 space-y-8">
        {/* Header */}
        <div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-72" />
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Metrics Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <Skeleton className="h-6 w-32 mb-6" />
            <div className="grid grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="text-center space-y-3">
                  <Skeleton className="h-6 w-20 mx-auto" />
                  <Skeleton className="h-4 w-24 mx-auto" />
                  <Skeleton className="h-3 w-16 mx-auto" />
                </div>
              ))}
            </div>
          </div>

          {/* Products Chart */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <Skeleton className="h-6 w-40 mx-auto mb-6" />
            <Skeleton className="h-48 w-full rounded-md" />
          </div>
        </div>

        {/* Stock + Efficiency */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stock Levels */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3">
            <Skeleton className="h-6 w-32 mb-4" />
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
              >
                <div className="flex items-center space-x-3">
                  <Skeleton className="h-3 w-3 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-4 w-12" />
              </div>
            ))}
          </div>

          {/* Efficiency Ring */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <Skeleton className="h-6 w-32 mb-6" />
            <div className="flex items-center justify-center">
              <Skeleton className="h-48 w-48 rounded-full" />
            </div>
            <div className="mt-6 space-y-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-sm text-gray-600"
                >
                  <div className="flex items-center space-x-2">
                    <Skeleton className="h-3 w-3 rounded-full" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <Skeleton className="h-4 w-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
