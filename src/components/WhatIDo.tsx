import React from 'react';
import {
  TrendingUp,
  Megaphone,
  Users,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';

interface WhatIDoProps {
  onOpenContact: () => void;
}

const CAPABILITIES = [
  {
    number: '01',
    title: 'MARKETING & GROWTH',
    description:
      'Develop and execute campaigns that drive awareness, engagement, traffic, and user growth.',
    icon: TrendingUp,
  },
  {
    number: '02',
    title: 'KOL & PROMOTION',
    description:
      'Promote projects through strategic content, networking, targeted outreach, and community reach.',
    icon: Megaphone,
  },
  {
    number: '03',
    title: 'COMMUNITY BUILDING',
    description:
      'Build and manage Telegram and Discord communities while keeping them active, organized, and engaged.',
    icon: Users,
  },
  {
    number: '04',
    title: 'CAMPAIGNS & EVENTS',
    description:
      'Plan and execute contests, giveaways, Spaces, AMAs, and other activities that increase community participation.',
    icon: Sparkles,
  },
  {
    number: '05',
    title: 'PROJECT MANAGEMENT',
    description:
      'Coordinate campaigns, contributors, community activities, and day-to-day execution to keep projects moving.',
    icon: CheckCircle2,
  },
  {
    number: '06',
    title: 'CREATIVE STRATEGY',
    description:
      'Develop fresh ideas, narratives, and campaign angles that help projects stand out in a crowded market.',
    icon: Lightbulb,
  },
];

export const WhatIDo: React.FC<WhatIDoProps> = ({ onOpenContact }) => {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 relative bg-[#07080B] border-t border-white/[0.06] scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Anchor targets for backwards-compatibility */}
      <span id="skills" className="absolute -top-24" />
      <span id="what-i-do" className="absolute -top-24" />
      <span id="capabilities" className="absolute -top-24" />

      {/* Subtle warm ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#EAA039]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EAA039]/10 border border-[#EAA039]/25 text-xs font-mono text-[#EAA039] font-bold tracking-wider uppercase">
            What I Do
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
            Web3 Marketer · KOL · Community Builder · Project Manager
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            I help Web3 projects grow their visibility, communities, and user activity through marketing, KOL promotion, community management, and hands-on execution.
          </p>
        </div>

        {/* 6 Visually Distinct Capability Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;

            return (
              <div
                key={cap.number}
                className="p-7 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-[#EAA039]/40 transition-all duration-200 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Top Bar: Number Tag & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider">
                      {cap.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 group-hover:text-[#EAA039] group-hover:border-[#EAA039]/30 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-white transition-colors">
                      {cap.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>

                {/* Bottom subtle divider line */}
                <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Core Capability
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#EAA039] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Prominent Closing Statement Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0A0B10] border border-white/[0.08] relative overflow-hidden">
          {/* Subtle top amber highlight */}
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#EAA039]/40 to-transparent" />

          <div className="max-w-3xl space-y-3">
            {/* Visual Pipeline Headline */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg sm:text-xl md:text-2xl font-display font-extrabold tracking-tight text-white">
              <span>Attention</span>
              <span className="text-[#EAA039] font-mono">→</span>
              <span>Community</span>
              <span className="text-[#EAA039] font-mono">→</span>
              <span>Users</span>
              <span className="text-[#EAA039] font-mono">→</span>
              <span className="text-[#EAA039]">Growth</span>
            </div>

            {/* Supporting Line */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              From creating attention around a project to building communities and driving real user activity, the focus is measurable growth.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400">
              Hands-on execution across strategy, promotion, and management.
            </span>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-[#EAA039] hover:text-[#f3ad45] transition-colors cursor-pointer"
            >
              <span>Discuss collaboration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
