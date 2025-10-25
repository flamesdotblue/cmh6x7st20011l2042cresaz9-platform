import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  const handleStart = () => {
    const id = Math.random().toString(36).slice(2, 9);
    const url = `${window.location.origin}/?room=${id}`;
    navigator.clipboard?.writeText(url).catch(() => {});
    alert(`Room link copied to clipboard:\n${url}`);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(56,189,248,0.35),transparent),radial-gradient(1000px_500px_at_80%_-10%,rgba(99,102,241,0.35),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-10 lg:pb-16 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              End‑to‑end security • Free forever
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Video meetings reimagined
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              HoloMeet is a modern, privacy‑first platform for crystal‑clear video, instant screen share, and team presence—without limits or fees.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={handleStart} className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg hover:brightness-110 transition">
                <Rocket className="h-4 w-4" />
                Start a free meeting
              </button>
              <a href="#features" className="inline-flex items-center rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5 transition">
                Explore features
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2 text-xs text-white/60">
              <div>Unlimited minutes</div>
              <div>Secure by default</div>
              <div>No downloads</div>
            </div>
          </div>
          <div className="relative h-[460px] sm:h-[520px] md:h-[560px]">
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-neutral-900/40 shadow-2xl overflow-hidden">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
