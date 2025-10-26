import SideBar from "@/components/sideBar";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideBar currentPath="/settings" />

      <main className="ml-64 p-8 animate-pulse">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-6 w-32 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-64 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        {/* Account Settings Container */}
        <div className="max-w-6xl">
          <div className="bg-white rounded-lg border border-gray-300 p-8 space-y-6">
            {/* Simulated sections of account settings */}
            <div className="h-6 w-48 bg-gray-200 rounded"></div>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex gap-6">
                  <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                  <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>

            <div className="h-6 w-48 bg-gray-200 rounded mt-8"></div>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-6">
                  <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                  <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>

            {/* Save button placeholder */}
            <div className="flex justify-end pt-6">
              <div className="h-10 w-32 bg-purple-300 rounded"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
