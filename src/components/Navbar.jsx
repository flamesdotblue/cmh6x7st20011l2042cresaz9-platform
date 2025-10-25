import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500" />
          <span className="text-lg font-semibold tracking-tight">HoloMeet</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#security" className="hover:text-white transition">Security</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition">
            Start free
          </a>
        </div>
      </div>
    </header>
  );
}
