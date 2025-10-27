"use client";

import { SignIn, useUser } from "@stackframe/stack";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { tr } from "zod/locales";

export default function SignInPage() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="max-w-md w-full space-y-8">
        <SignIn automaticRedirect={true} />
        <Link
          href="/"
          className="text-blue-600 hover:bg-blue-600 hover:text-white mx-6 mt-18 inline-block text-center"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
}
