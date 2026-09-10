import React from 'react';
import { PROFILE_CONFIG } from '../data/profileConfig';

interface PortraitCardProps {
  onOpenContact?: () => void;
}

export const PortraitCard: React.FC<PortraitCardProps> = () => {
  return (
    <div className="relative group w-full max-w-[460px] mx-auto lg:mx-0">
      {/* Subtle outer amber ambient backlight */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#EAA039]/20 via-[#EAA039]/5 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none" />

      {/* Main card container */}
      <div
        id="hero-portrait-card"
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0C0D12] border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.85)] group-hover:border-white/[0.16] transition-all duration-300"
      >
        {/* Image wrapper with dark background */}
        <div className="relative aspect-[4/5] sm:aspect-[3.85/4.85] w-full overflow-hidden bg-[#0C0D12]">
          <img
            src={PROFILE_CONFIG.imageUrl}
            alt="Renzo — Growth & Community Manager"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
          />

          {/* Natural subtle vignette overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080B]/90 via-[#07080B]/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080B]/20 via-transparent to-[#07080B]/20 pointer-events-none" />

          {/* Floating Badge in Bottom Left */}
          <div className="absolute bottom-5 left-5 right-5 sm:right-auto z-20">
            <div className="px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-[#090A0E]/95 border border-white/10 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.8)]">
              <h4 className="text-sm sm:text-base font-display font-bold text-white tracking-tight">
                Growth & Community Architect
              </h4>

              <div className="mt-1 flex flex-wrap items-center gap-x-2 text-[11px] font-mono font-semibold tracking-wider text-[#EAA039]">
                <span>COMMUNITY STRATEGY ·</span>
                <span>ON-CHAIN CONVERSION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
