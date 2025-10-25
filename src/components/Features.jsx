import React from 'react';
import { Shield, Video, Users, Rocket } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'End‑to‑end encryption',
    desc: 'Secure meetings with modern cryptography, protected by default.'
  },
  {
    icon: Video,
    title: 'HD video + screenshare',
    desc: 'Crisp audio/video and smooth, low-latency screen sharing.'
  },
  {
    icon: Users,
    title: 'Unlimited participants',
    desc: 'No artificial time limits or paywalls—invite your whole team.'
  },
  {
    icon: Rocket,
    title: 'One‑click join, no installs',
    desc: 'Works in the browser on any device. Share a link and you’re in.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to meet better</h2>
          <p className="mt-3 text-white/70">Fast, secure, and beautifully simple for teams, classrooms, and communities.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 border border-white/10">
                  <item.icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card title="Private by design" tag="Security" anchorId="security">
            We minimize data collection and use strong encryption in transit and at rest, so your conversations stay yours.
          </Card>
          <Card title="Free forever" tag="Pricing" anchorId="pricing">
            Core features are completely free: unlimited minutes, unlimited meetings, and all essentials to collaborate.
          </Card>
          <Card title="Built for scale" tag="Reliability">
            Global infrastructure and auto-scaling ensure smooth calls, even with large groups and screen share.
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ title, tag, anchorId, children }) {
  return (
    <a href={anchorId ? `#${anchorId}` : undefined} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition block">
      <div className="flex items-center gap-2 text-xs text-white/60">
        <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2 py-0.5">{tag}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{children}</p>
    </a>
  );
}
