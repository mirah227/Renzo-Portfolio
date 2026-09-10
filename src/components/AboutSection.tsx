import React from 'react';
import { UserCheck, ArrowRight, Target, Shield, Compass } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#07080B] border-t border-white/[0.06] overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#EAA039]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Personal positioning */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EAA039]/10 border border-[#EAA039]/25 text-xs font-mono text-[#EAA039] font-bold tracking-wider uppercase">
              <UserCheck className="w-3.5 h-3.5" />
              <span>About Renzo</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Growth marketing and community management built on real execution.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              <p>
                I am Renzo, a growth marketer and community manager working with Web3 and emerging technology teams.
              </p>
              <p>
                My focus is straightforward: helping projects expand their visibility, build active communities from the ground up, direct relevant traffic to live products, and convert social interest into measurable user activity.
              </p>
              <p>
                Having managed growth and community initiatives for projects like DANENG AI and XWONBET, I emphasize consistency and practical execution over empty hype. Whether establishing a new Telegram channel, executing targeted social campaigns, or streamlining user onboarding, I work directly on the ground to foster genuine community participation and sustained adoption.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-[#EAA039] hover:text-[#f3ad45] transition-colors cursor-pointer"
              >
                <span>Discuss your project needs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Working Principles */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              How I Work:
            </div>

            <div className="space-y-3">
              <div className="p-5 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-white/[0.16] transition-all space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#EAA039]">
                    <Target className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white">
                    Targeted Visibility Over Vanity Hype
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 pl-11 leading-relaxed">
                  Focusing promotional efforts on people and communities genuinely relevant to what the project offers, rather than temporary artificial inflation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-white/[0.16] transition-all space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#EAA039]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white">
                    Healthy, Engaged Community Hubs
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 pl-11 leading-relaxed">
                  Building and organizing Telegram and Discord channels where members receive clear answers, stay updated, and actively participate.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-white/[0.16] transition-all space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#EAA039]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white">
                    Bridging Attention to Active Usage
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 pl-11 leading-relaxed">
                  Ensuring that social attention and community campaigns translate directly into website traffic and completed user registrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
