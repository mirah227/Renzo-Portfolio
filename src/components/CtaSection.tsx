import React from 'react';
import { ArrowRight, Send, Mail, Twitter, Radio } from 'lucide-react';
import { PROFILE_CONFIG } from '../data/profileConfig';

interface CtaSectionProps {
  onOpenContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="contact" className="py-20 sm:py-28 relative bg-[#07080B] border-t border-white/[0.06] overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EAA039]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#0C0D12] border border-white/[0.08] p-8 sm:p-12 lg:p-14 text-center">
          {/* Subtle top amber bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#EAA039]/40 to-transparent" />

          {/* Simple Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EAA039]/10 border border-[#EAA039]/25 text-xs font-mono text-[#EAA039] font-bold tracking-wider uppercase mb-5">
            Get In Touch
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Have a project that needs growth?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Whether preparing for a product launch, expanding your community, or looking to drive real traffic to your platform, let’s discuss how we can work together.
          </p>

          {/* Primary Action Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm sm:text-base text-[#07080B] bg-[#EAA039] hover:bg-[#f3ad45] shadow-lg transition-all cursor-pointer"
            >
              <span>Let's Work Together</span>
              <ArrowRight className="w-4 h-4 text-[#07080B]" />
            </button>
          </div>

          {/* Clean Social / Contact Channels Area */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {/* 1. X / Twitter */}
            <a
              href={PROFILE_CONFIG.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#08090D] border border-white/[0.08] hover:border-[#EAA039]/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="uppercase tracking-wider">X / Twitter</span>
                  <Twitter className="w-4 h-4 text-[#EAA039]" />
                </div>
                <div className="mt-2.5 font-display font-bold text-white text-base group-hover:text-[#EAA039] transition-colors">
                  {PROFILE_CONFIG.twitterHandle}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-slate-200">
                <span>View profile & posts</span>
                <span className="text-[#EAA039] group-hover:translate-x-0.5 transition-transform">↗</span>
              </div>
            </a>

            {/* 2. Telegram Profile */}
            <a
              href={PROFILE_CONFIG.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#08090D] border border-white/[0.08] hover:border-[#EAA039]/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="uppercase tracking-wider">Telegram</span>
                  <Send className="w-4 h-4 text-[#EAA039]" />
                </div>
                <div className="mt-2.5 font-display font-bold text-white text-base group-hover:text-[#EAA039] transition-colors">
                  {PROFILE_CONFIG.telegramHandle}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-slate-200">
                <span>Direct chat & outreach</span>
                <span className="text-[#EAA039] group-hover:translate-x-0.5 transition-transform">↗</span>
              </div>
            </a>

            {/* 3. Telegram Channel */}
            <a
              href={PROFILE_CONFIG.telegramChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#08090D] border border-white/[0.08] hover:border-[#EAA039]/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="uppercase tracking-wider">Telegram Channel</span>
                  <Radio className="w-4 h-4 text-[#EAA039]" />
                </div>
                <div className="mt-2.5 font-display font-bold text-white text-sm sm:text-base group-hover:text-[#EAA039] transition-colors">
                  {PROFILE_CONFIG.telegramChannelName}
                </div>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                  {PROFILE_CONFIG.telegramChannelDescription}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-slate-200">
                <span>Join channel</span>
                <span className="text-[#EAA039] group-hover:translate-x-0.5 transition-transform">↗</span>
              </div>
            </a>

            {/* 4. Email */}
            <a
              href={`mailto:${PROFILE_CONFIG.email}`}
              className="p-5 rounded-xl bg-[#08090D] border border-white/[0.08] hover:border-[#EAA039]/40 transition-all group flex flex-col justify-between"
              aria-label={`Email ${PROFILE_CONFIG.email}`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="uppercase tracking-wider">Email</span>
                  <Mail className="w-4 h-4 text-[#EAA039]" />
                </div>
                <div className="mt-2.5 font-display font-bold text-white text-sm sm:text-base group-hover:text-[#EAA039] transition-colors break-all">
                  {PROFILE_CONFIG.email}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-slate-200">
                <span>Send direct email</span>
                <span className="text-[#EAA039] group-hover:translate-x-0.5 transition-transform">↗</span>
              </div>
            </a>
          </div>

          {/* Direct Email fallback */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>Direct inquiries:</span>
            <a
              href={`mailto:${PROFILE_CONFIG.email}`}
              className="text-slate-200 hover:text-[#EAA039] transition-colors underline decoration-white/20 hover:decoration-[#EAA039]"
            >
              {PROFILE_CONFIG.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
