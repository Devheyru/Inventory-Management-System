import SideBar from "@/components/sideBar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideBar currentPath="/dashboard" />
    </div>
  );
}
