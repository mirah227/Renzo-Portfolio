import React from 'react';
import { ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import { IMPACT_METRICS } from '../data/portfolioData';

interface ImpactSectionProps {
  onExploreWork: () => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onExploreWork }) => {
  return (
    <section id="experience" className="py-16 sm:py-24 relative bg-[#090A0F] border-y border-white/[0.08] scroll-mt-20 sm:scroll-mt-24">
      {/* Anchor targets for backward compatibility */}
      <span id="impact" className="absolute -top-24" />
      <span id="achievements" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Compact & Direct */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#EAA039] font-bold tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#EAA039]" />
              <span>MEASURABLE OUTCOMES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Verified Impact
            </h2>
          </div>

          <button
            onClick={onExploreWork}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-[#EAA039] transition-colors cursor-pointer"
          >
            <span>Explore full story in case studies</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Compact Grid of Large Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {IMPACT_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.06] hover:border-[#EAA039]/40 transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white group-hover:text-[#EAA039] transition-colors tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-2 leading-snug">
                  {metric.label}
                </div>
              </div>

              {metric.subtext && (
                <div className="mt-3 pt-2.5 border-t border-white/[0.05] text-[11px] font-mono text-slate-400">
                  {metric.subtext}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Curiosity prompt without heavy explanation */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#EAA039]" />
            <span>Metrics verified from DANENG AI and XWONBET launch and growth campaigns.</span>
          </div>

          <div className="text-slate-500">
            Attribution & funnels detailed inside case studies
          </div>
        </div>
      </div>
    </section>
  );
};
