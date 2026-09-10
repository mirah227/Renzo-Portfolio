import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Users,
  Radio,
  Trophy,
  Swords,
  TrendingUp,
  Globe,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Flame,
  Clock,
  Sparkles
} from 'lucide-react';

interface XwonbetCaseStudyProps {
  onBack: () => void;
  onOpenContact: () => void;
}

export const XwonbetCaseStudy: React.FC<XwonbetCaseStudyProps> = ({
  onBack,
  onOpenContact,
}) => {
  return (
    <div className="min-h-screen bg-[#07080B] text-slate-100 selection:bg-[#EAA039]/20 selection:text-[#EAA039] relative">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/3 w-[550px] h-[550px] bg-[#EAA039]/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-[40%] right-0 w-[450px] h-[450px] bg-white/[0.02] rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Sticky Top Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-[#07080B]/90 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#EAA039]" />
              <span>Back to Portfolio</span>
            </button>
            <span className="text-white/20 hidden sm:inline">|</span>
            <button
              onClick={onBack}
              className="hidden sm:flex items-center focus:outline-none cursor-pointer group"
              aria-label="Return to portfolio home"
            >
              <span className="font-display font-extrabold text-sm tracking-widest text-white group-hover:text-[#EAA039] transition-colors uppercase">
                RENZO<span className="text-[#EAA039]">.</span>
              </span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400">
              Case Study · Growth & Community
            </span>
            <button
              onClick={onOpenContact}
              className="px-3.5 py-1.5 rounded-md text-xs font-semibold text-[#07080B] bg-[#EAA039] hover:bg-[#f3ad45] transition-colors cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 sm:space-y-24">
        {/* =========================================================
            HEADER & COMPACT OVERVIEW
        ========================================================= */}
        <header className="space-y-8">
          {/* Breadcrumb & Identifier */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/25 text-[#EAA039] font-bold tracking-wider uppercase">
              Case Study
            </span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">XWONBET</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">Growth & Community Management</span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-3">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              XWONBET
            </h1>
            <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#EAA039] tracking-tight">
              Growth Strategy & Community Management
            </p>
          </div>

          {/* Compact Overview Bar at the Top */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            {/* Role */}
            <div className="space-y-1.5 sm:pr-4">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Role
              </div>
              <div className="font-display text-base sm:text-lg font-bold text-white">
                Growth Strategy & Community Management
              </div>
            </div>

            {/* Focus */}
            <div className="pt-4 sm:pt-0 sm:pl-6 space-y-1.5">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Focus
              </div>
              <div className="font-mono text-xs sm:text-sm font-semibold text-[#EAA039]">
                Community Building · Social Growth · Raid Campaigns · Traffic
              </div>
            </div>
          </div>
        </header>

        {/* =========================================================
            01 — THE OBJECTIVE
        ========================================================= */}
        <section id="section-01" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider uppercase px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/20">
              01 — THE OBJECTIVE
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0D12] border border-white/[0.08] space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              Strengthening Community, Visibility & Inbound Traffic
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              <p>
                The work focused on strengthening <strong className="text-white font-semibold">XWONBET's</strong> community presence, increasing social visibility across relevant crypto circles, maintaining consistent day-to-day engagement, and actively driving targeted attention toward the project website.
              </p>
            </div>

            {/* Structured Goal Markers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-white/[0.06]">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1">
                <div className="text-[11px] font-mono text-[#EAA039] uppercase font-bold">
                  Pillar 1
                </div>
                <div className="text-xs font-semibold text-white">
                  Community Foundation
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Building an active, structured Telegram hub from day zero.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1">
                <div className="text-[11px] font-mono text-[#EAA039] uppercase font-bold">
                  Pillar 2
                </div>
                <div className="text-xs font-semibold text-white">
                  Social Visibility
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Expanding reach on Crypto Twitter through sustained outreach.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1">
                <div className="text-[11px] font-mono text-[#EAA039] uppercase font-bold">
                  Pillar 3
                </div>
                <div className="text-xs font-semibold text-white">
                  Engagement Velocity
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Activating users through contests, giveaways, and raids.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1">
                <div className="text-[11px] font-mono text-[#EAA039] uppercase font-bold">
                  Pillar 4
                </div>
                <div className="text-xs font-semibold text-white">
                  Website Traffic
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Converting social attention into measurable platform visits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            02 — WHAT I WORKED ON (Structured Cards)
        ========================================================= */}
        <section id="section-02" className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider uppercase px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/20">
              02 — WHAT I WORKED ON
            </span>
            <span className="text-xs font-mono text-slate-400">
              5 Key Tactical Areas
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1: Community Building */}
            <div className="p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-[#EAA039]/40 transition-colors flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#EAA039]">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-bold px-2 py-0.5 rounded bg-white/[0.04]">
                    Telegram
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#EAA039] transition-colors">
                  Community Building
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Helped build and organize the Telegram community from the ground up.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.05] text-[11px] font-mono text-slate-400">
                Hub setup, moderation & newcomer onboarding
              </div>
            </div>

            {/* Card 2: Social Growth */}
            <div className="p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-[#EAA039]/40 transition-colors flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#EAA039]">
                    <Radio className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-[#EAA039] font-bold px-2 py-0.5 rounded bg-[#EAA039]/10">
                    X Account
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#EAA039] transition-colors">
                  Social Growth
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Supported the official X account through consistent promotion and engagement.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.05] text-[11px] font-mono text-slate-400">
                Daily visibility & organic audience outreach
              </div>
            </div>

            {/* Card 3: Campaigns */}
            <div className="p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-[#EAA039]/40 transition-colors flex flex-col justify-between space-y-4 group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#EAA039]">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-bold px-2 py-0.5 rounded bg-white/[0.04]">
                    Contests
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#EAA039] transition-colors">
                  Campaigns
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Organized and supported contests, giveaways, and engagement campaigns.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.05] text-[11px] font-mono text-slate-400">
                Incentivized participation & community retention
              </div>
            </div>

            {/* Card 4: Raid Campaigns */}
            <div className="p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-[#EAA039]/40 transition-colors flex flex-col justify-between space-y-4 group md:col-span-1 lg:col-span-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#EAA039]">
                    <Swords className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-bold px-2 py-0.5 rounded bg-white/[0.04]">
                    Crypto Twitter
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#EAA039] transition-colors">
                  Raid Campaigns
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Coordinated targeted raid campaigns through a raid network to increase visibility across high-impact Crypto Twitter posts.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.05] text-[11px] font-mono text-slate-400">
                High-leverage attention capture on key ecosystem discussions
              </div>
            </div>

            {/* Card 5: Traffic Growth */}
            <div className="p-6 rounded-2xl bg-[#0C0D12] border border-white/[0.08] hover:border-[#EAA039]/40 transition-colors flex flex-col justify-between space-y-4 group md:col-span-1 lg:col-span-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-[#EAA039]/10 border border-[#EAA039]/30 flex items-center justify-center text-[#EAA039]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-[#EAA039] font-bold px-2 py-0.5 rounded bg-[#EAA039]/15">
                    Conversion
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#EAA039] transition-colors">
                  Traffic Growth
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Focused on turning social and community activity into increased website traffic.
                </p>
              </div>
              <div className="pt-3 border-t border-white/[0.05] text-[11px] font-mono text-slate-400">
                Driving referral visitors to the live sportsbook portal
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            03 — RESULTS (Strong Visual Results Section)
        ========================================================= */}
        <section id="section-03" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider uppercase px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/20 self-start">
              03 — RESULTS
            </span>
            <span className="text-xs font-mono text-slate-400">
              Verified Performance Telemetry
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0D12] border border-white/[0.08] space-y-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Campaign Growth Results
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Measurable growth achieved during the execution phase.
              </p>
            </div>

            {/* Results Display */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Metric 1: 100+ New X Followers */}
              <div className="p-6 sm:p-7 rounded-xl bg-[#090A0E] border border-white/[0.08] hover:border-white/[0.14] transition-colors flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Audience Growth
                  </span>
                  <Radio className="w-4 h-4 text-[#EAA039]" />
                </div>
                <div>
                  <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                    100+
                  </div>
                  <div className="text-sm font-mono text-[#EAA039] font-semibold mt-1">
                    New X Followers
                  </div>
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-white/[0.05]">
                  Organic follower acquisition through promotion
                </div>
              </div>

              {/* Metric 2: Under 2 Weeks Timeframe */}
              <div className="p-6 sm:p-7 rounded-xl bg-[#090A0E] border border-white/[0.08] hover:border-white/[0.14] transition-colors flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Execution Velocity
                  </span>
                  <Clock className="w-4 h-4 text-[#EAA039]" />
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    &lt; 2 Weeks
                  </div>
                  <div className="text-sm font-mono text-slate-300 font-semibold mt-1">
                    Rapid Ramp-Up Timeframe
                  </div>
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-white/[0.05]">
                  Sprint velocity from initial rollout to impact
                </div>
              </div>

              {/* Metric 3: 10x Increase in Website Traffic */}
              <div className="p-6 sm:p-7 rounded-xl bg-[#090A0E] border border-[#EAA039]/30 flex flex-col justify-between space-y-3 bg-gradient-to-b from-[#EAA039]/[0.05] to-transparent">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#EAA039] uppercase tracking-wider font-semibold">
                    Inbound Scale
                  </span>
                  <TrendingUp className="w-4 h-4 text-[#EAA039]" />
                </div>
                <div>
                  <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#EAA039] tracking-tight">
                    10×
                  </div>
                  <div className="text-sm font-mono text-white font-semibold mt-1">
                    Increase in Website Traffic
                  </div>
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-white/[0.05]">
                  Surge in portal traffic driven by community & campaigns
                </div>
              </div>
            </div>

            {/* Integrity / Reference Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#090A0E] border border-white/[0.06] flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-[#EAA039] shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-200">Verified Campaign Record:</strong> All performance indicators reflect recorded operational data during the XWONBET campaign sprint. Data reflects verified social follower acquisition and web traffic growth without inflation.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            04 — HOW THE GROWTH WORKED (Visual Flow)
        ========================================================= */}
        <section id="section-04" className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider uppercase px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/20">
              04 — HOW THE GROWTH WORKED
            </span>
            <span className="text-xs font-mono text-slate-400">
              4-Stage Conversion Model
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0D12] border border-white/[0.08] space-y-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                The Growth Funnel in Action
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                A connected chain linking community activation directly to platform traffic.
              </p>
            </div>

            {/* Stepper Flow Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {/* Stage 1: COMMUNITY */}
              <div className="p-5 rounded-xl bg-[#090A0E] border border-white/[0.06] hover:border-white/[0.12] transition-colors flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-xs font-mono font-bold text-slate-400">
                      01
                    </span>
                    <Users className="w-4 h-4 text-[#EAA039]" />
                  </div>
                  <h3 className="font-display text-lg font-extrabold text-white tracking-wide uppercase">
                    COMMUNITY
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Building and structuring a dedicated Telegram hub from the ground up, establishing an active home base for project supporters.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.04]">
                  Step 1: Foundation
                </div>
              </div>

              {/* Stage 2: ENGAGEMENT */}
              <div className="p-5 rounded-xl bg-[#090A0E] border border-white/[0.06] hover:border-white/[0.12] transition-colors flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-xs font-mono font-bold text-slate-400">
                      02
                    </span>
                    <Trophy className="w-4 h-4 text-[#EAA039]" />
                  </div>
                  <h3 className="font-display text-lg font-extrabold text-white tracking-wide uppercase">
                    ENGAGEMENT
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Maintaining active discussions, hosting contests, giveaways, and routine community interactions to sustain day-to-day momentum.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.04]">
                  Step 2: Activation
                </div>
              </div>

              {/* Stage 3: SOCIAL VISIBILITY */}
              <div className="p-5 rounded-xl bg-[#090A0E] border border-white/[0.06] hover:border-white/[0.12] transition-colors flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-xs font-mono font-bold text-slate-400">
                      03
                    </span>
                    <Swords className="w-4 h-4 text-[#EAA039]" />
                  </div>
                  <h3 className="font-display text-lg font-extrabold text-white tracking-wide uppercase">
                    SOCIAL VISIBILITY
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Mobilizing community activity alongside coordinated raid campaigns on Crypto Twitter to amplify reach across high-impact posts.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.04]">
                  Step 3: Amplification
                </div>
              </div>

              {/* Stage 4: TRAFFIC */}
              <div className="p-5 rounded-xl bg-[#0F1017] border border-[#EAA039]/40 flex flex-col justify-between space-y-4 shadow-lg">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-[#EAA039] flex items-center justify-center text-xs font-mono font-bold text-[#07080B]">
                      04
                    </span>
                    <TrendingUp className="w-4 h-4 text-[#EAA039]" />
                  </div>
                  <h3 className="font-display text-lg font-extrabold text-[#EAA039] tracking-wide uppercase">
                    TRAFFIC
                  </h3>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Directing heightened social visibility and community curiosity outward toward the project website, driving a 10× traffic surge.
                  </p>
                </div>
                <div className="text-[11px] font-mono text-[#EAA039] pt-2 border-t border-white/[0.06] font-semibold">
                  Step 4: Result (10× Traffic)
                </div>
              </div>
            </div>

            {/* Visual connector flow ribbon */}
            <div className="hidden md:flex items-center justify-between px-6 py-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-slate-400">
              <span className="text-white font-semibold">COMMUNITY</span>
              <span className="text-[#EAA039]">→</span>
              <span className="text-white font-semibold">ENGAGEMENT</span>
              <span className="text-[#EAA039]">→</span>
              <span className="text-white font-semibold">SOCIAL VISIBILITY</span>
              <span className="text-[#EAA039]">→</span>
              <span className="text-[#EAA039] font-bold">TRAFFIC (10×)</span>
            </div>
          </div>
        </section>

        {/* =========================================================
            05 — CAMPAIGN EXECUTION
        ========================================================= */}
        <section id="section-05" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider uppercase px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/20">
              05 — CAMPAIGN EXECUTION
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0D12] border border-white/[0.08] space-y-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Coordinated Raids & Momentum Drivers
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Maintaining continuous awareness through tactical synchronization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tactical Block A: Targeted Raid Campaigns */}
              <div className="p-6 rounded-xl bg-[#090A0E] border border-white/[0.06] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#EAA039]/10 border border-[#EAA039]/25 flex items-center justify-center text-[#EAA039]">
                    <Swords className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Targeted Raid Campaigns
                    </h3>
                    <div className="text-[11px] font-mono text-slate-400">
                      Crypto Twitter Visibility
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Targeted raid campaigns were coordinated through an active raid network to maintain consistent engagement and increase project visibility around relevant, high-impact Crypto Twitter posts.
                </p>

                <div className="pt-3 border-t border-white/[0.05] space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EAA039]" />
                    <span>Identified relevant niche CT conversations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EAA039]" />
                    <span>Synchronized community replies for maximum algorithmic lift</span>
                  </div>
                </div>
              </div>

              {/* Tactical Block B: Contests, Giveaways & Promotion */}
              <div className="p-6 rounded-xl bg-[#090A0E] border border-white/[0.06] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#EAA039]/10 border border-[#EAA039]/25 flex items-center justify-center text-[#EAA039]">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Sustaining Momentum
                    </h3>
                    <div className="text-[11px] font-mono text-slate-400">
                      Contests & Community Activity
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Contests, giveaways, routine community activity, and structured promotion played an essential role in keeping community members active and engaged, ensuring that attention was retained rather than lost after initial discovery.
                </p>

                <div className="pt-3 border-t border-white/[0.05] space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EAA039]" />
                    <span>Scheduled contests and reward incentives</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#EAA039]" />
                    <span>Frequent touchpoints to maintain daily active member counts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            06 — OUTCOME
        ========================================================= */}
        <section id="section-06" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#EAA039] tracking-wider uppercase px-2.5 py-1 rounded bg-[#EAA039]/10 border border-[#EAA039]/20">
              06 — OUTCOME
            </span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C0D12] border border-white/[0.08] space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              Integrated Growth Impact
            </h2>

            <div className="p-5 rounded-xl bg-[#090A0E] border border-white/[0.06] text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
              The work combined community management, social promotion, targeted campaigns, and engagement to help XWONBET build visibility and generate stronger website activity.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-slate-400">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="text-white font-semibold mb-1">Community Core</div>
                <div>Telegram hub formed and organized from zero</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="text-white font-semibold mb-1">Targeted Reach</div>
                <div>Raid coordination amplified CT presence</div>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="text-[#EAA039] font-semibold mb-1">Bottom Line</div>
                <div>10× surge in website traffic within 2 weeks</div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            BOTTOM NAVIGATION / ACTION FOOTER
        ========================================================= */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#EAA039]" />
            <span>Back to All Case Studies</span>
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-xs sm:text-sm font-semibold text-[#07080B] bg-[#EAA039] hover:bg-[#f3ad45] transition-colors cursor-pointer shadow-md"
          >
            <span>Discuss Similar Growth Architecture</span>
            <ArrowRight className="w-4 h-4 text-[#07080B]" />
          </button>
        </div>
      </main>
    </div>
  );
};
