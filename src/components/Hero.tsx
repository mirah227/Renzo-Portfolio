import React from 'react';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';
import { PortraitCard } from './PortraitCard';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24 overflow-hidden bg-grid-pattern scroll-mt-24"
    >
      {/* Anchor for backward compatibility */}
      <span id="hero" className="absolute -top-24" />

      {/* Background ambient dark golden amber glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#EAA039]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Text & CTAs Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Top eyebrow tracker */}
            <div className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#EAA039] uppercase">
              {HERO_DATA.tagline}
            </div>

            {/* Giant Bold Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight leading-[1.08] text-white">
              Turning attention into{' '}
              <span className="text-[#EAA039] block sm:inline">
                real users.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              I help Web3 and emerging technology projects turn social attention into measurable traffic, active community members, and registered users.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 sm:pt-3">
              {/* Primary CTA: Solid Amber Button */}
              <button
                id="hero-primary-cta"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-semibold text-sm sm:text-base text-[#07080B] bg-[#EAA039] hover:bg-[#f3ad45] shadow-lg transition-all duration-150 cursor-pointer"
              >
                <span>{HERO_DATA.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#07080B]" />
              </button>

              {/* Secondary CTA: Dark Button with clean border */}
              <button
                id="hero-secondary-cta"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-medium text-sm sm:text-base text-white bg-[#0D0E14] hover:bg-[#151722] border border-white/20 hover:border-white/40 transition-all duration-150 cursor-pointer"
              >
                <span>{HERO_DATA.secondaryCta}</span>
              </button>
            </div>

            {/* Quick positioning highlights */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-y-3 gap-x-8 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#EAA039]" />
                <span>Data-Backed Attribution</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#EAA039]" />
                <span>On-Chain & Retention-First</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#EAA039] animate-pulse" />
                <span className="text-slate-300">Available for Growth Engagements</span>
              </div>
            </div>
          </div>

          {/* Framed Portrait Card Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <PortraitCard onOpenContact={onOpenContact} />
          </div>
        </div>
      </div>
    </section>
  );
};
