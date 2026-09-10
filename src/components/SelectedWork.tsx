import React from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, Users, Zap, BarChart2, ShieldCheck } from 'lucide-react';
import { SELECTED_PROJECTS } from '../data/portfolioData';
import { CaseStudyProject } from '../types';

interface SelectedWorkProps {
  onSelectProject: (project: CaseStudyProject) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-[#07080B] scroll-mt-20 sm:scroll-mt-24">
      {/* Anchor targets for backward compatibility */}
      <span id="selected-work" className="absolute -top-24" />
      <span id="portfolio" className="absolute -top-24" />

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#EAA039]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#EAA039] font-bold tracking-wider mb-3">
              <BarChart2 className="w-3.5 h-3.5 text-[#EAA039]" />
              <span>SELECTED WORK</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Featured Case Studies
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Two high-impact growth architectures translating social visibility into registered users and measurable traffic.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400">
            Click card to explore complete case study →
          </div>
        </div>

        {/* 2 Main Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {SELECTED_PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative rounded-2xl sm:rounded-3xl bg-[#0C0D12] border border-white/[0.08] hover:border-[#EAA039]/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            >
              {/* Subtle amber ambient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#EAA039]/[0.03] to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Header: Project Name & Role */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#EAA039] bg-[#EAA039]/10 border border-[#EAA039]/20 px-2.5 py-1 rounded-md font-semibold inline-block mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#EAA039] transition-colors">
                      {project.name}
                    </h3>
                    <div className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                      Role: <span className="text-slate-200 font-medium">{project.role}</span>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white/[0.04] group-hover:bg-[#EAA039] flex items-center justify-center text-slate-400 group-hover:text-[#07080B] transition-all flex-shrink-0 shadow-md">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* One-Sentence Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Visual / Evidence Area */}
                <div className="mb-6 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#090A0E] border border-white/[0.06] group-hover:border-white/[0.12] transition-colors space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#EAA039]" />
                      <span>{project.visualEvidence.badge}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#EAA039] bg-[#EAA039]/10 px-2 py-0.5 rounded">
                      {project.visualEvidence.highlightValue} {project.visualEvidence.highlightLabel}
                    </span>
                  </div>

                  {/* Render Visual Evidence Graphic based on project */}
                  {project.id === 'daneng-ai' ? (
                    <div className="space-y-2.5 pt-1">
                      {/* Funnel visualization bars */}
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-400">Total Page Views</span>
                          <span className="text-white font-bold">6,221</span>
                        </div>
                        <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                          <div className="h-full bg-slate-400/60 rounded-full w-full" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-400">Unique Visitors</span>
                          <span className="text-white font-bold">3,189</span>
                        </div>
                        <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                          <div className="h-full bg-slate-300 rounded-full w-[51%]" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-400">Registered Accounts</span>
                          <span className="text-[#EAA039] font-bold">139 (4.36% CVR)</span>
                        </div>
                        <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                          <div className="h-full bg-[#EAA039] rounded-full w-[14%]" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 pt-1">
                      {/* XWONBET visual multiplier surge */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <div className="text-[10px] font-mono text-slate-400">Website Traffic</div>
                          <div className="text-xl sm:text-2xl font-display font-extrabold text-[#EAA039] mt-0.5">
                            10× Surge
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">Relative to baseline</div>
                        </div>

                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <div className="text-[10px] font-mono text-slate-400">Follower Velocity</div>
                          <div className="text-xl sm:text-2xl font-display font-extrabold text-white mt-0.5">
                            100+ Gained
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">&lt; 14 days organic</div>
                        </div>
                      </div>

                      {/* Velocity bar */}
                      <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-white/40 to-[#EAA039] rounded-full w-full" />
                      </div>
                    </div>
                  )}
                </div>

                {/* 2–3 Strongest Results */}
                <div className="space-y-2.5 pb-6 border-b border-white/[0.06]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Key Quantified Results:
                  </div>
                  {project.results.map((res, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm">
                      <span className="font-mono font-bold text-[#EAA039] min-w-[75px]">
                        {res.metric}
                      </span>
                      <span className="text-slate-300 font-medium">
                        {res.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* "View Case Study" Interaction */}
              <div className="pt-5 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white group-hover:text-[#EAA039] flex items-center gap-1.5 transition-colors">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>

                <span className="text-[11px] font-mono text-slate-400">
                  Full story & metrics →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
