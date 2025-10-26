import { SignIn } from "@stackframe/stack";
import Link from "next/link";

export default function SignInPage() {
  return <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-purple-100">
    <div className="max-w-md w-full space-y-8" >
        <SignIn/>
            <Link href="/dashboard" className="text-blue-600 hover:bg-blue-600 hover:text-white mx-6 mt-18"> Go back to home</Link>

    </div>
    </div>;
}
