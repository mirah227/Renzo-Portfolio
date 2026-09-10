import React from 'react';
import { X, ArrowRight, CheckCircle2, TrendingUp, Users, ShieldCheck, Zap, ExternalLink, BarChart3 } from 'lucide-react';
import { CaseStudyProject } from '../types';

interface CaseStudyModalProps {
  project: CaseStudyProject | null;
  onClose: () => void;
  onOpenContact: () => void;
  onViewFullDaneng?: () => void;
  onViewFullXwonbet?: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenContact,
  onViewFullDaneng,
  onViewFullXwonbet,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-[#0C0D12] border border-white/[0.12] shadow-[0_25px_80px_rgba(0,0,0,0.95)] text-slate-200 divide-y divide-white/[0.08]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-6 sm:p-8 bg-[#0F1017]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[#EAA039] bg-[#EAA039]/10 border border-[#EAA039]/20 px-2.5 py-0.5 rounded">
                  {project.category}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {project.timeline}
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {project.name}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                Role: <span className="text-white font-medium">{project.role}</span>
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.fullStory.summary}
          </p>

          {project.id === 'daneng-ai' && onViewFullDaneng && (
            <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                A dedicated 8-section breakdown is available for this project.
              </span>
              <button
                onClick={onViewFullDaneng}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-[#07080B] bg-[#EAA039] hover:bg-[#f3ad45] transition-colors cursor-pointer"
              >
                <span>Open Dedicated Experience</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#07080B]" />
              </button>
            </div>
          )}

          {project.id === 'xwonbet' && onViewFullXwonbet && (
            <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                A dedicated growth & campaign breakdown is available for this project.
              </span>
              <button
                onClick={onViewFullXwonbet}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold text-[#07080B] bg-[#EAA039] hover:bg-[#f3ad45] transition-colors cursor-pointer"
              >
                <span>Open Dedicated Experience</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#07080B]" />
              </button>
            </div>
          )}
        </div>

        {/* Verified Results Grid */}
        <div className="p-6 sm:p-8 bg-[#090A0F]">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-4 h-4 text-[#EAA039]" />
            <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              Verified Campaign Evidence
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.fullStory.verifiedMetrics.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between"
              >
                <div className="text-[11px] font-mono text-slate-400">
                  {item.label}
                </div>
                <div className="font-display text-2xl font-extrabold text-white my-1 text-[#EAA039]">
                  {item.value}
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge & Strategy */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#EAA039] font-bold mb-2">
              The Growth Bottleneck
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-black/40 p-4 rounded-xl border border-white/[0.05]">
              {project.fullStory.theChallenge}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#EAA039] font-bold mb-2">
              Strategic Execution Architecture
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-black/40 p-4 rounded-xl border border-white/[0.05]">
              {project.fullStory.theStrategy}
            </p>
          </div>
        </div>

        {/* Step-by-Step Funnel Execution */}
        <div className="p-6 sm:p-8 bg-[#090A0F]/60">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
            Funnel Implementation Breakdown
          </h3>

          <div className="space-y-4">
            {project.fullStory.funnelExecution.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#EAA039] font-bold uppercase">
                    Stage 0{idx + 1} · {step.stage}
                  </span>
                  <span className="text-xs font-semibold text-white">
                    {step.title}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.action}
                </p>
                <div className="pt-2 text-xs font-mono text-[#EAA039]/90 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#EAA039]" />
                  <span>Result: {step.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="p-6 sm:p-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
            Core Strategic Takeaways
          </h3>

          <ul className="space-y-2.5">
            {project.fullStory.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <span className="text-[#EAA039] font-bold font-mono">0{i + 1}.</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Action Footer */}
        <div className="p-6 sm:p-8 bg-[#0F1017] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-[#07080B] bg-[#EAA039] hover:bg-[#f3ad45] transition-colors cursor-pointer"
          >
            <span>Discuss Similar Architecture</span>
            <ArrowRight className="w-4 h-4 text-[#07080B]" />
          </button>

          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
