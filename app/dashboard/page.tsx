import { auth } from "@clerk/nextjs/server";
import React from "react";

export default async function DashboardPage() {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) {
    return redirectToSignIn();
  }
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
    </main>
  );
}
