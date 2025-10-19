import Image from "next/image";
import Link from "next/link";

export default function Home() {
return(
<div className="min-h-screen bg-gradient-to-br from-purple-50 flex items-center ">
<div className="container mx-auto px-4 py-16">
  <div className="text-center">
    <h1 className="text-5xl font-bold text-gray-900 mb-6">
      Inventory Management System
    </h1>
    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
      Welcome to the Inventory Management System! This application helps you keep track of your products, manage stock levels, and streamline your inventory processes with ease.
    </p>
    <div className="flex gap-4 justify-center">
      <Link href="/sign-in" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors hover:text-white"> sign In</Link>
      <Link href="#" className="bg-white text-purple-600 px-8 py-3 font-semibold border-2 border-purple-600 hover:bg-purple-700 hover:text-white">
        Learn More
      </Link>
    </div>

  </div>

</div>

</div>
);
}
