import React from 'react';
import { UserCheck, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { RENZO_INTRO } from '../data/portfolioData';

interface ShortIntroProps {
  onOpenContact: () => void;
}

export const ShortIntro: React.FC<ShortIntroProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#07080B] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#EAA039]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Heading & Core Statement */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#EAA039] font-bold tracking-wider">
              <UserCheck className="w-3.5 h-3.5 text-[#EAA039]" />
              <span>{RENZO_INTRO.tagline}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18]">
              Connecting social attention directly to active platform users.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {RENZO_INTRO.statement}
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-[#EAA039] hover:text-[#f3ad45] transition-colors cursor-pointer"
              >
                <span>Get in touch for growth advisory</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: 5 Disciplined Domains */}
          <div className="lg:col-span-7">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
              Core Practitioner Focus Areas:
            </div>

            <div className="space-y-3">
              {RENZO_INTRO.domains.map((domain, idx) => (
                <div
                  key={domain.title}
                  className="p-4 sm:p-5 rounded-xl bg-[#0C0D12] border border-white/[0.06] hover:border-[#EAA039]/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#EAA039] min-w-[28px]">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#EAA039] transition-colors">
                      {domain.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 max-w-md sm:text-right leading-relaxed">
                    {domain.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 text-[11px] font-mono text-slate-500 text-left sm:text-right">
              {RENZO_INTRO.footerNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
