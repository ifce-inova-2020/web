import { ReactNode } from "react";

interface SectionDashboardProps {
  title: string;
  children: ReactNode;
}

export function SectionDashboard({ title, children }: SectionDashboardProps) {
  return (
    <section className="flex-1 w-full min-h-screen flex flex-col sm:gap-6 gap-2 text-zinc-700 bg-zinc-100 sm:pb-0 pb-20 rounded-tl-2xl sm:rounded-tr-none rounded-tr-2xl sm:p-10 p-6 md:px-20 sm:px-10 px-4 ">
      <h1 className="sm:text-3xl text-2xl font-bold">{title}</h1>
      {children}
    </section>
  );
}
