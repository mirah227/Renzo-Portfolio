import React from 'react';
import { Radio, MessageSquare, Navigation, UserCheck, Users, ArrowRight } from 'lucide-react';

interface GrowthFrameworkProps {
  onOpenContact?: () => void;
}

const FRAMEWORK_STEPS = [
  {
    number: '01',
    title: 'ATTENTION',
    description: 'Get the right people to notice the project.',
    icon: Radio,
    tag: 'Discovery',
  },
  {
    number: '02',
    title: 'ENGAGEMENT',
    description: 'Turn attention into interaction.',
    icon: MessageSquare,
    tag: 'Interaction',
  },
  {
    number: '03',
    title: 'TRAFFIC',
    description: 'Move people from social platforms toward the product.',
    icon: Navigation,
    tag: 'Routing',
  },
  {
    number: '04',
    title: 'CONVERSION',
    description: 'Turn relevant visitors into registrations or users.',
    icon: UserCheck,
    tag: 'Action',
  },
  {
    number: '05',
    title: 'COMMUNITY',
    description: 'Build an environment that keeps people engaged.',
    icon: Users,
    tag: 'Retention',
  },
];

export const GrowthFramework: React.FC<GrowthFrameworkProps> = () => {
  return (
    <section id="framework" className="py-20 sm:py-28 relative bg-[#07080B] border-t border-white/[0.06]">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#EAA039]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EAA039]/10 border border-[#EAA039]/25 text-xs font-mono text-[#EAA039] font-bold tracking-wider uppercase">
            Growth Methodology
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How I Approach Growth
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            A sequential framework engineered to translate early discovery into sustained platform adoption.
          </p>
        </div>

        {/* 5-Step Visual Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {FRAMEWORK_STEPS.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === FRAMEWORK_STEPS.length - 1;

            return (
              <div
                key={item.number}
                className="p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-[#EAA039]/40 transition-all flex flex-col justify-between space-y-6 group relative"
              >
                {/* Step Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#EAA039] px-2 py-0.5 rounded bg-[#EAA039]/10 border border-[#EAA039]/20">
                      {item.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-300 group-hover:text-[#EAA039] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-white tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Tag & Step indicator */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{item.tag}</span>
                  {!isLast && (
                    <span className="hidden md:inline-block text-[#EAA039] font-bold">
                      →
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Pipeline Ribbon */}
        <div className="hidden lg:flex items-center justify-between px-6 py-4 rounded-xl bg-[#0C0D12] border border-white/[0.06] text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-[#EAA039]" />
            <span className="text-white font-semibold">End-to-End Pipeline:</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <span className="text-white font-medium">ATTENTION</span>
            <span className="text-[#EAA039]">→</span>
            <span className="text-white font-medium">ENGAGEMENT</span>
            <span className="text-[#EAA039]">→</span>
            <span className="text-white font-medium">TRAFFIC</span>
            <span className="text-[#EAA039]">→</span>
            <span className="text-white font-medium">CONVERSION</span>
            <span className="text-[#EAA039]">→</span>
            <span className="text-[#EAA039] font-bold">COMMUNITY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
