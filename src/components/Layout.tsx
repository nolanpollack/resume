import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-full flex-col items-center bg-gradient-to-b from-white to-purple-100 p-4 lg:px-40 lg:py-12 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 ">
      {children}
    </main>
  );
}
