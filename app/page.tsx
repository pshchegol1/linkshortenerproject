import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { userId } = await auth();
  if (userId) {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-24 px-6 bg-white dark:bg-black rounded-xl shadow-lg">
        <Image
          className="mb-8 dark:invert"
          src="/next.svg"
          alt="App logo"
          width={120}
          height={32}
          priority
        />
        <h1 className="text-4xl font-bold text-center text-zinc-900 dark:text-zinc-50 mb-4">
          Instantly Shorten & Share Your Links
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 text-center max-w-xl mb-8">
          Welcome to the modern link shortener built for speed, analytics, and simplicity. Create, manage, and track your short links with ease.
        </p>
        <div className="flex flex-col gap-6 w-full max-w-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 flex flex-col items-center">
              <span className="text-2xl">⚡</span>
              <h2 className="font-semibold mt-2 mb-1 text-zinc-800 dark:text-zinc-100">Fast & Reliable</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">Shorten links instantly with robust uptime and performance.</p>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 flex flex-col items-center">
              <span className="text-2xl">📊</span>
              <h2 className="font-semibold mt-2 mb-1 text-zinc-800 dark:text-zinc-100">Analytics</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">Track clicks, referrers, and more with real-time analytics.</p>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 flex flex-col items-center">
              <span className="text-2xl">🔒</span>
              <h2 className="font-semibold mt-2 mb-1 text-zinc-800 dark:text-zinc-100">Secure & Private</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">Your data is protected with industry-leading security and privacy.</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button size="lg" className="text-lg px-8 py-6" variant="default">
              <a href="/sign-in">Get Started</a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
