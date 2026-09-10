import React from 'react';
import { ArrowUp, Twitter, Send, Radio } from 'lucide-react';
import { NAV_ITEMS } from '../data/portfolioData';
import { PROFILE_CONFIG } from '../data/profileConfig';

interface FooterProps {
  onNavigateSection?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const scrollToTop = () => {
    if (onNavigateSection) {
      onNavigateSection('home');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="site-footer" className="border-t border-white/[0.08] bg-[#07080B] py-14 sm:py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-2xl tracking-widest text-white uppercase">
                RENZO<span className="text-[#EAA039]">.</span>
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EAA039]/10 text-[#EAA039] border border-[#EAA039]/20 font-bold">
                GROWTH & COMMUNITY
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              "Turning Attention Into Real Users." Focused on sustainable acquisition, community architecture, and on-chain conversion for Web3 & emerging tech.
            </p>

            {/* Small social icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={PROFILE_CONFIG.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-white/[0.04] hover:bg-[#EAA039]/20 hover:text-[#EAA039] border border-white/[0.08] flex items-center justify-center transition-colors text-slate-400"
                aria-label="X / Twitter"
                title="X / Twitter (@Toxicpanthera)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_CONFIG.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-white/[0.04] hover:bg-[#EAA039]/20 hover:text-[#EAA039] border border-white/[0.08] flex items-center justify-center transition-colors text-slate-400"
                aria-label="Telegram"
                title="Telegram (@Renzoblvue)"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={PROFILE_CONFIG.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md bg-white/[0.04] hover:bg-[#EAA039]/20 hover:text-[#EAA039] border border-white/[0.08] flex items-center justify-center transition-colors text-slate-400"
                aria-label="Telegram Channel"
                title="Telegram Channel (RENZO | WEB3 JOURNEY)"
              >
                <Radio className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = item.href.replace('#', '');
                      if (onNavigateSection) {
                        onNavigateSection(targetId);
                      } else {
                        const el = document.getElementById(targetId);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-[#EAA039] transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Philosophy */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200">
              Core Funnel
            </h4>
            <div className="space-y-1.5 text-xs font-mono text-slate-400">
              <div>01. Attention</div>
              <div>02. Engagement</div>
              <div>03. Traffic</div>
              <div>04. Conversion</div>
              <div className="text-[#EAA039] font-bold">05. Community</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Renzo. Web3 & AI Growth Architecture. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Built for high-impact conversion</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
