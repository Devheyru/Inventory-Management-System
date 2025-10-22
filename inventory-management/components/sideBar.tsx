import { UserButton } from "@stackframe/stack";
import { BarChart3, Package, Plus, Settings } from "lucide-react";
import Link from "next/link";

export default function SideBar({
  currentPath = "/dashboard",
}: {
  currentPath: String;
}) {
  const Navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: BarChart3,
    },
    {
      name: "Inventory",
      href: "/inventory",
      icon: Package,
    },
    {
      name: "Add Product",
      href: "/add-product",
      icon: Plus,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-64 text-white min-h-screen p-6 z-10 bg-gray-900">
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <BarChart3 className="w-7 h-10" />
          <span className="text-lg font-semibold">Inventory App</span>
        </div>
      </div>
      <nav className="space-y-1">
        <div className="text-sm font-semibold text-gray-400 uppercase hover:text-white ">
          Inventory
        </div>
        {Navigation.map((item, key) => {
          const IconComponent = item.icon;
          const isActive = currentPath === item.href;
          return (
            <Link
              href={item.href}
              key={key}
              className={`flex items-center space-x-3 py-3 px-3 rounded-lg ${
                isActive
                  ? "bg-purple-100 text-gray-800"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              } `}
            >
              <IconComponent />
              <span className="text-sm hover:text-lg ">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="absolute bottom-0 right-0 left-0 border-t border-gray-700">
        <div className="flex items-center justify-between">
          <UserButton showUserInfo />
        </div>
      </div>
    </div>
  );
}
