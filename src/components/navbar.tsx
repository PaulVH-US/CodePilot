"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-bold tracking-tight text-foreground">
          Code<span className="text-[oklch(0.65_0.2_255)]">Pilot</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/waitlist"
            className="text-sm bg-[oklch(0.65_0.2_255)] text-white px-4 py-1.5 rounded-md hover:opacity-90 transition-opacity font-medium"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}
