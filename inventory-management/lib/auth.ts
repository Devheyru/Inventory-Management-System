import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";

export default async function getCurrentUser() {
  // Placeholder function to simulate user retrieval
  const user = await stackServerApp.getUser();
  if (!user) {
    redirect("/sign-in");
  }
  return user;
}
