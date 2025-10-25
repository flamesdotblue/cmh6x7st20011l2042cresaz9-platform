import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500" />
            <span>HoloMeet</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#security" className="hover:text-white transition">Security</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#features" className="hover:text-white transition">Features</a>
          </div>
          <p>© {new Date().getFullYear()} HoloMeet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
