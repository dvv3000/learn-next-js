import { ModeToggle } from "@/components/mode-toggle";
import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      {children}
    </main>
  );
}
